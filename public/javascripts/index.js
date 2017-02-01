var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./commentBox');
var Nav = require('./nav');
var SendText = require('./SendText');
var List = require('./TextList');
var TextContent= require('./textContent');
var GalleryByReactApp = require('./gallery.js');
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
require('!style!css!sass!../stylesheets/style.scss');
var comment = <CommentBox url="/comments"/>;
/*ReactDOM.render(
    <CommentBox url="/comments"/>,
    document.getElementById('commentbox')
 );*/
 ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Nav}>
        <IndexRoute component={List}/>
        <Route path="TextContent/:TextId" component={TextContent}>
            <IndexRoute component={CommentBox}/>
        </Route>
        <Route path="SendText" component={SendText}/> 
        <Route path="Gallery" component={GalleryByReactApp}/>
    </Route>
  </Router>
), document.getElementById('commentbox'))
