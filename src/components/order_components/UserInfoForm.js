import { Field } from 'formik'
import React, { Component } from 'react'

export class UserInfoForm extends Component {
    render() {
        return (
            <div>
                <h3 className="order__form_header">User details</h3>
                <div className="order__form__inputs"> 
                    <div className="order__form__inputs__row">
                        <span>     
                            <label>Name:</label>
                            <div>
                                <Field type="text" name="name" className="order__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                {this.props.errors.name && this.props.touched.name ? <div className="validation">{this.props.errors.name}</div> : null}
                            </div>
                        </span>
                        <span>
                            <label>Last name:</label>
                            <div>
                                <Field type="text" name="lastName" className="order__form__inputs__row_input_width" style={{width: "250px"}}></Field>
                                {this.props.errors.lastName && this.props.touched.lastName ? <div className="validation">{this.props.errors.lastName}</div> : null}
                            </div>  
                        </span>  
                    </div>
                    <div className="order__form__inputs__row">   
                        <span>  
                            <label>Email:</label>
                            <div> 
                                <Field type="text" name="email" className="order__form__inputs__row_input_width" style={{width: "590px"}}></Field>       
                                {this.props.errors.email && this.props.touched.email ? <div className="validation">{this.props.errors.email}</div> : null}    
                            </div>
                        </span>
                    </div>
                </div>
            </div>  
        )
    }
}

export default UserInfoForm
