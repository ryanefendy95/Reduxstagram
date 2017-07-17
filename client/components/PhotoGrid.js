import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Photo from './Photo';

class PhotoGrid extends Component {
    render() {
        return (
            <div className="photo-grid">
                <pre>
                    {this.props.posts.map((post, i) => <Photo {...this.props} key={i} id={i} post={post} />)}
                </pre>
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);