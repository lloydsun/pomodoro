import React from 'react'

// create a timer component that count down and can stop and resume the counter

type startTime = {
  minutes: number,
}

type CounterProps = {
  minutes: number
}

type CounterState = {
  init_seconds: number,
  seconds: number,
  active: boolean
}

class Counter extends React.Component<CounterProps, CounterState> {
  interval: number
  constructor(props: startTime) {
    super(props)
    const init_seconds = props.minutes * 60
    this.state = {
      init_seconds: init_seconds,
      seconds: init_seconds,
      active: false
    }
  }

  secondsToMinutes(seconds: number) {
    let minutes = Math.floor(seconds / 60)
    let remainingSeconds = seconds % 60
    if (remainingSeconds < 10) {
      return `${minutes}:0${remainingSeconds}`
    } else {
      return `${minutes}:${remainingSeconds}`
    }
  }

  tick() {
    if (this.state.active) {
      if (this.state.seconds > 0) {
        this.setState({
          seconds: this.state.seconds - 1
        })
      } else {
        this.resetCounter()
      }
    }
  }

  startCounter() {
    this.setState({
      active: true
    })
    this.interval = setInterval(() => this.tick(), 1000)
  }

  stopCounter() {
    this.setState({
      active: false
    })
    clearInterval(this.interval)
  }

  resetCounter() {
    this.setState({
      seconds: this.state.init_seconds,
      active: false
    })
    clearInterval(this.interval)
  }

  // function start timer

  // when this.active is ture then start the counter every 1 second

  // create a button function that will be called every second

  render() {
    let remain_seconds = this.state.seconds



    return (
      <div>
        <p>{this.secondsToMinutes(remain_seconds)}</p>
        <div>
          <button onClick={() => this.state.active ? this.stopCounter() : this.startCounter()}>{this.state.active ? '暂停' : '开始'}</button>
          <button onClick={() => this.resetCounter()}>重置</button></div>
      </div>

    )
  }
}


export default Counter


