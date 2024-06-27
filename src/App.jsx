import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Speaker from "./components/Register/Speaker/Speaker"
import AboutYou from "./components/Register/Attendee/AboutYou/AboutYou";
import './App.css'; 
import Attendee from "./components/Register/Attendee/Attendee";
import Hastags from "./components/Register/Hastags/Hastags";
import Allergies from "./components/Register/Allergies/Allergies";
import ConnectLinkedin from "./components/Register/ConnectLinkedin/ConnectLinkedin";
import LoginPrincipal from "./components/LoginPrincipal/LoginPrincipal";
import LoginAttendee from "./components/LoginAttendee/LoginAttendee";
import LoginSpeaker from "./components/LoginSpeaker/LoginSpeaker";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/hastags" element={<Hastags />} />
            <Route path="/allergies" element={<Allergies />} />
            <Route path="/connectLinkedin" element={<ConnectLinkedin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/loginAttendee" element={<LoginAttendee />} />
            <Route path="/loginSpeaker" element={<LoginSpeaker />} />
            <Route path="/attendee" element={<Attendee />} />
            <Route path="/aboutyou" element={<AboutYou />} />
            <Route path="/speaker" element={<Speaker />} />
            <Route path="/loginPrincipal" element={<LoginPrincipal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;