/*
action creator dispatched/fired off w/ action - object with type & payload
*/

export function increment(index) {
    console.log(index);
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

export function addComment(postId, author, comment) {
    console.log('dispatch add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

export function removeComment(postId, i) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}