import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import * as todoActions from './store/modules/todo/actions';
function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => {
    return {
      todos: state.todos.todos,
      loading: state.todos.loading
    }
  })
  const fetchTodos = useCallback(() => {
    dispatch(todoActions.fetchTodos.request())
  },[dispatch])
  useEffect(()=>{
    fetchTodos()
  },[fetchTodos])
  const todoVNodes = state.todos.map(t => (
    <li key={t.id}>
      {t.id}
      <br />
      {t.email}
      <br />
      {t.realName}
    </li>
  ))

  return (
    <div className="App">
      <button onClick={fetchTodos}>获取todos</button>
      {state.loading ? (<p>loading</p>) : todoVNodes}
      
    </div>
  );
}

export default App;
