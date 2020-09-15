import React, { Component } from 'react'

export class Delivery_Method extends Component {
    render() {
        return (
            <div className="delivery__inputs__input">
                <input type="radio" name="delivery_method"></input>
                <p>Kurier DHL</p>
                <p>12.99$</p>
            </div>
        )
    }
}

export default Delivery_Method
