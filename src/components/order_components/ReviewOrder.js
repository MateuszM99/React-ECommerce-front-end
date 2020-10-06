import React, { Component } from 'react'
import { useFormikContext } from 'formik';

export default function ReviewOrder(){
    
    
        const { values: formValues } = useFormikContext();
        return (
            <div>
                <p>{formValues.email}</p>
            </div>
        )
    
}

