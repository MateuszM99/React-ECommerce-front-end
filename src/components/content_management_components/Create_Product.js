import React from 'react'
import {Formik,Form,Field, yupToFormErrors} from 'formik'
import * as Yup from 'yup'
import '../../styles/cm_styles/cm__products__style.scss'
import axios from 'axios'


function Create_Product() {

    return (
        <div className="cm__products__create__container">
            <Formik
                initialValues = {{
                    name : '',
                    price : '',
                    sku : '',
                    category : '',
                    image : null,
                    description: '',
                }}
                validationSchema = {Yup.object({
                    name : Yup.string()
                        .required('Name is required'),
                    price : Yup.string()
                        .required('Price is required'),
                    sku : Yup.string()                          
                        .required('SKU is required'),
                    category : Yup.string()
                        .required('Category is required'),    
                })}

                onSubmit = {(values,{setSubmitting, setStatus,resetForm}) => {
                    setTimeout(() => {
                        if(values != null){
                            console.log(values)
                           axios.post(values)
                            .then(response =>{
                                setSubmitting(false);
                                resetForm();                                  
                            })
                            .catch(error => {
                                setSubmitting(false);
                                setStatus({
                                    errorMessage : error.response.data.message
                                });
                                console.log(error.response);
                            });  
                        }
                    },1000)
                }}           
            >
            {({ errors, touched,isSubmitting,status }) => (
                <Form>
                    <h2>Create Product</h2>
                    <span>
                    <label className="cm__products__create__container__label">Name *</label>
                    <Field className="cm__products__create__container__input" name="name"></Field>
                    </span>
                    {errors.name && touched.name ? <div className="cm__products__create__container__validation">{errors.name}</div> : null}
                    <span>
                    <label className="cm__products__create__container__label">Price *</label>
                    <Field className="cm__products__create__container__input" name="price"></Field>
                    </span>
                    {errors.price && touched.price ? <div className="cm__products__create__container__validation">{errors.price}</div> : null}
                    <span>
                    <label className="cm__products__create__container__label">SKU *</label>
                    <Field className="cm__products__create__container__input" name="sku"></Field>
                    </span>
                    {errors.sku && touched.sku ? <div className="cm__products__create__container__validation">{errors.sku}</div> : null}
                    <span>
                    <label className="cm__products__create__container__label">Category *</label>
                    <Field className="cm__products__create__container__input" as="select" name="category"></Field>
                    </span>
                    {errors.category && touched.category ? <div className="cm__products__create__container__validation">{errors.category}</div> : null}
                    <span>
                    <label className="cm__products__create__container__label">Image</label>            
                    <Field className="cm__products__create__container__file" type="file" name="image"></Field>
                    </span>
                    {errors.image && touched.image ? <div className="cm__products__create__container__validation">{errors.image}</div> : null}
                    <span>
                    <label className="cm__products__create__container__label">Description</label>            
                    <Field className="cm__products__create__container__textarea" as="textarea" name="description"></Field>
                    </span>
                    <button className="cm__products__create__container__create__button">Create product</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default Create_Product
