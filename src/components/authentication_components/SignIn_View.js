import React, { Component } from 'react'
import PostData from '../../services/data_requests/PostData'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const passwordRegExp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/

export default class SignIn_View extends Component {

    render() {
        return (
            <div className="popup" style={{display : this.props.isSignInShown ? 'block' : 'none'}}>    
            <Formik
                initialValues={{
                    firstName : '',
                    lastName : '',
                    username : '',
                    email : '',
                    phone : '',
                    password : '',
                 }}
                 validationSchema = {Yup.object({
                     firstName : Yup.string()
                        .required('First name is required'),
                    lastName : Yup.string()
                        .required('Last name is required'),
                    username : Yup.string()
                         .required('Username is required'),
                    email : Yup.string()
                        .email('Invalid email')
                        .required('Email is required'),
                    phone : Yup.string()
                        .matches(phoneRegExp,'Phone number is not valid')
                        .required('Phone number is required'),
                    password : Yup.string()
                        .matches(passwordRegExp,'Password has to be at least 8 characters long,contain 1 special sign and 1 uppercase letter')
                        .required('Password is required'),
                 })}

                 onSubmit = {(values) => {
                     setTimeout(() => {
                         if(values.username && values.password){
                            PostData('authenticate/register',values).then((result) => {
                                let responseJson = result;
                                alert(responseJson);
                            });
                         alert(JSON.stringify(values,null,2));
                         }
                        this.props.onXClick();
                     },1000)
                 }} 
            >
                {({ errors, touched,values,isSubmitting }) => (
                <Form>  
                    <div className="signin__box">
                        <p>Sign in</p>
                        <div className="firstName__input">
                        <label>First name</label>
                        <Field type="text" placeholder="Enter your first name" name="firstName"></Field>      
                        {errors.firstName && touched.firstName ? <div className="login-validation">{errors.firstName}</div> : null}             
                        </div>
                        <div className="lastName__input">
                        <label>Last name</label>
                        <Field type="text" placeholder="Enter your last name" name="lastName"></Field> 
                        {errors.lastName && touched.lastName ? <div className="login-validation">{errors.lastName}</div> : null}               
                        </div>       
                        <div className="login__input">
                        <label>Username</label>
                        <Field type="text" placeholder="Enter your username" name="username"></Field>  
                        {errors.username && touched.username ? <div className="login-validation">{errors.username}</div> : null}              
                        </div>
                        <div className="email__input">
                        <label>E-mail</label>
                        <Field type="text" placeholder="Enter your email" name="email"></Field>
                        {errors.email && touched.email ? <div className="login-validation">{errors.email}</div> : null}
                        </div>
                        <div className="phone__input">
                        <label>Phone</label>
                        <Field type="text" placeholder="Enter your phone number" name="phone"></Field>
                        {errors.phone && touched.phone ? <div className="login-validation">{errors.phone}</div> : null}
                        </div>
                        <div className="password__input">
                        <label>Password</label>
                        <Field type="password" placeholder="Enter your password" name="password"></Field>
                        {errors.password && touched.password ? <div className="login-validation">{errors.password}</div> : null}
                        </div>
                        <button className="login__button" type="submit">{isSubmitting ? 'Signin in ...' : 'Sign in'}</button>
                        <img src="/images/letter-x.png" className="quit__button" onClick={this.props.onXClick}></img>
                    </div>
                </Form>
                )}
            </Formik>
            </div>
        )
    }
}
