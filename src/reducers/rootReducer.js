import { combineReducers} from 'redux';

import cardReducer from '../reducers/cardReducer';
import userReducer from '../reducers/userReducer';

export default combineReducers({
    cardReducer,
    userReducer
});

