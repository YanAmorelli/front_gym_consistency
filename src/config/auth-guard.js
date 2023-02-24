import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getCookie } from '../util/cookie';

function Protected({ children }) {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  
  const checkUserToken = () => {
    const userToken = getCookie("tff_token");
    if (!userToken || userToken === "") {
      setIsLoggedIn(false);
      return navigate("/login");
    }
    setIsLoggedIn(true);
  }
  
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);


  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default Protected