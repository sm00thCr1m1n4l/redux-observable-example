import {Epic} from 'redux-observable'
import { RootAction, isActionOf, RootState} from 'typesafe-actions'
import {filter, switchMap, map, tap} from 'rxjs/operators'
import * as actions from './actions'
import * as api from '../../../api'
export const fetchTodos:Epic<RootAction,RootAction,RootState>=(action$,state$)=>{
  return action$.pipe(
    filter(isActionOf(actions.fetchTodos.request)),
    switchMap(api.fetchTodos),
    map(todos =>actions.fetchTodos.success(todos))
  )
}