//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { pushPath } from 'redux-simple-router';
//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Members component
//------------------------------------------------------------------------------
class Members extends React.Component{
    showMember(memberId){
        this.props.pushPath('/member/'+memberId);
    }
    renderMembers(){
        let memberKeys = Object.keys(this.props.members);
        if(!memberKeys || memberKeys.length === 0){
            return <div>No members</div>;
        }

        return memberKeys.map((username)=>{
                let member = this.props.members[username];
                console.log('view/Members:renderMembers',member);
                return (
                    <div key={member.id} className='member' onClick={this.showMember.bind(this, member.id)}>
                        <div className='member__username'>{member.username}</div>
                    </div>
                );
        });
    }
    render(){
        return (<div className='members'>
            {this.renderMembers()}
        </div>);
    }
}

export default connect(
  null,
  { pushPath }
)(Members);