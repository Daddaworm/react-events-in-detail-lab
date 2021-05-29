// Code DelayedButton Component Here
import React, { Component } from 'react' 


export default class DelayedButton extends Component {

    delayHandler = (e) => {
        e.persist();
        setTimeout(() => {return this.props.onDelayedClick(e)}, this.props.delay)
    }

    render() {
        return(
            <div>
                <button onClick={this.delayHandler}>Delayed Button</button>
            </div>
        )
    }

}
