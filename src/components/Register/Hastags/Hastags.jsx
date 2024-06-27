import React from 'react'
import './Hastags.scss'
import { Stack, Badge } from '@chakra-ui/react'
const Hastags = () => {
    return (
        <>
            <div class="stepper">
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
                <div class="step highlighted"></div>
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
            <div className="Badgecontainer">
                <div className='divBadgesHastags'>
                    <div className='badgeGrid'>
                        <Badge className='uniqueBadge'>E-learning</Badge>
                        <Badge className='uniqueBadge'>E-learning</Badge>
                        <Badge className='uniqueBadge'>E-learning</Badge>
                        <Badge className='uniqueBadge'>E-learning</Badge>
                        <Badge className='uniqueBadge'>E-learning</Badge>
                        <Badge className='uniqueBadge'>E-learning</Badge>
                        <Badge className='uniqueBadge'>E-lea</Badge>
                    </div>
                </div>
            </div>
            <div className='BadgecontainerButton'>
                <button>Finalizar</button>
            </div>
        </>
    )
}

export default Hastags