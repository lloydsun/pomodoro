import React from 'react'

// create a timer component that count down and can stop and resume the counter

type CounterProps = {
  minutes: number,
  handler: object,
  nextPhase: number
}

type CounterState = {
  init_seconds: number,
  seconds: number,
  active: boolean
}

class Counter extends React.Component<CounterProps, CounterState> {
  interval: number
  constructor(props: CounterProps) {
    super(props)
    // let init_seconds = props.minutes * 120
    this.state = {
      init_seconds: this.props.minutes * 60,
      seconds: this.props.minutes * 60,
      active: false
    }
  }

  componentDidMount() {
    this.updateTimer(this.props.minutes)
  }

  updateTimer(minutes: number) {
    this.setState({
      seconds: minutes * 60
    })
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
        this.props.handler(this.props.nextPhase)
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
    this.clear()
  }

  resetCounter() {
    this.setState({
      seconds: this.state.init_seconds,
      active: false
    })
    this.clear()
  }

  clear() {
    clearInterval(this.interval)
  }

  componentWillUnmount(): void {
    this.clear()
  }


  render() {
    let remain_seconds = this.state.seconds
    
    return (
      <div className='counter-wrapper'>
        <div className='counter'>{this.secondsToMinutes(remain_seconds)}</div>
        <div>
          <button onClick={() => this.state.active ? this.stopCounter() : this.startCounter()}>{this.state.active ? '暂停' : '开始'}</button>
          <button onClick={() => this.resetCounter()}>重置</button>
        </div>
      </div>

    )
  }
}


export default Counter


