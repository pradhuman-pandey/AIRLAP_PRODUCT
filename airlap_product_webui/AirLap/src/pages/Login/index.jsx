import {useRef} from 'react'
import { useNavigate } from "react-router-dom";

import { API, Browser, LOCAL_STORAGE_KEY } from "../../constants";
import axios from "../../services/axios";

export default function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(!null);
  const passwordRef = useRef(!null);

  const performLogin = async (e) =>{
     e.preventDefault();
     const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
     }

     const response = await axios.post(API.V1.ACCOUNT_LOGIN,payload);
     if(response.status !== 201)return;
     const data = await response.data;
     localStorage.setItem(LOCAL_STORAGE_KEY, data.token);
     setTimeout(() => {
         navigate('/airlap');
     }, (1000));
  };

  return (
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <div className="logo" style={{display:"grid",justifyContent:"center",alignItems:"center"}}>
    <span className="text-2xl font-bold text-gray-800 md:text-3xl center">
    /\ LAPHUB
    </span>
    </div>
    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 text-sm font-bold mb-6">
    Empowering Innovation, Elevating Electronics.
    </p>

    <form
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium">Sign in to your account</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="TEXT"
            ref={emailRef}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            required
          />

        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            ref={passwordRef}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        onClick = {performLogin}
        className="block w-full rounded-lg bg-Black-600 px-5 py-3 text-sm font-medium text-Black"
        style={{border:"1px solid lightgrey"}}
      >
        Sign in
      </button>

      <p className="text-center text-sm text-gray-500">
        No account?
        <a className="underline" href="">Sign up</a>
      </p>
    </form>
  </div>
</div>
  );
}

