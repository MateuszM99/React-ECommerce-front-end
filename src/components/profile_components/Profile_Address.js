import React, { Component } from 'react'
import {Formik,Form,Field} from 'formik'
import CountrySelectList from '../CountrySelectList'
import PostData from '../../services/data_requests/PostData'
import * as Yup from 'yup'
import '../../styles/profile_styles/profile__address__style.scss'

export class Profile_Address extends Component {
    render() {
        return (
            <div className="profile__address__container">
                <h2>Profile Address</h2>
                <Formik
                    initialValues = {{
                        postCode : '',
                        country : '',
                        city : '',
                        street : '',
                        houseNumber : '',
                    }}
                    validationSchema = {{
                        
                    }}

                    onSubmit = {(values) => {
                        setTimeout(() => {
                            if(values != null){
                               PostData('authenticate/editAddress',values).then((result) => {
                                   let responseJson = result;
                                   alert(responseJson);
                               });
                            alert(JSON.stringify(values,null,2));
                            }
                        },1000)
                    }}   
                >
                {({ errors, touched,values,isSubmitting }) => (
                    <Form>
                        <div>
                            <span>
                                <label className="profile__address__label">Post Code</label>
                                <Field className="profile__address__input" name="postCode"></Field>
                                {errors.postCode && touched.postCode ? <div className="validation">{errors.postCode}</div> : null}
                            </span>
                            <span>
                                <label className="profile__address__label">Country</label>
                                <CountrySelectList class={"profile__address__input"} name="country" />
                                {errors.country && touched.country ? <div className="validation">{errors.country}</div> : null}
                            </span>
                        </div>
                        <label className="profile__address__label">City</label>
                        <Field className="profile__address__input__width2" name="city"></Field>
                        {errors.city && touched.city ? <div className="validation">{errors.city}</div> : null}
                        <label className="profile__address__label">Street</label>
                        <Field className="profile__address__input__width2" name="street"></Field>
                        {errors.street && touched.street ? <div className="validation">{errors.street}</div> : null}
                        <label className="profile__address__label">House number</label>
                        <Field className="profile__address__input__width0" name="houseNumber"></Field>
                        {errors.houseNumber && touched.houseNumber ? <div className="validation">{errors.houseNumber}</div> : null}
                        <button className="profile__address__save__button" type="submit">{isSubmitting ? 'Saving ...' : 'Save changes'}</button>
                    </Form>
                )}
                </Formik>
            </div>
        )
    }
}

export default Profile_Address
