import { combineReducers } from 'redux';

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0,i), // before the one we are updating
                {...state[i], likes: state[i].likes+1},
                ...state.slice(i+1),
            ];
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post w/ a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

function postComments (state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // return the new state w/ the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // need to return the new state w/o the deleted comment
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.i),
                // after the deleted one, to the end
                ...state.slice(action.i+1)
            ]
        default:
            return state;
    }
    return state;
}

const rootReducer = combineReducers({posts, comments});

export default rootReducer;