import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Attendee from "./components/Register/Attendee/Attende";
import Speaker from "./components/Register/Speaker/Speaker"
// import Footer from "./components/Footer/Footer";
import './App.css'; 
import Hastags from "./components/Register/Hastags/Hastags";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/hastags" element={<Hastags />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/attendee" element={<Attendee />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;