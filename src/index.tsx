import { createRoot } from 'react-dom/client'
import React from 'react'
import Process from './view/process'

class App extends React.Component {
  render() {
    return (
      <main className='wrapper'>
        <h1><ruby>番茄<rt>Pomodoro</rt></ruby><ruby>工作法<rt>Technique</rt></ruby></h1>
        <Process />
      </main>
    )
  }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode><App /></React.StrictMode>);