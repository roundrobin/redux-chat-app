//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { pushPath } = require('redux-simple-router');
//------------------------------------------------------------------------------
// Internval dependencies
//------------------------------------------------------------------------------
import { ChatThread} from './ChatThread.jsx';

//------------------------------------------------------------------------------
// Views
//------------------------------------------------------------------------------
class RoomView extends React.Component{

    render(){
        console.log('view/Rooms:render', this.props);
        return (<div>
            <h1>Room {this.props.params.roomSlug}</h1>
        </div>);
    }
}

export const Room = connect(
  null,
  { pushPath }
)(RoomView);

class HomeView extends React.Component{
    render(){
        return (<div>
            <button onClick={() => this.props.pushPath('/foo')}>Go to /foo</button>
            <ChatThread {...this.props}/>
        </div>);
    }
}

export const Home = connect(
  null,
  { pushPath }
)(HomeView);

function FooView({ pushPath, children }) {
    return <div>
        <button onClick={() => pushPath('/')}>Go to home</button>
        Fooo
    </div>
}


export const Foo = connect(
  null,
  { pushPath }
)(FooView);


function MemberView({ pushPath, children }) {
    return <div>
            <h1>Members view</h1>

    </div>

}

export const Member = connect(
  null,
  { pushPath }
)(MemberView);