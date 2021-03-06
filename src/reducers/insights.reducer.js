import * as types from '../types/types';

const initialState = {
    data: {},
    buttonClicked: '',
    user: '',
    fetching: true,
    error: null
};


function insightsReducer (prevState = initialState, action) {
    switch(action.type) {
        case types.FETCH_INSIGHTS_REQUEST: {
            const newState = Object.assign({}, prevState);
            newState.fetching = true;
            return newState;
        }
        case types.FETCH_INSIGHTS_SUCCESS: {
            const newState = Object.assign({}, prevState);
            let newData = Object.assign({}, newState.data);
            newData = action.data.data.personality;
            newState.data = newData;
            newState.fetching = false;
            return newState;
        }
        case types.FETCH_INSIGHTS_ERROR: {
            const newState = Object.assign({}, prevState);
            let newData = Object.assign({}, newState.data);
            newData = action.data;
            newState.error = newData;
            newState.fetching = false;
            return newState;
        }
        default: {
            return prevState;
        }
    }
}


function normaliseData(data) {
    console.log(data.result);
}

export default insightsReducer;