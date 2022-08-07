import {component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  render() {
    const {speed} = this.state

    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="main-heading">SPEEDOMETER</h1>
          <div className="speedometer-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
              className="speedometer-image"
            />
          </div>
          <h2 className="speed-very">Speed is {speed}mph</h2>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              type="button"
              className="accelerate-button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="break-button"
              onClick={this.onDecrement}
            >
              Apply break
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
