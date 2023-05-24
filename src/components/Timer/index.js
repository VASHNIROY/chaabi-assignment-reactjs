import {Component} from 'react'
import './index.css'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minutes: 5,
      seconds: 0,
    }

    this.intervalId = null
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      const {minutes, seconds} = this.state

      if (minutes === 0 && seconds === 0) {
        this.stopTimer()
        // Timer has reached 0, you can perform any desired action here
      } else if (seconds === 0) {
        this.setState(prevState => ({
          minutes: prevState.minutes - 1,
          seconds: 59,
        }))
      } else {
        this.setState(prevState => ({
          seconds: prevState.seconds - 1,
        }))
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId)
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="timer-main-container">
        <div className="timer-container">
          <h1 className="timer-title">Timer</h1>
          <div className="timer">
            <span className="minutes">
              {minutes.toString().padStart(2, '0')}
            </span>
            <span className="colon">:</span>
            <span className="seconds">
              {seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Timer
