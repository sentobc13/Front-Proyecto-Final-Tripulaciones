import React from 'react'
import './Hastags.scss'
import { Stack, Badge } from '@chakra-ui/react'
import { Chip } from '@mui/material'
const Hastags = () => {
    return (
        <>
            <div className="stepper">
                <div className="step"></div>
                <div className="step"></div>
                <div className="step"></div>
                <div className="step"></div>
                <div className="step highlighted"></div>
            </div>
            <div className="containerHastags">
                <div className='divtitleHastags'>
                    <p className='titleHastags'>Ayúdanos a conocer mejor tu intereses</p>
                </div>
            </div>
            <div className="containerHastags2">
                <div className='divsubtitleHastags'>
                    <p className='subtitleHastags'>Estos tópicos ayudarán a recomendarte mejor a otros ponentes y asistentes en una recomendación personalizada.</p>
                </div>
            </div>
            <div className="containerHastags2">
                <div className='divsubtitleHastags2'>
                    <p className='subtitleHastags2'>Selecciona un máximo de 4</p>
                </div>
            </div>
            <div className="interestsProfile">
                <p className="interestsName">Intereses</p>
                <div className="chipGrid">
                    <Chip className="uniqueChipProfile" label="E-learning" />
                    <Chip className="uniqueChipProfile" label="E-learning" />
                    <Chip className="uniqueChipProfile" label="E-learning" />
                    <Chip className="uniqueChipProfile" label="E-learning" />
                </div>
            </div>
            <div className='BadgecontainerButton'>
                <button>Finalizar</button>
            </div>
        </>
    )
}

export default Hastags