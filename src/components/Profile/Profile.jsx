import { Badge } from "@chakra-ui/react"
import "./Profile.scss"
import { GoChevronLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="topProfile">
        <p className="pProfile">
          <GoChevronLeft className="iconProfile" />
          <span className="profileEdit">Editar perfil</span>
        </p>
      </div>
      <div className="profile-container">
        <img src="https://s3-alpha-sig.figma.com/img/a56f/6697/8a2b86f7a89eb3ed76a431148a72f3e6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHxXqJAkFm4ztlInhUPCZnHYV7XD2d7KYaIt9kHiPlAyxHBBu32YrGvywK~XMy-A3HQb~aMZQD6HpYVobMGvugIZFmsV0heAb0dDNV5X6VwDqFmVtk5Up1knh3-A~IcwQbLuw52LHkEjFUmlgYS2WuV5aQriJ~egFgkRIzrVMVwYh-sUxJVb~bbmhvoDOa0S931luy3KniC2151KifpxZ32wcj1UBcDkGEbQh4Ajw7T4PzSi8HOh9TgSZ7IBimxcQ2~D2wPqoJurjsdwCYNfWn7ZJmiXHK-gE979YNfDs0vQuO78mr~PybiuiRU-ZcfyD2WS~yYanf4JiCtLEaRGeg__" alt="Foto de Perfil" className="profile-picture" />
      </div>
      <div>
        <span className="titleNameProfile">Fernando Redondo</span>
      </div>
      <div>
        <span className="subtitleNameProfile">CEO en LVIS</span>
      </div>
      <div className="descriptionNameProfile">
        <span>Fernando supervisa las ventas globales de productos de LVIS.</span>
      </div>
      <div className="interestsProfile">
        <p className="interestsName">Intereses</p>
        <div className='badgeGridProfile'>
          <Badge className='uniqueBadgeProfile' style={{ backgroundColor: '#BEE3F8' }}>Inteligencia Artificial</Badge>
          <Badge className='uniqueBadgeProfile' style={{ backgroundColor: '#BEE3F8' }}>E-learning</Badge>
          <Badge className='uniqueBadgeProfile' style={{ backgroundColor: '#BEE3F8' }}>E-learning</Badge>
        </div>
      </div>
      <div className="moreInformationProfile">
        <p>Linkedin : <a href="https://www.linkedin.com/in/manel-piernas-hernandez/" className="linkedinNameProfile">Fernando_Redondo</a></p>
        <p>Website</p>
        <p>Correo</p>
        <p>Preferencias alimenticias</p>
      </div>
      <div className='containerButtonProfile'>
        <button className='ShowQR'>
          Mostrar Código QR
        </button>
        <button className='ScanQR'>
          Escanear Código QR
        </button>
      </div>
    </>
  )
}

export default Profile