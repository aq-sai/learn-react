import React from 'react'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/">Home</IndexLink></li>
          <li><IndexLink to="/about">About</IndexLink></li>
          <li><IndexLink to="/repos">Repos</IndexLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
