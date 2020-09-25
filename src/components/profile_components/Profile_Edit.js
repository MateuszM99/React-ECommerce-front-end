import React, { Component } from 'react'
import {Formik,Form,Field, yupToFormErrors} from 'formik'
import AxiosPostData from '../../services/data_requests/PostData'
import axios from 'axios'
import '../../styles/profile_styles/profile__edit__style.scss'
import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

if(localStorage.getItem('userData') != null){
    var user = JSON.parse(localStorage.getItem('userData'));
}

export class Profile_Edit extends Component {
    render() {
        return (
            <div className="profile__edit__container">
                <h2>Edit Profile</h2>
                <Formik
                    initialValues = {{
                        firstName : '',
                        lastName : '',
                        email : '',
                        phone : '',
                    }}
                    validationSchema = {Yup.object({
                        email : Yup.string()
                            .email('Email is invalid'),
                        phone : Yup.string()
                            .matches(phoneRegExp,'Phone number is invalid')
                    })}

                    onSubmit = {(values) => {
                        setTimeout(() => {
                            if(values != null){
                               axios.post("https://localhost:44333/api/authenticate/editUser?username=" + user.user.userName,values)
                                .then(function(response){
                                    console.log(response.data);
                                })
                                .then(function(error){
                                    
                                });  
                            if(user != null)
                            console.log(user);
                            alert(JSON.stringify(values,null,2));
                            }
                        },1000)
                    }}         
                >
                {({ errors, touched,values,isSubmitting }) => (
                    <Form>
                        <div>
                            <span>
                                <label className="profile__edit__label">First name</label>
                                <Field className="profile__edit__input" name="firstName"></Field>
                                {errors.firstName && touched.firstName ? <div className="login-validation">{errors.firstName}</div> : null}
                            </span>
                            <span>
                                <label className="profile__edit__label">Last name</label>
                                <Field className="profile__edit__input" name="lastName"></Field>
                                {errors.lastName && touched.lastName ? <div className="login-validation">{errors.lastName}</div> : null}
                            </span>
                        </div>
                        <label className="profile__edit__label">E-mail</label>
                        <Field className="profile__edit__input__width2" name="email"></Field>
                        {errors.email && touched.email ? <div className="login-validation">{errors.email}</div> : null}
                        <label className="profile__edit__label">Phone number</label>
                        <Field className="profile__edit__input__width2" name="phone"></Field>
                        {errors.phone && touched.phone ? <div className="login-validation">{errors.phone}</div> : null}
                        <button className="profile__edit__save__button" type="submit">{isSubmitting ? 'Saving ...' : 'Save changes'}</button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}

export default Profile_Edit
