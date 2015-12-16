//------------------------------------------------------------------------------
// External dependencies
//------------------------------------------------------------------------------
const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { pushPath } = require('redux-simple-router');
//------------------------------------------------------------------------------
// Internal dependencies
//------------------------------------------------------------------------------
import DevTools from '../DevTools.jsx';
//------------------------------------------------------------------------------
// View
//------------------------------------------------------------------------------
function App({ pushPath, children }) {
    return <div>
        {children}
        <DevTools />
    </div>

}
export default connect(
  null,
  { pushPath }
)(App);