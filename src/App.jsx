import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Header from "./components/Header/Header";
import Identify from "./components/Register/Identify";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import AboutYou from "./components/Register/AboutYou/AboutYou";
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
import AttendeeList from "./components/AttendeeList/AttendeeList";
import Notifications from "./components/Notifications/Notifications";
import Tickets from "./components/Tickets/Tickets";
import Map from "./components/Map/Map";
import Alojamientos from "./components/Alojamientos/Alojamientos";
import BellAdviser from "./components/BellAdviser/BellAdviser";
import MyDiary from "./components/MyDiary/MyDiary";
import Contact from "./components/Contact/Contact";

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
    "/connectlinkedin",
    "/aboutyou",
    "/loginSpeaker",
    "/loginPrincipal",
    "/registerSegundoPaso",
    "/tickets",
  ];

  const noBellAdviserPaths = [
    "/allergies",
    "/identify",
    "/hastags",
    "/loginAttendee",
    "/connectlinkedin",
    "/aboutyou",
    "/loginSpeaker",
    "/loginPrincipal",
    "/registerSegundoPaso",
    "/tickets",
  ];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      {!noBellAdviserPaths.includes(location.pathname) && <BellAdviser />}
      <main className="main-content">
        <Routes>
          <Route path="/identify" element={<Identify />} />
          <Route path="/hastags" element={<Hastags />} />
          <Route path="/allergies" element={<Allergies />} />
          <Route path="/connectlinkedin" element={<ConnectLinkedin />} />
          <Route path="/profile" element={<PrivateZone><Profile /></PrivateZone>} />
          <Route path="/editprofile" element={<PrivateZone><EditProfile /></PrivateZone>} />
          <Route path="/loginSpeaker" element={<LoginSpeaker />} />
          <Route path="/loginAttendee" element={<LoginAttendee />} />
          <Route path="/aboutyou" element={<AboutYou />} />
          <Route path="/loginPrincipal" element={<LoginPrincipal />} />
          <Route path="/registerSegundoPaso" element={<RegisterSegundoPaso />} />
          <Route path="/diary" element={<PrivateZone><Diary /></PrivateZone>} />
          <Route path="/paymentmethods" element={<PaymentMethods />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/attendeelist" element={<AttendeeList />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/map" element={<Map />} />
          <Route path="/alojamientos" element={<Alojamientos />} />
          <Route path="/mydiary" element={<MyDiary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
