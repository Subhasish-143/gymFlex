import axios from 'axios';

const BASE_URL = 'https://exercisedb.p.rapidapi.com';

const options = {
  headers: {
    'X-RapidAPI-Key': '6fe51800bdmsheab1fabfee369aap189d4fjsncef5d6b3269d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const completeURL = `${BASE_URL}/${url}`;
  console.log('Complete URL:', completeURL);
  const { data } = await axios.get(completeURL, options);
  return data;
}

/* 
axios.get(completeURL, options) (response):- 
{data: Array(1324), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
config: {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
data: (1324) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
headers: AxiosHeaders {access-control-allow-credentials: 'true', access-control-allow-origin: '*', cache-control: 'no-store', cf-cache-status: 'MISS', cf-ray: '7f5d9ddc0a603f95-SIN', …}
request: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
status: 200
statusText: ""
[[Prototype]]: Object
*/

/* 
data:- 
bodyPart: "waist"
equipment: "body weight"
gifUrl: "https://api.exercisedb.io/image/4JuFiy8N2ogKrf"
id: "0001"
name: "3/4 sit-up"
target: "abs"
*/