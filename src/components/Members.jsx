//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Members component
//------------------------------------------------------------------------------
export default class Members extends React.Component{
    renderMembers(){
        let memberKeys = Object.keys(this.props.members);
        if(!memberKeys || memberKeys.length === 0){
            return <div>No members</div>;
        }

        return memberKeys.map((username)=>{
                let member = this.props.members[username];
                console.log('view/Members:renderMembers',member);
                return (
                    <div key={member.id} className='member'>
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
