import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from '../pages/main/main';

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
    </RouterRoot>
  )
}

export default Routers;
