import { useContext } from 'react'
import { Context } from './context'

export default function Child() {
  const { state, dispatch } = useContext(Context)

  return (
    <div>
      <div>
        {state.a}
      </div>
      <button onClick={() => dispatch({ type: 'inc' })}>
        click
      </button>
    </div>
  )
}
