import React, { Component } from 'react';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.renderComment = this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.match.params.postId, i)} >&times;</button>
                </p>
            </div>
        )
    };

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.match.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset(); // reset form
    };

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="type" ref="author" placeholder="author"/>
                    <input type="type" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}