import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../pages/login/login";
import Main from '../pages/main/main';
import MonthProgress from "../pages/month-progress/month-progress";

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
      <Route exact path="/" element={<Main />}></Route>
      <Route exact path="/monthlyStatus" element={<MonthProgress />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
    </RouterRoot>
  )
}

export default Routers;
