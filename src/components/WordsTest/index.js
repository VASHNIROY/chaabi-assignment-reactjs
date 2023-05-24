import {Component} from 'react'
import Header from '../Header'
import './index.css'

class TypingTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      currentWordIndex: 0,
      words: ['apple', 'banana', 'cherry', 'date'],
      startTime: null,
      endTime: null,
      elapsedTime: null,
      completed: false,
    }
  }

  handleChange = event => {
    const {value} = event.target
    const {currentWordIndex, words, startTime, completed} = this.state

    if (!startTime) {
      this.setState({startTime: new Date()})
    }

    if (!completed && value.endsWith(' ')) {
      const nextWordIndex = currentWordIndex + 1

      if (nextWordIndex === words.length) {
        const endTime = new Date()
        const elapsedTime = (endTime - startTime) / 1000

        this.setState({
          endTime,
          elapsedTime,
          completed: true,
        })
      } else {
        this.setState({
          currentWordIndex: nextWordIndex,
          inputValue: '',
        })
      }
    } else {
      this.setState({inputValue: value})
    }
  }

  render() {
    const {
      inputValue,
      currentWordIndex,
      words,
      elapsedTime,
      completed,
    } = this.state

    return (
      <>
        <Header />
        <div className="typing-test-main-container">
          <div className="typing-test-container">
            <h1 className="typing-test-heading">Typing Test</h1>
            <p className="typing-test-instructions">
              Type the following words:
            </p>
            <p className="typing-test-word">{words[currentWordIndex]}</p>
            <input
              className="typing-test-input"
              type="text"
              value={inputValue}
              onChange={this.handleChange}
              disabled={completed}
            />
            {completed && (
              <div className="typing-test-result">
                <p className="typing-test-time">
                  Elapsed Time: {elapsedTime} seconds
                </p>
                <p className="typing-test-completed">Test completed!</p>
              </div>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default TypingTest
