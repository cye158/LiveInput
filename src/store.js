import { createStore } from 'redux';
import constants from './constants';

const ADD_MSG = constants.ADD_MSG;

const defaultState = {
    msg: ''
};

const msgReducer = (state = defaultState, action) => { 
    switch(action.type){
        case ADD_MSG:
            return {...state, msg: action.msg};
        default:
            return state;
    } 
}

const store = createStore(msgReducer);

export default store;