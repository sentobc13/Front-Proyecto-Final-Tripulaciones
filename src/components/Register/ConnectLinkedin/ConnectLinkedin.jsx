import './ConnectLinkedin.scss'
import { FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';


const ConnectLinkedin = () => {
    const navigate = useNavigate()

    if (!localStorage.getItem('Attendee') || !localStorage.getItem('Speaker')) {
        navigate("/identify")
    }
    return (
        <>
            <div className="about-you-container">
                <div className="stepper">
                    <div className="btn-back">
                        <Link to="/registertercerpaso" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MdArrowBackIos style={{ fontSize: 18 }} />
                        </Link>
                    </div>
                    <div className="step"></div>
                    <div className="step highlighted"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                </div>
            </div>

            <div className="containerLinkedin">
                <div className='divtitleLinkedin'>
                    <p className='titleLinkedin'>Amplía tu network</p>
                </div>
            </div>
            <div className="containerLinkedin2">
                <div className='divsubtitleLinkedin'>
                    <p className='subtitleLinkedin'>Conecta tu Linkedin</p>
                </div>
            </div>
            <div className="containerLinkedin2">
                <div className='divsubtitleLinkedin2'>
                    <p className='subtitleLinkedin2'>Através de Linkedin completaremos tus datos del perfil, dando unas recomendaciones más precisas de networking.</p>
                </div>
            </div>
            <div className='LinkedincontainerButton'>
                <button className='LinkedinButton'>
                    <p className='pLinkedin'>
                        <FaLinkedin className='LinkedinIcon' />Conectar con Linkedin
                    </p>
                </button>
                <Link to="/registertercerpaso">
                    <button className='ContinueButtonLinkedin'>Siguiente</button>
                </Link>
            </div>
        </>
    )
}

export default ConnectLinkedin