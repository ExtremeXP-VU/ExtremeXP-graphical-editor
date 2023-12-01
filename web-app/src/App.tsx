import { useState } from 'react'
import './styles/app.scss'
import Load from './components/Load/Load'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Load/>
    </>
  )
}

export default App
