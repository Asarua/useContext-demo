import { Context } from './context'
import { useReducer } from 'react'
import { initialData, reducer } from './reducer'
import Child from './Child'

function App() {
  const [state, dispatch] = useReducer(reducer, initialData)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Child />
    </Context.Provider>
  )
}

export default App
