import React  from 'react';
import ReactDOM  from 'react-dom';
import $  from 'jquery';
import { Link } from 'react-router';
/*
$.ajax({
  url: '/TextList',
  dataType: 'json',
  cache: false,
  success : (data) => {
   var  List = React.createClass({
        render: function () {
            return 
                <ul>
                    {this.data.map((text) => {
                        return (
                          <li><Link to ="/TextContent/text._id">text.title</Link></li>
                        )
                    })}                                                                                              
                </ul>
             ;
        }
    });
   module.exports = List;
    }
});*/


class List extends React.Component {
    constructor(props){
        super(props);
        this.state={
          data:[]
      }
  }
  componentDidMount () {
    $.ajax({
          url: '/TextList',
          dataType: 'json',
          success : (data) => {
            this.setState({data: data});
          }
        });
    }
    render () {
        return (
            <ul  className="textList" ref="list">
                {this.state.data.map((text)=>{
                  var  url='/TextContent/'+text._id;
                  var time = text.meta.createAt.slice(0, 10);
                  return (
                    <li><Link to ={url}>{text.title}</Link>
                    <p>{time}</p></li>
                    );
                })}
            </ul>
        );
    }
};
module.exports = List;