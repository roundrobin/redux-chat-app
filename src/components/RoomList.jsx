//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
const { pushPath } = require('redux-simple-router');
//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
// Members component
//------------------------------------------------------------------------------
class RoomsView extends React.Component{
    _openRoom(roomId){
        console.log('view/Rooms:renderRooms', this.props);

        this.props.pushPath('/member/'+roomId);
    }
    renderRooms(){
        let rooms = this.props.rooms;
        if(!rooms || rooms.length === 0){
            return <div>No rooms</div>;
        }

        console.log('view/Members:renderRooms', rooms);
        return rooms.map((room)=>{
            console.log('view/Rooms:renderRooms', room);
            return (
                <div key={`r-${room.id}`} className='room'>
                    <div className='room__title' onClick={this._openRoom.bind(this, room.id)}>{room.title}</div>
                </div>
            );
        });
    }
    render(){
        return (<div className='rooms'>
            {this.renderRooms()}
        </div>);
    }
}

export default connect(
  null,
  { pushPath }
)(RoomsView);
