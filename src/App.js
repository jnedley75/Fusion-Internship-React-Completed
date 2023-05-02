import './App.css';
import NavBar from "./nav/NavBar";
import {Route, Routes} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from "./pages/Home";
import LoggedIn from "./pages/LoggedIn";
import {Registration} from "./pages/Registration";

function App() {
  return (
    <div className="App">
        <NavBar />
        <GoogleOAuthProvider clientId="364044862593-c24m1gjd7d066undeph2hdh8g874lgoi.apps.googleusercontent.com">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/LoggedIn" element={<LoggedIn/>}/>
                <Route path="/Register" element={<Registration/>}/>
            </Routes>
        </GoogleOAuthProvider>
    </div>
  );
}

export default App;
