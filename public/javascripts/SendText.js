import React  from 'react';
import ReactDOM  from 'react-dom';
import $  from 'jquery';
class SendText extends React.Component {
    handleSubmit (e) {
        e.preventDefault();
        var title = this.refs.title.value.trim();
        var contents = this.refs.contents.value.trim();
        var text = {title: title, contents: contents};
        if (!contents || !title) {
          return;
        }
        console.log(1);
        $.ajax({
          url: '/SendText',
          dataType: 'json',
          type: 'POST',
          data: text,
          success : (data) => {
            window.location.hash = '#';
          },
        })
    }
    render() {
        return (
            <form className="TextForm" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="标题" ref="title" /><br/>
                <textarea rows="10" cols="30" placeholder="文章内容" ref="contents" />
                <input type="submit" value="发表" />
            </form>
        )
    }
};
module.exports = SendText;