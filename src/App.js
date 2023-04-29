import './App.css';
import NavBar from "./nav/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
