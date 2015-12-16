
const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { pushPath } = require('redux-simple-router');

function App({ pushPath, children }) {
    return <div>
        {children}
    </div>

}
export default connect(
  null,
  { pushPath }
)(App);