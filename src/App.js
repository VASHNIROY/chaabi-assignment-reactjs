import {Route, Switch} from 'react-router-dom'
import TypingWebsite from './components/TypingWebsite'
import WordsTest from './components/WordsTest'
import Tutorials from './components/Tutorials'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={TypingWebsite} />
    <Route exact path="/test" component={WordsTest} />
    <Route exact path="/tutorial" component={Tutorials} />
    <Route />
  </Switch>
)

export default App
