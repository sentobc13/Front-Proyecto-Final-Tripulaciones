import "./Profile.scss"
import { GoChevronLeft } from "react-icons/go";
import Chip from '@mui/material/Chip';
import { useDispatch, useSelector } from "react-redux";
import { getLoggedAttendee } from "../../features/auth/attendee/authAttendeeSlice";
import { useEffect } from "react";
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { getLoggedSpeaker } from "../../features/auth/speaker/authSpeakerSlice";


const Profile = () => {
  const { attendee, isLoadingAttendee } = useSelector((state) => state.authAttendee);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if(attendee !== null ){
    useEffect(() => {
      dispatch(getLoggedAttendee())
    }, []);
  }else{
    useEffect(() => {
      dispatch(getLoggedSpeaker())
    }, []);
  }

  

  if (isLoadingAttendee) {
    return <Spinner /> ;
  }

  
  return (
    <div className="mainContent-profile">
      <div className="topProfile">
        <div className="pProfile">
          <GoChevronLeft className="iconProfile" />
          <p>Perfil</p>
          <button className="profileEdit" onClick={()=>navigate('/editProfile')}>Editar perfil</button>
        </div>
      </div>
      <div className="user-description-profile">
        <div className="profile-container">
          <img src="https://s3-alpha-sig.figma.com/img/a56f/6697/8a2b86f7a89eb3ed76a431148a72f3e6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHxXqJAkFm4ztlInhUPCZnHYV7XD2d7KYaIt9kHiPlAyxHBBu32YrGvywK~XMy-A3HQb~aMZQD6HpYVobMGvugIZFmsV0heAb0dDNV5X6VwDqFmVtk5Up1knh3-A~IcwQbLuw52LHkEjFUmlgYS2WuV5aQriJ~egFgkRIzrVMVwYh-sUxJVb~bbmhvoDOa0S931luy3KniC2151KifpxZ32wcj1UBcDkGEbQh4Ajw7T4PzSi8HOh9TgSZ7IBimxcQ2~D2wPqoJurjsdwCYNfWn7ZJmiXHK-gE979YNfDs0vQuO78mr~PybiuiRU-ZcfyD2WS~yYanf4JiCtLEaRGeg__" alt="Foto de Perfil" className="profile-picture" />
        </div>
        <div>
          <span className="titleNameProfile">{attendee.name} {attendee.surname}</span>
        </div>
        <div>
          <span className="subtitleNameProfile">CEO en LVIS</span>
        </div>
        <div className="descriptionNameProfile">
          <span>Fernando supervisa las ventas globales de productos de LVIS.</span>
        </div>
      </div>
      <div className="interestsProfile">
        <p className="interestsName">Intereses</p>
        <div className="chipGrid">
          {attendee.interests.map((interes) => (
            <>
              <Chip className="uniqueChipProfile" label={`${interes}`} />

            </>
          ))}

        </div>
      </div>
      <div className="moreInformationProfile">
        <p>Linkedin : <a href={`https://www.linkedin.com/in/{attendee.linkedin}`} className="linkedinNameProfile">{attendee.linkedin}</a></p>
        <p>Website: {attendee.linkedin}</p>
        <p>Correo: {attendee.email}</p>
        <p>Preferencias alimenticias: {attendee.dietary_restrictions}</p>
      </div>
      <div className='containerButtonProfile'>
        <button className='ShowQR'>
          Mostrar Código QR
        </button>
        <button className='ScanQR'>
          Escanear Código QR
        </button>
      </div>
    </div>
  )
}

export default Profile