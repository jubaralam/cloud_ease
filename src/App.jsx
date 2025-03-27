import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import PublicRoutes from './routes/PublicRoutes'
import Login from "./pages/Login";
import AddAccount from "./pages/AddAccount";
const App = () => {
  return (
    <BrowserRouter>
      <AddAccount />
    </BrowserRouter>
  );
};

export default App;
