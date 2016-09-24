const React = require('react');

class Spaceship extends React.Component {

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>It goes {this.props.speed} lightyears per hour fast!!!</h2>
        <h3>Has rockets: {this.props.hasRockets}</h3>
        <h3>Colors: {this.props.colors}</h3>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;
