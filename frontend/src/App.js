import logo from './logo.svg';
import './App.css';
import { Routes, Route,Navigate } from "react-router-dom"
import Home from './pages/Home';
import LoginComponent from "./pages/Login";
import SignupComponent from "./pages/Signup";


function App() {
  return (
    <div className="App" >

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignupComponent />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
