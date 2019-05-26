import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './components/Counter'
import counter, {getHttpData} from './reducers'
import thunk from 'redux-thunk'

const store = createStore(counter,applyMiddleware(thunk))
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    onClick={() => store.dispatch(getHttpData())}
  />,
  rootEl
)

render()
store.subscribe(render)
