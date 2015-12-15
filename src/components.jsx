import React from 'react';
import ReactDOM from 'react-dom';

//------------------------------------------------------------------------------
// Replybox component
//------------------------------------------------------------------------------
const ENTER_KEY = 13;
export class Replybox extends React.Component{
    componentDidMount(){
        document.addEventListener('keypress', (e)=>{
            if(e.which=== ENTER_KEY){
                this.sendMessage();
            }
        });
    }
    sendMessage(){
        let text = this.refs.replyInput;
        const {store} = this.context;
        store.dispatch({
            type: 'ADD_MSG',
            text: text.value,
            username: 'roundrobin',
            date: +new Date()
        });

        this.refs.replyInput.value = '';
    }
    render(){
        return (<div className='reply-box'>
            <input type='text' ref='replyInput' className='reply-box__input' placeholder='Say something nice'/>
            <button className='reply-box__send' onClick={this.sendMessage.bind(this)}>Send</button>
        </div>);
    }
}

Replybox.contextTypes = {
    store: React.PropTypes.object
};

//------------------------------------------------------------------------------
// ChatThread component
//------------------------------------------------------------------------------
export class ChatThread extends React.Component{
    renderMessages(){
        const {store} = this.context;
        let messsages = store.getState().chatMesssages;
        if(!messsages || messsages.length === 0){
            return <div>No messages</div>;
        }

        return messsages.map((msgObj)=>{
                console.log('view/ChatThread:renderMessages',msgObj);
                return <div key={msgObj.id} className='msg'>
                <div className='msg__header'>{msgObj.username} - {msgObj.date}</div>
                <div className='msg__body'>{msgObj.text}</div>
                </div>
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
    render(){
        return (<div>
            <div className='message-thread' ref='messagesThread'>
            {this.renderMessages()}
            </div>
            <Replybox/>
        </div>);
    }
}


ChatThread.contextTypes = {
    store: React.PropTypes.object
};