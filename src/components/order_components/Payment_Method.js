import { Field } from 'formik'
import React, { Component } from 'react'


export class Payment_Method extends Component {
    render() {
        return (
            <div className="payment__inputs__input">
                <Field type="radio" name="payment_method" value={this.props.value}></Field>
                <p>Za pobraniem</p>
            </div>
        )
    }
}

export default Payment_Method
