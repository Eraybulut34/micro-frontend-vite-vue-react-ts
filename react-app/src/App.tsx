import React from 'react'
import Button from './components/Button'
import './App.css'

function App() {
  const handleClick = (type: string) => {
    alert(`${type} button clicked!`)
  }

  return (
    <div className="react-app">
      <h1>React Micro Frontend</h1>
      <p>This component is created with React</p>
      <div className="buttons">
        <Button text="Primary Button" variant="primary" onClick={() => handleClick('primary')} />
        <Button text="Secondary Button" variant="secondary" onClick={() => handleClick('secondary')} />
        <Button text="Danger Button" variant="danger" onClick={() => handleClick('danger')} />
      </div>
    </div>
  )
}

export default App 