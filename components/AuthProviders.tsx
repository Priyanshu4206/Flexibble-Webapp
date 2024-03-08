// NEED TO BE RENDERED OVER THE CLIENT'S SIDE HENCE
"use client";

import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

type Provider = {
  id: string,
  name:string,
  type: string,
  signinUrl: string,
  callbackUrl: string,
  signinUrlParams?: Record<string, string> | null;
}
type Providers = Record<string, Provider>;

const AuthProviders = () => {
  useEffect(()=>{
  const fetchProviders = async () =>  {
    const res = await getProviders();
    setProviders(res);
    console.log(res);
  }
    fetchProviders();
  },[]) 
   
  const[providers, setProviders] = useState<Providers |null>(null);
  {
    if(providers){
        return (
        <div>
          {
            Object.values(providers).map((provider: Provider, index)=>(
              <button key={index}>{provider.id}</button>
            ))
          }
        </div>
      )
      }
    }
}

export default AuthProviders