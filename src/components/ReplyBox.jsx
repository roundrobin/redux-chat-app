//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
const ENTER_KEY = 13;
//------------------------------------------------------------------------------
// Replybox component
//------------------------------------------------------------------------------

export default class Replybox extends React.Component{
    componentDidMount(){
        document.addEventListener('keypress', (e)=>{
            if(e.which=== ENTER_KEY){
                this.sendMessage();
            }
        });
    }
    sendMessage(){
        let text = this.refs.replyInput.value;
        // Only send a message if the text is not empty
        if(text){
            this.props.onSend(text);
            this.refs.replyInput.value = '';
        }
    }
    render(){
        return (
            <div className='reply-box'>
                <input type='text' ref='replyInput' className='reply-box__input' placeholder='Say something nice'/>
                <button className='reply-box__send' onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
        );
    }
}
