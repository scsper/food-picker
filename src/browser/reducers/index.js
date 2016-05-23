//import { combineReducers } from 'redux';

const initialState = {
    filters: []
}

// Right now we just have filters.
// TODO : Pull out the state in app.jsx and put it in state
export default function app(state = initialState, action){
    return {
        filters : filters(state.filters, action)
    }
}

//Clean up. This reducer modifies the current filters selected
function filters(state = [], action){
    switch (action.type){
        case "ADD_FILTER":
            const toAdd = state.indexOf(action.filter);
            if(toAdd === -1){
                return Object.assign({}, state, [
                        ...state,
                        action.filter
                    ]
                );
            }else{
                return state;
            }
        case "REMOVE_FILTER":
            const toDelete = state.indexOf(action.filter);
            let arr;
            if(toDelete > -1){
                return Object.assign({}, state, [
                    ...state.slice(0, toDelete),
                    ...state.slice(toDelete +1, state.length)
                    ]
                );
            }else{
                return state
            }
        default:
            return state;
    }
}
