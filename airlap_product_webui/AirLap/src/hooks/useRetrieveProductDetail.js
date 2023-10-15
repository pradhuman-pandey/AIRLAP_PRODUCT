import {useEffect, useState} from 'react';

import {API} from '../constants';
import axios from '../services/axios';

export default function useRetrieveProductDetail(id){
    const [product,setProduct] = useState(Object);
    const [loading,setLoading] = useState(false);

    const retrieveProduct = async () =>{
        setLoading(true);
        const response = await axios.get(`${API.V1.REGISTER}/${id}`);
      const data = await response.data;
      setRegister(data);
      setLoading(false);
    }

    useEffect(()=>{
       retrieveProduct();
    },[id])

    return [loading,product];
}