import React from 'react'
import Counter from '../components/counter'

interface FSM {
  phase?:1|2|3
}

interface IProps {
}

enum Phase {
  work = 1,
  rest = 2,
  longRest = 3
}

export default class Process extends React.Component<FSM> {
  constructor(props:IProps) {
    super(props)
    this.enterPhase = this.enterPhase.bind(this)
    this.restBack = this.restBack.bind(this)
    this.state = {
      phase: 1,
      pomodoro:0
    }
  }

  enterPhase(phase:Phase) {
    this.setState({
      phase: phase,
      pomodoro: this.state.pomodoro + 1
    })
  }

  restBack(phase:Phase) {
    this.setState({
      phase: phase,
    })
  }


  render() {
    let nextPhase = 2
    if (this.state.pomodoro > 0 && this.state.pomodoro % 4 === 0) {
      nextPhase = 3
    }


    if (this.state.phase === 1) {
      return (
        <div>
          <h2>工作</h2>
          <Counter minutes={15} handler={this.enterPhase} nextPhase={nextPhase}></Counter>
        </div>
      )
    } else if(this.state.phase === 2) {
      return (
        <div>
          <h2>短休</h2>
          <Counter minutes={5} handler={this.restBack} nextPhase={1}></Counter>
        </div>
      )
    }else if(this.state.phase === 3){
      return (
        <div>
          <h2>长休</h2>
          <Counter minutes={30} handler={this.restBack} nextPhase={1}></Counter>
        </div>
      )
    }
    
  }
}