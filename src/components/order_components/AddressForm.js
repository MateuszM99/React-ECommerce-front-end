import { Field } from 'formik'
import React, { Component } from 'react'
import CountrySelectList from '../CountrySelectList'

export class AddressForm extends Component {
    render() {
        return (
            <div>    
                <h3 className="order__form_header">Address details</h3>
                <div className="order__form__inputs">
                    <div className="order__form__inputs__row">
                        <span>
                            <label>Country:</label>
                            <div>
                                <CountrySelectList name="country" class={"order__form__inputs__row_input_width"} style={{width: "400px"}}/>
                                {this.props.errors.country && this.props.touched.country ? <div className="validation">{this.props.errors.country}</div> : null}
                            </div>
                        </span>
                        <span>
                            <label>Post-Code:</label>
                            <div>
                                <Field type="text" name="postCode" className="order__form__inputs__row_input_width" style={{width: "125px"}}></Field>
                                {this.props.errors.postCode && this.props.touched.postCode ? <div className="validation">{this.props.errors.postCode}</div> : null}
                            </div>
                        </span>
                    </div>
                    <div className="order__form__inputs__row">
                        <span>
                            <label>City:</label>
                            <div>
                                <Field type="text" name="city" className="order__form__inputs__row_input_width2"></Field>
                                {this.props.errors.city && this.props.touched.city ? <div className="validation">{this.props.errors.city}</div> : null}
                            </div>
                        </span>
                    </div>
                    <div className="order__form__inputs__row">
                        <span>
                            <label>Street:</label>
                            <div>
                                <Field type="text" name="street" className="order__form__inputs__row_input_width" style={{width: "400px"}}></Field>
                                {this.props.errors.street && this.props.touched.street ? <div className="validation">{this.props.errors.street}</div> : null}
                            </div>
                        </span>
                        <span>
                            <label>House number:</label>
                            <div>
                                <Field type="text" name="houseNumber" className="order__form__inputs__row_input_width" style={{width: "125px"}}></Field>
                                {this.props.errors.houseNumber && this.props.touched.houseNumber ? <div className="validation">{this.props.errors.houseNumber}</div> : null}
                            </div>
                        </span>
                    </div>
                    <div className="order__form__inputs__row">
                        <span>
                            <label>Phone number:</label>
                            <div>
                                <Field type="text" name="phone" className="order__form__inputs__row_input_width2"></Field>
                                {this.props.errors.phone && this.props.touched.phone ? <div className="validation">{this.props.errors.phone}</div> : null}
                            </div>
                        </span>  
                    </div>
                </div>
            </div>    
        )
    }
}

export default AddressForm

