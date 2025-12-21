import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
