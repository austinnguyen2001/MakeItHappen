import { createStore } from "redux";
import { SET_ITEMS } from './actionTypes';

const initialState = {
    items: []
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            return { ...state, items: action.payload };
        }
        default: {
            return state;
        }
    }
}

export default createStore(reducer);