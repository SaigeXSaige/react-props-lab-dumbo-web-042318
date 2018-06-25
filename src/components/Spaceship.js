// Code The Spaceship Component Here
// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
import React from 'react';

class Spaceship extends React.Component {

    render() {
        return (
            <div className="spaceship">
                <h2>{this.props.name}</h2>
                <p>Speed: {this.props.speed}</p>
                <p>Rockets: {this.props.hasRockets}</p>
                <p>Colors:{this.props.colors.join(', ')}</p>
            </div>
        )
    }
};

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
};

export default Spaceship;
