import { Field } from 'formik'
import React, { Component } from 'react'

export class Delivery_Method extends Component {
    render() {
        let isChecked;
        if(this.props.delivery == this.props.value){
        isChecked = true;
        } else {
        isChecked = false;    
        }
        return (
            <div className="order__form__delivery__inputs__input" style={isChecked ? {backgroundColor:"white",border:"solid 1px lightgray"} : {backgroundColor:"#f4f4f4",fontWeight:"400"}}>
                <Field type="radio" name="delivery_method" value={this.props.value} checked={isChecked}  onChange={this.props.handleDeliveryChange}></Field>
                <div>
                <p>Kurier DHL</p>
                <p>12.99$</p>
                </div>
            </div>
        )
    }
}

export default Delivery_Method
