import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import { compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import * as todoEpics from './modules/todo/epics'
import { RootAction, RootState } from 'typesafe-actions';
export const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();
const initialState = {};
const middlewares = [epicMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(rootReducer, initialState, enhancer);

const rootEpic = combineEpics(
  ...Object.values(todoEpics)
);
epicMiddleware.run(rootEpic)
export default store;