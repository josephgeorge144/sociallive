import axios from "axios";



export const axiosInstance = axios.create(
    {
        baseURL:'https://jophinserverfb.herokuapp.com/',
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
          }
      })