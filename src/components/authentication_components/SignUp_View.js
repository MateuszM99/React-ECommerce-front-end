import React, { Component } from 'react'
import PostData from '../../services/data_requests/PostData'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {toast} from 'react-toastify'
import SignUp from './SignUp'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const passwordRegExp = /^(.{0,7}|[^0-9]*|[^A-Z]*|[a-zA-Z0-9]*)$/

export default class SignIn_View extends Component {

    render() {
        return (
            <div className="signup__view__background">
                <div className="signup__view__container">    
                    <SignUp/>
                </div>
            </div>
        )
    }
}
