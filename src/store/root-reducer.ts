import { combineReducers } from 'redux';

import todosReducer from './modules/todo/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
