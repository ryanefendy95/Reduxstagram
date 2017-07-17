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
    console.log('inside comments reducer');
    return state;
}

const rootReducer = combineReducers({posts, comments});

export default rootReducer;