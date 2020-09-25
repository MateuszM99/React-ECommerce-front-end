import axios from 'axios'

export default function AxiosPostData(url,data,token) {
    let BaseURL = 'https://localhost:44333/api/';


    axios(BaseURL + url, {
        method: 'POST',
        data : JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authoriaztion' : `Bearer ${token}`
        },
      })
    .then(function(response){
        console.log(response);
        return response;
    })
    .then(function(error){
        
    });
}