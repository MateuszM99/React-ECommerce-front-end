import React, { Component } from 'react'

export class Order_Details extends Component {
    render() {
        return (
            <div className="order__inputs">
                            <span>
                                <label>Email:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>Name:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>Surname:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>Street:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>House number:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>Post-Code:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>City:</label>
                                <input type="text"></input>
                            </span>
                            <span>
                                <label>Country:</label>
                                <select></select>
                            </span>
                            <span>
                                <label>Phone number:</label>
                                <input type="text"></input>
                            </span>
                        </div>
        )
    }
}

export default Order_Details
