import { createRoot } from 'react-dom/client'
import React from 'react'
import Counter from './counter'

class App extends React.Component {
  render() {
    return (
    <main className='wrapper'>
    <h1><ruby>番茄<rt>Pomodoro</rt></ruby><ruby>工作法<rt>Technique</rt></ruby></h1>
    <Counter minutes={25}></Counter>
    </main>
    )
  }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);