import { Field } from 'formik'
import React, { Component } from 'react'

export class Delivery_Method extends Component {
    render() {
        return (
            <div className="delivery__inputs__input">
                <Field type="radio" name="delivery_method" value={this.props.value}></Field>
                <p>Kurier DHL</p>
                <p>12.99$</p>
            </div>
        )
    }
}

export default Delivery_Method
