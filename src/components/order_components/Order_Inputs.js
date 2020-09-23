import { Field } from 'formik'
import React, { Component } from 'react'
import CountrySelectList from '../CountrySelectList'

export class Order_Details extends Component {
    render() {
        return (
            <div className="order__inputs">
                            <span>
                                <label>Email:</label>
                                <div className="order__inputs_div"> 
                                    <Field type="text" name="email"></Field>       
                                    {this.props.errors.email && this.props.touched.email ? <div className="validation">{this.props.errors.email}</div> : null}    
                                </div>               
                            </span>
                            <span>
                                <label>Name:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="name"></Field>
                                    {this.props.errors.name && this.props.touched.name ? <div className="validation">{this.props.errors.name}</div> : null}
                                </div>
                            </span>
                            <span>
                                <label>Last name:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="lastName"></Field>
                                    {this.props.errors.lastName && this.props.touched.lastName ? <div className="validation">{this.props.errors.lastName}</div> : null}
                                </div>
                            </span>
                            <span>
                                <label>Street:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="street"></Field>
                                    {this.props.errors.street && this.props.touched.street ? <div className="validation">{this.props.errors.street}</div> : null}
                                </div>
                            </span>
                            <span>
                                <label>House number:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="houseNumber"></Field>
                                    {this.props.errors.houseNumber && this.props.touched.houseNumber ? <div className="validation">{this.props.errors.houseNumber}</div> : null}
                                </div>
                            </span>
                            <span>
                                <label>Post-Code:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="postCode"></Field>
                                    {this.props.errors.postCode && this.props.touched.postCode ? <div className="validation">{this.props.errors.postCode}</div> : null}
                                </div>
                            </span>
                            <span>
                                <label>City:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="city"></Field>
                                    {this.props.errors.city && this.props.touched.city ? <div className="validation">{this.props.errors.city}</div> : null}
                                </div>
                            </span>
                            <span>
                                <label>Country:</label>
                                <div className="order__inputs_div">
                                <CountrySelectList/>
                                </div>
                            </span>
                            <span>
                                <label>Phone number:</label>
                                <div className="order__inputs_div">
                                    <Field type="text" name="phone"></Field>
                                    {this.props.errors.phone && this.props.touched.phone ? <div className="validation">{this.props.errors.phone}</div> : null}
                                </div>
                            </span>
                        </div>
        )
    }
}

export default Order_Details
