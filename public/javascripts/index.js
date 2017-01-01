var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./commentBox');
var Nav = require('./nav');
var SendText = require('./SendText');
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
require('!style!css!../stylesheets/style.css');
var comment = <CommentBox url="/comments"/>;
/*ReactDOM.render(
    <CommentBox url="/comments"/>,
    document.getElementById('commentbox')
 );*/
 ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
        <IndexRoute component={CommentBox}/>
        <Route path="SendText" component={SendText}/>
    </Route>
  </Router>
), document.getElementById('commentbox'))
