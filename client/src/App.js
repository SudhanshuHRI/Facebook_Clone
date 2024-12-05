import {  Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  
  return (
    <div className="loginBody">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
