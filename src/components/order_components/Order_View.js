import React, { Component } from 'react'
import '../../styles/order_styles/order__style.scss'
import Products_List from '../order_components/Products_List'
import Delivery_Method from '../order_components/Delivery_Method'
import Payment_Method from '../order_components/Payment_Method'
import Order_Inputs from '../order_components/Order_Inputs'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'
import { withRouter,Link } from "react-router-dom";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export class Order_View extends Component {

    constructor(props) {
        super(props)

        this.state = {
            delivery : ''
        }
    }

    render() {
        return (
                <div className="container">
                    <div className="header__container">
                        <Link to="/"><button className="back__button">Back to shop</button></Link>
                    </div>
                    <div className="main__container">
                        <div className="order__details">
                            <Formik         
                                initialValues={{
                                    email : '',
                                    name : '',
                                    lastName :'',
                                    street : '',
                                    houseNumber : '',
                                    postCode : '',
                                    city : '',
                                    country : '',
                                    phone : '',
                                    delivery_method : this.state.delivery,
                                    payment_method : '',
                                }}
                                validationSchema={Yup.object({
                                    name : Yup.string()
                                        .min(2,'Must be at least 2 characters')
                                        .required('Name is required'),
                                    email : Yup.string()
                                        .email('Invalid email')
                                        .required('Email is required'),
                                    lastName : Yup.string()
                                            .required('Last name is required'),
                                    street : Yup.string()
                                        .required('Street is required'),
                                    houseNumber : Yup.string()
                                        .required('House number is required'),
                                    postCode : Yup.string()
                                        .required('Post code is required'),
                                    city : Yup.string()
                                        .required('City is required'),
                                    country : Yup.string()
                                        .required('You must choose country'),
                                    phone : Yup.string()
                                        .matches(phoneRegExp, 'Phone number is not valid')
                                        .required('Phone number is required'),
                                    delivery_method : Yup.string()
                                        .required('You must choose delivery method'),
                                    payment_method : Yup.string()
                                        .required('You must choose a payment method'),
                                })}

                                onSubmit = {(values,{setSubmiting}) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values,null,2));
                                        setSubmiting(false);
                                    },3000)
                                }}                            
                            >
                            {({ errors, touched,values }) => (
                                <Form>
                                <h3>1. Order details</h3>                              
                                <Order_Inputs errors={errors} touched={touched}/>
                                <h3>2. Delivery method</h3>
                                <div className="delivery__inputs">       
                                    <Delivery_Method value={"1"}/>
                                    <Delivery_Method value={"2"}/>                                   
                                </div>
                                {errors.delivery_method && touched.delivery_method ? <div className="validation">{errors.delivery_method}</div> : null}
                                <h3>3. Payment method</h3>
                                <div className="payment__inputs">
                                    <Payment_Method value={"1"}/>
                                    <Payment_Method value={"2"}/>
                                </div>
                                {errors.payment_method && touched.payment_method ? <div className="validation">{errors.payment_method}</div> : null}
                                <button className="order__button__form" type="submit">Order</button>
                                </Form>
                            )}
                            </Formik>
                        </div>   
                        <Products_List delivery={this.state.delivery}/>
                    </div>
                </div>
        )
    }
}

export default (withRouter(Order_View))
