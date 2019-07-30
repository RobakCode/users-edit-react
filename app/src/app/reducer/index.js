import { combineReducers } from 'redux';
import { reducer as users } from '../components/Users';

const rootReducer = combineReducers({
  users
});

export default rootReducer;