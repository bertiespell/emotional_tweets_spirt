import { combineReducers } from 'redux';
import insightsReducer from './insights.reducer';
import { reducer as formReducer} from 'redux-form';
export default combineReducers({
    insights: insightsReducer,
    form: formReducer
});