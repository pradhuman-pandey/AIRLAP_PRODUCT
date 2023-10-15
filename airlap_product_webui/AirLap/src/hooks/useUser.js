import { useEffect, useState } from "react";

import { API } from "../constants";
import axios from "../services/axios";

export default function useUser() {
  const [user, setUser] = useState(Object);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const retrieveUser = async () => {
      setLoading(true);
      const response = await axios.get(API.V1.ACCOUNT_DETAIL);
      const data = await response.data;
      setUser(data);
      setLoading(false);
    };
    retrieveUser();
  }, []);

  return [user, loading];
}
