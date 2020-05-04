import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';

import { fetchTodos} from './actions';
import { Todo } from '../../../api/types';

export const loading = createReducer(false)
  .handleAction([fetchTodos.request], (state, action) => true)
  .handleAction(
    [fetchTodos.success, fetchTodos.failure],
    (state, action) => false
  );

export const todos = createReducer<Todo[]>([])
  .handleAction(fetchTodos.success, (state, action) => action.payload)

const todosReducer = combineReducers({
  loading,
  todos,
});

export default todosReducer;
