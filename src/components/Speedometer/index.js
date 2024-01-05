// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  applyAccelerator = () => {
    this.setState(previousState =>
      previousState.speed < 200
        ? {speed: previousState.speed + 10}
        : {speed: 200},
    )
  }

  applyBrake = () => {
    this.setState(previousState =>
      previousState.speed > 0
        ? {speed: previousState.speed - 10}
        : {speed: 200},
    )
  }

  render() {
    const {speed} = this.state

    return (
      <div className="backgroundContainer">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-img"
        />
        <h1 className="sub-heading">
          Speed is {speed}mph
        </h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.applyAccelerator}
          >
            Accelerate
          </button>
          <button className="break-btn" type="button" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
