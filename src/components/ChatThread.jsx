//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';
//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
import {addMessage, asyncSayActionCreator, addRandomMember} from '../actions';

import Replybox from './Replybox.jsx';
import Members from './Members.jsx';

//------------------------------------------------------------------------------
// ChatThread component
//------------------------------------------------------------------------------
let scrolledDown = false;
class ChatThreadWrapped extends React.Component{
    renderMessages(){
        let messsages = this.props.chatMesssages;
        if(!messsages || messsages.length === 0){
            return <div>No messages</div>;
        }

        return messsages.map((msgObj)=>{
                return (
                    <div key={msgObj.id} className='msg'>
                        <div className='msg__header'>{msgObj.username} - {msgObj.date}</div>
                        <div className='msg__body'>{msgObj.text}</div>
                    </div>
                );
        });
    }
    componentDidUpdate() {
        if (this.shouldScrollBottom && this.refs.messagesThread) {
            let node = ReactDOM.findDOMNode(this.refs.messagesThread);
            if(node){
                node.scrollTop = node.scrollHeight;
            }
        }
    }
    componentWillUpdate() {
        if(this.refs.messagesThread){
            let node = ReactDOM.findDOMNode(this.refs.messagesThread);
            this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
        }

    }
    componentDidMount(){
        if(!scrolledDown){
            scrolledDown = true;
            this._scrollToBottom();
        }
    }
    _scrollToBottom(){
        if(this.refs.messagesThread){
            let messageThreadNode = ReactDOM.findDOMNode(this.refs.messagesThread);
            let scrollHeight = messageThreadNode.scrollHeight;
            messageThreadNode.scrollTop = scrollHeight + 2000;
        }

    }
    render(){
        console.log('view/ChatThread:render', 'call', this.props);
        let members = this.props.members;

        return (<div>
            <button onClick={this.props.asyncMessage.bind(this)}>Async message adding</button>
            <button onClick={this.props.asyncMemberAction.bind(this)}>Add random member</button>
            <Members members={members}/>
            <div className='message-thread' ref='messagesThread'>
                {this.renderMessages()}
            </div>
            <Replybox onSend={this.props.sendMessage}/>
        </div>);
    }
}
const mapStateToProps = (state) =>{
    return {
        members: state.members,
        chatMesssages: state.chatMesssages
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        asyncMessage: (id)=> {
            dispatch(asyncSayActionCreator('Hiii man'))
        },
        sendMessage: (text)=>{
            dispatch(addMessage(text));
        },
        asyncMemberAction: ()=>{
            dispatch(addRandomMember());
        }
    }
}

export const ChatThread = connect(mapStateToProps, mapDispatchToProps)(ChatThreadWrapped);


