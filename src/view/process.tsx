import React from 'react'
import Counter from '../components/counter'

export default class Process extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: 'work',
    }
  }

  return() {
    <div>
      <div>工作 短休 长休</div>
      <h2>工作</h2>
      <Counter minutes={25}></Counter>
      <h2>休息</h2>
      <Counter minutes={5}></Counter>
    </div>
  }
}