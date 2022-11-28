import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
    </RouterRoot>
  )
}

export default Routers;
