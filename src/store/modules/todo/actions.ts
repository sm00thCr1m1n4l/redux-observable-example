import {Todo} from '../../../api/types'
import {createAsyncAction } from 'typesafe-actions';

export const fetchTodos = createAsyncAction(
  '@todo/FETCH_TODOS_REQUEST',
  '@todo/FETCH_TODOS_SUCCESS',
  '@todo/FETCH_TODOS_FAILURE'
)<undefined, Todo[], undefined>();
