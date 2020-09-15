import React, { Component } from 'react'

export class Payment_Method extends Component {
    render() {
        return (
            <div className="payment__inputs__input">
                <input type="radio" name="payment_method"></input>
                <p>Za pobraniem</p>
            </div>
        )
    }
}

export default Payment_Method
