import React from 'react';
import Axios from 'axios';
const Interceptor = () => {

    Axios.interceptors.request.use(request => {
        console.log(request);
    })


  return (
    <div>
      
    </div>
  );
}

export default Interceptor;
