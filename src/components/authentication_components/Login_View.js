import React, { Component } from 'react'
import '../../styles/login__signin__styles.scss';
import AxiosPostData from '../../services/data_requests/AxiosPostData'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';


export default class Login_View extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="popup" style={{display : this.props.isLoginShown ? 'block' : 'none'}}>
                <Formik
                    initialValues={{
                       username : '',
                       password : '',
                    }}
                    validationSchema = {Yup.object({
                        username : Yup.string()
                            .required('Username is required'),
                        password : Yup.string()
                            .required('Password is required'),
                    })}

                    onSubmit = {(values) => {
                        setTimeout(() => {
                            if(values.username && values.password){
                                axios.post("https://localhost:44333/api/authenticate/login",values)
                                .then(function(response){
                                    console.log(response.data);
                                    localStorage.setItem('userData',JSON.stringify(response.data));
                                })
                                .then(function(error){
                                    
                                });                                   
                            }       
                            this.props.onXClick();                    
                        },1000)
                    }} 
                >   
                    {({ errors, touched,values,isSubmitting}) => (
                    <Form>
                        <div className="login__box" >
                            <p>Log in</p>             
                            <div className="login__input">
                            <label>Username</label>
                            <Field type="text" placeholder="Enter your username" name="username"></Field>
                            {errors.username && touched.username ? <div className="login-validation">{errors.username}</div> : null}
                            </div>
                            <div className="password__input">
                            <label>Password</label>
                            <Field type="password" placeholder="Enter your password" name="password"></Field>
                            {errors.password && touched.password ? <div className="login-validation">{errors.password}</div> : null}
                            </div>
                            <button className="login__button" type="submit">{isSubmitting ? 'Login in ...' : 'Log in'}</button> 
                            <img src="/images/letter-x.png" className="quit__button" onClick={this.props.onXClick}></img>             
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
        )
    }
}
