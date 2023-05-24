import {Component} from 'react'
import Timer from '../Timer'
import Header from '../Header'
import './index.css'

const letters = ['g', 'a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'h', ';']

class TypingWebsite extends Component {
  state = {
    number: 0,
    wrongkey: false,
    startTimer: false,
    keyCount: 0,
    typedText: '',
    originalText: [],
  }

  componentDidMount() {
    this.getNumber()
  }

  getNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 10)
    console.log(randomNumber)
    this.setState({number: randomNumber, wrongkey: false})
  }

  randomLetters = () => {
    const {number} = this.state

    return <div className="givenLetters-container">{letters[number]}</div>
  }

  wrongKey = () => {
    const {number} = this.state
    this.setState(prevState => ({
      typedText: [...prevState.typedText, letters[number]],
      wrongkey: true,
    }))
  }

  changeInput = event => {
    const {number} = this.state
    const match = letters[number] === event.key
    const checkBackSpace = match || event.key === 'Backspace'
    const check =
      checkBackSpace && event.key !== 'Backspace'
        ? this.setState(
            prevState => ({
              keyCount: prevState.keyCount + 1,
              startTimer: true,
              originalText: event.target.value,
              typedText: [...prevState.typedText, letters[number]],
            }),
            this.getNumber,
          )
        : this.wrongKey(event)
  }

  getAccuracy = () => {
    const {typedText, keyCount} = this.state
    const accuracy = (keyCount / typedText.length) * 100
    return accuracy.toFixed()
  }

  render() {
    const {wrongkey, startTimer, keyCount} = this.state
    const inputCss = wrongkey ? 'input-error' : 'user-input'
    const accuracy = this.getAccuracy()
    return (
      <>
        <Header />
        <div className="app-container">
          {startTimer && <Timer />}
          <img
            alt="keyboard"
            className="keyboard-img"
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1684919477/Screenshot_408_pqhoyp.png"
          />
          <p>
            {' '}
            <span className="accuracy">
              No of keys you have entered Correctly:
            </span>{' '}
            {keyCount}
          </p>
          {this.randomLetters()}
          <input
            type="text"
            onKeyDown={this.changeInput}
            className={inputCss}
            placeholder="Enter the above keys"
          />
          <p>
            <span className="accuracy">Accuracy:</span>{' '}
            {accuracy === 'NaN' ? 0 : accuracy}%
          </p>
        </div>
      </>
    )
  }
}

export default TypingWebsite
