import React from 'react'
import './ConnectLinkedin.scss'
import { FaLinkedin } from "react-icons/fa";


const ConnectLinkedin = () => {
    return (
        <>
            <div class="stepper">
                <div class="step"></div>
                <div class="step highlighted"></div>
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
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
                <button className='ContinueButtonLinkedin'>Siguiente</button>
            </div>
        </>
    )
}

export default ConnectLinkedin