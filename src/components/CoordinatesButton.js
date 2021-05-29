// Code CoordinatesButton Component Here
import React, { Component } from 'react' 


export default class CoordinatesButton extends Component {

    coordinatesHandler = (e) => {
        const x = e.clientX
        const y = e.clientY
        const coordinates = [x, y]
        this.props.onReceiveCoordinates(coordinates)
    }

    render() {
        return(
            <div>
                <button onClick={this.coordinatesHandler}>test</button>
            </div>
        )
    }

}
