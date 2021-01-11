// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CounterContext = React.createContext()

function CounterProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return (
    <CounterContext.Provider {...props} value={value}>
      {props.children}
    </CounterContext.Provider>
  )
}

function CountDisplay() {
  const [count] = React.useContext(CounterContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(CounterContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CounterProvider>
        <CountDisplay />
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
