import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav-container">
          <img
            className="logo"
            alt="type-test-logo"
            src="https://res.cloudinary.com/dg81jw9qd/image/upload/v1684960094/Screenshot_424_oveiya.png"
          />
          <ul className="un-ordered-header-list">
            <Link className="link-ele" to="/">
              <li>Home</li>
            </Link>
            <Link className="link-ele" to="/tutorial">
              <li>Tutorial</li>
            </Link>
            <Link className="link-ele" to="/test">
              <li>Test</li>
            </Link>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header
