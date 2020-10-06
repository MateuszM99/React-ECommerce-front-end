import React, { Component } from 'react'
import '../../styles/order_styles/order__style.scss'
import Products_List from './Products_List'
import Order_Inputs from './Order_Inputs'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'
import { withRouter,Link,useHistory,Redirect } from "react-router-dom";
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import validationSchema from './validationSchema'
import UserInfoForm from './UserInfoForm'
import AddressForm from './AddressForm'
import PaymentDeliveryForm from './PaymentDeliveryForm'
import ReviewOrder from './ReviewOrder'

export class Order_View extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeStep : 2,
            delivery : null,
            payment : null
        }
    }

    handleDeliveryChange = (e) => {
        this.setState({delivery : e.target.value});
    } 

    handlePaymentChange = (e) => {
        this.setState({payment : e.target.value});
    } 

    renderStepContent = (step,errors,touched) => {
        switch(step){
        case 0:
            return (
                <UserInfoForm errors={errors} touched={touched}/>
            )
        case 1: 
            return (
                <AddressForm errors={errors} touched={touched}/>
            )  
        case 2:
            return(
                <PaymentDeliveryForm 
                delivery={this.state.delivery} 
                payment={this.state.payment} 
                handleDeliveryChange={this.handleDeliveryChange} 
                handlePaymentChange={this.handlePaymentChange} 
                errors={errors} touched={touched}
                />
            )
        case 3:
            return(
                <ReviewOrder/>
            )      
        }
    }

    handleSumbit = (values,actions) => {
        alert(JSON.stringify(values,null,2));
        this.setState({activeStep : this.state.activeStep + 1})
    }

    handleBack = () => {
        this.setState({activeStep : this.state.activeStep - 1})
    }



    render() {
        const {activeStep} = this.state;
        const steps = ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
        const isLastStep = activeStep === steps.length - 1;
        const currentValidationSchema = validationSchema[activeStep];
        return (
                <div className="order__container">
                    <div className="order__header__container">
                        <Link to="/"><button className="back__button">Back to shop</button></Link>
                    </div>
                    <div className="order__main__container">
                        <div className="order__main__container__forms">
                            <div>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                                ))}
                            </Stepper>
                         </div>
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
                               delivery_method : '',
                               payment_method : '',
                           }}
                           validationSchema={null}
                           
                           onSubmit={this.handleSumbit}
                       /* onSubmit = {(values) => {
                               setTimeout(() => {      
                                   if(values != null){
                                       let cartId = localStorage.getItem("cartId");
                                       axios.post("https://localhost:44333/api/order/createOrder?cartId=" + cartId + "&deliveryId=" + values.delivery_method + "&paymentId=" + values.payment_method,values)
                                           .then(function(response){
                                               localStorage.setItem('orderId',response.data.orderId);
                                               
                                               console.log(response.data);
                                           })
                                           .then(function(error){
                                               console.log(error);
                                       });  
                                   }                             
                                   alert(JSON.stringify(values,null,2));
                               },3000)
                           }
                           
                       }  */                         
                       >
                       {({ errors, touched}) => (
                           <Form>
                           <div className="form">
                               {this.renderStepContent(activeStep,errors,touched)}
                               <div className="form_buttons">
                                <button className="form__button__step" onClick={this.handleBack} type="button">Previous</button>
                                <button className="form__button__step" type="submit">Next</button>
                               </div>
                           </div>
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
