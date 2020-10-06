import React, { Component } from 'react'
import {Formik,Form, yupToFormErrors,Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './Login';
import {Link,withRouter} from "../../../node_modules/react-router-dom"

export default class Login_View extends Component {

    constructor(){
        super();
    }

    render() {
        return (
            <div className="login__view__background">
                <div className="login__view__container">
                    <Login redirectPath={"/"}/>
                </div>
            </div>
        )
    }
}
