import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function AcountEmailConfirm() {
    const [message,setMessage] = useState("Waiting");
    const {link} = useParams();

    useEffect(() => {
        axios.post(`https://localhost:44333/api/authenticate/confirmEmail${link}`)
        .then( res => {
            setMessage(res.data.message);
        })
        .catch(err => {
            setMessage("Something went wrong");
        })
    },[])

    return (
        <div style={{display : 'flex',width : '100%',height : '100vh',justifyContent : 'center',alignItems : 'center'}}>
            <h2>{message}</h2>
        </div>
    )
}

export default AcountEmailConfirm
