import React from 'react'
import {Formik,Form,Field, yupToFormErrors} from 'formik'
import * as Yup from 'yup'

function Create_Option() {
    return (
        <div className="cm__options__create__container">
            <Formik>
                <Form>
                    <h2>Create Option</h2>
                    <span>
                    <label className="cm__options__create__container__label">Name *</label>
                    <Field className="cm__options__create__container__input"></Field>
                    </span>
                    <button className="cm__options__create__container__create__button">Create option</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Create_Option
