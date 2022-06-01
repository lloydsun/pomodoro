import React, { Component } from 'react'
type CounterProps = {
  minutes: number,
}

type CounterStates = {
  seconds: number,
}

export default class NCounter extends Component<CounterProps, CounterStates> {

  constructor(props: CounterProps) {
    super(props)

    this.state = {
      seconds: this.props.minutes * 60
    }
  }

  render() {
    return (
      <div>{this.state.seconds}</div>
    )
  }
}
