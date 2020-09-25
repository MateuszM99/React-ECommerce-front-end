import axios from 'axios'

export default function AxiosGetData(url) {
    let BaseURL = 'https://localhost:44333/api/';

    axios.get(BaseURL + url)
    .then(function(response){
        return response;
    })
    .then(function(error){
        return error;
    })
    .then(function () {
      });
}