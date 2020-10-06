import React, { Component } from 'react'
import { Field } from 'formik'
import Delivery_Method from './Delivery_Method'
import Payment_Method from './Payment_Method'

export class PaymentDeliveryForm extends Component {

    constructor(props){
        super(props);

    }

    


    render() {
        const isChecked = this.state;
        return (
            <div className="order__form__payment__delivery">
                <span>     
                    <label>Delivery method:</label>
                    <div className="order__form__delivery__inputs">       
                            <Delivery_Method value={"1"} delivery={this.props.delivery} handleDeliveryChange={this.props.handleDeliveryChange}/>
                            <Delivery_Method value={"2"} delivery={this.props.delivery} handleDeliveryChange={this.props.handleDeliveryChange}/>                                   
                    </div>
                </span>
                {this.props.errors.delivery_method && this.props.touched.delivery_method ? <div className="validation">{this.props.errors.delivery_method}</div> : null}
                <span>     
                    <label>Payment method:</label>
                    <div className="order__form__payment__inputs">
                        <Payment_Method value={"1"} payment={this.props.payment} handlePaymentChange={this.props.handlePaymentChange}/>
                        <Payment_Method value={"2"} payment={this.props.payment} handlePaymentChange={this.props.handlePaymentChange}/>
                    </div>
                </span>
                {this.props.errors.payment_method && this.props.touched.payment_method ? <div className="validation">{this.props.errors.payment_method}</div> : null}
            </div>
        )
    }
}

export default PaymentDeliveryForm
