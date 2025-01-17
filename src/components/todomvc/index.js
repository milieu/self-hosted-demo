import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

const store = createStore(reducer)

const TodoMvcWrapper = <Provider store={store}>
  <App />
</Provider>

export default TodoMvcWrapper
