import { useEffect, useState } from "react";

import { API } from "../constants";
import axios from "../services/axios";

export default function useListProduct() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProductList() {
    setLoading(true);
    const response = await axios.get(API.V1.PRODUCT);
    const data = await response.data;
    setProductList(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  return [loading, productList];
}
