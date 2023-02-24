import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../pages/login/login";
import Main from '../pages/main/main';
import Protected from "./auth-guard";
import MonthProgress from "../pages/month-progress/month-progress";
import ForgotPassword from "../pages/login/forgot-passoword";
import SignUp from "../pages/login/signup";

function Routers() {

  const RouterRoot = ({ children }) => (
    <Router>
      <Routes>
        {children}
      </Routes>
    </Router>
  )

  return (
    <RouterRoot>      
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/forgotPassword" element={<ForgotPassword />}></Route>
      <Route exact path="/signUp" element={<SignUp />}></Route>

      <Route exact path="/" 
        element={
          <Protected>
            <Main />
          </Protected>
      }>
      </Route>
      
      <Route exact path="/monthlyStatus" 
        element={
          <Protected>
            <MonthProgress />
          </Protected>
      }>
      </Route>
      
      <Route exact path="/wentGym"  
        element={
          <Protected>
            <Main />
          </Protected>
      }>
    </Route>
    </RouterRoot>
  )
}

export default Routers;
