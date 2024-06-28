
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Identify from "./components/Register/Identify";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import AboutYou from "./components/Register/AboutYou/AboutYou";
import './App.css';
import Hastags from "./components/Register/Hastags/Hastags";
import Allergies from "./components/Register/Allergies/Allergies";
import ConnectLinkedin from "./components/Register/ConnectLinkedin/ConnectLinkedin";
import LoginPrincipal from "./components/LoginPrincipal/LoginPrincipal";
import LoginAttendee from "./components/LoginAttendee/LoginAttendee";
import LoginSpeaker from "./components/LoginSpeaker/LoginSpeaker";
import PrivateZone from "./guards/PrivateZone";
import theme from './theme'
import RegisterSegundoPaso from "./components/RegisterSegundoPaso/RegisterSegundoPaso";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import Diary from "./components/Diary/Diary";
import EditProfile from './components/Profile/EditProfile/EditProfile';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <MainContent />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

function MainContent() {
  const location = useLocation();
  const noHeaderPaths = [
    "/allergies",
    "/identify",
    "/hastags",
    "/loginAttendee",
    "/connectLinkedin",
    "/aboutyou",
    "/loginSpeaker",
    "/loginPrincipal",
    "/registerSegundoPaso"
  ];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/identify" element={<Identify />} />
          <Route path="/hastags" element={<Hastags />} />
          <Route path="/allergies" element={<Allergies />} />
          <Route path="/connectLinkedin" element={<ConnectLinkedin />} />
          <Route path="/" element={<PrivateZone><Home /></PrivateZone>} />
          <Route path="/profile" element={<PrivateZone><Profile /></PrivateZone>} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/loginAttendee" element={<LoginAttendee />} />
          <Route path="/loginSpeaker" element={<LoginSpeaker />} />
          <Route path="/aboutyou" element={<AboutYou />} />
          <Route path="/loginPrincipal" element={<LoginPrincipal />} />
          <Route path="/registerSegundoPaso" element={<RegisterSegundoPaso />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
