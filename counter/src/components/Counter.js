import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.getHttpData = this.getHttpData.bind(this);
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  getHttpData(){
    this.props.onClick()
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <p>
          Clicked: {value.num} times
          {' '}
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          {' '}
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={this.incrementAsync}>
            Increment async
          </button>
          <button onClick={this.getHttpData}>获取数据</button>
        </p>
        <div style={ {background:'red', height:'200px'} }>{value.httpData}</div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Counter
