import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Photo from './Photo';
import Comment from './Comments';

class Single extends Component {
    render() {
        const { postId } = this.props.match.params;
        const i = this.props.posts.findIndex(post => post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} ></Photo>
                <Comment postComments={postComments} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);