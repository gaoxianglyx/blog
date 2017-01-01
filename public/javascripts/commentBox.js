import React  from 'react';
import ReactDOM  from 'react-dom';
import marked  from 'marked';
import $  from 'jquery';

class Comment extends React.Component {
    onclick (index){this.props.click(this.props.index)}
    rawMarkup () {
        let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return { __html: rawMarkup };
    }
    render () {
        return (
          <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()} />
          <button className="delate" onClick={this.onclick.bind(this)}>删除</button>
          </div>
          );
    }
};
class CommentList extends React.Component {
  clicks(index){this.props.delete(index)}
  render () {
    return (
      <div className="commentList">
        {this.props.data.map((comment)=>{
          return (
            <Comment author={comment.author} index = {comment._id} click={this.clicks.bind(this)}>
            {comment.text}
            </Comment>
            );
        })}
      </div>
      );
}
};

class CommentForm extends React.Component {
    handleSubmit (e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        if (!text || !author) {
          return;
      }
      this.props.onCommentSubmit({author: author, text: text});
      this.refs.author.value = '';
      this.refs.text.value = '';
      return;
  }
  render () {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
      <input type="text" placeholder="你的名字" ref="author" />
      <input type="text" placeholder="说些什么..." ref="text" />
      <input type="submit" value="发表" />
      </form>
      );
    }
};

class CommentBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
          data:[]
      }
  }
  deleteClick (index) {
    var url = '/comments/'+index;
    $.ajax({
      url: url,
      type: 'delete',
      success : (data) => {
        this.setState({data: data});
    }
})
}
loadCommentsFromServer () {
    $.ajax({
      url: '/comments',
      dataType: 'json',
      cache: false,
      success : (data) => {
        this.setState({data: data});
    },
    error (xhr, status, err) {
        console.error(comment, status, err.toString());
    }
});
}
handleCommentSubmit (comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});    
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success : (data) => {
        this.setState({data: data});
    },
    error (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
    }
});    
}
componentDidMount () {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
}
render () {
    return (
      <div className="commentBox">
      <h1>我的留言板</h1>
      <CommentList data={this.state.data} delete={this.deleteClick.bind(this)}/>
      <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
      );
}
};

module.exports = CommentBox;