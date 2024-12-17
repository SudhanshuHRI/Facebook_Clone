import {  Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/forgotPassword";

function App() {

  
  return (
    <div className="loginBody">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newUser" element={<CreateAccount />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </div>

  );
}

export default App;
