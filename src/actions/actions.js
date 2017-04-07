import * as types from '../types/types';
import axios from 'axios';

export function getInsights (username) {
    return function(dispatch) {
        dispatch(fetchInsightsRequest());
        axios
            .get(`http://localhost:3000/api/${username}/insights`)
            .then(res => {
                dispatch(fetchInsightsSuccess(res));
            })
            .catch(err => {
                dispatch(fetchInsightsError(err));
            });
    };
}


export function fetchInsightsRequest() {
    return {
        type: types.FETCH_INSIGHTS_REQUEST
    };
}

export function fetchInsightsSuccess(data) {
    return {
        type: types.FETCH_INSIGHTS_SUCCESS,
        data
    };
}

export function fetchInsightsError(err) {
    return {
        type: types.FETCH_INSIGHTS_ERROR,
        data: err
    };
}
