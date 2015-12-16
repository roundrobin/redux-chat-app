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
function HomeView({ pushPath, children }) {
    return <div>
            <button onClick={() => pushPath('/foo')}>Go to /foo</button>
            <ChatThread {...this.props}/>
    </div>

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