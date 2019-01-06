import axios from 'axios';
import {API_URL} from './../constants/Config'
export const callAPI = (method, endpoint, data)=>{
    console.log(data)
    
    return axios({
                method: method,
                url: `${API_URL}/${endpoint}`,
                data: data
            }).catch(err=>{
                console.log(err);
            });
}