import React  from 'react';
import ReactDOM  from 'react-dom';
import $  from 'jquery';
class TextContent extends React.Component {
    render() {
        var title = '',content = '';
        var url = '/TextContent/'+this.props.params.TextId;
        $.ajax({
          url: '/TextContent/'+this.props.params.TextId,
          dataType: 'json',
          cache: false,
          success : (data) => {
                this.refs.title.innerHTML = data[0].title;
                this.refs.content.innerHTML = data[0].contents;
          }
        });
        return (
            <div className="textContent">
                <h1 ref="title"></h1>
                <p ref="content"></p>
                {this.props.children}
            </div>
        )
    }
}
module.exports = TextContent;