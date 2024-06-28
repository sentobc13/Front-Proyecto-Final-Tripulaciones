import React, { useState } from 'react'
import { PiSliders } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import './Diary.scss'
import { Chip } from '@mui/material';
import { Card, CardBody, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Diary = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div className='div-agenda'>
            <div className='div-programa'>
                <h3>Programa</h3>
            </div>
            <div className='div-dias'>
                <p className={selectedDay === '22 Junio' ? 'active' : ''} onClick={() => handleDayClick('22 Junio')}>
                    22 de Junio
                </p>
                <p className={selectedDay === '23 Junio' ? 'active' : ''} onClick={() => handleDayClick('23 Junio')}>
                    23 de Junio
                </p>

            </div>
            <div className='div-slider-chip'>
                <div className='slider'><PiSliders />
                    <div className='chip'>
                        <Chip className="uniqueChipProfile" label="E-learning" />
                        <Chip className="uniqueChipProfile" label="E-learning" />
                        <Chip className="uniqueChipProfile" label="E-learning" />
                    </div>
                </div>
            </div>
            <div className='div-horario'>10:00 am</div>
            <div className='div-card'>
                <Card>
                    <CardBody className='card-content'>
                        <Text className='div-horario-card'>
                            10:15 am
                        </Text>
                        <Text className='div-nombre'>
                            Fernando Redondo
                        </Text>
                        <Text className='div-cargo'>
                            CEO en LVIS
                        </Text>
                        <Chip className="div-ponencia" label="Ponencia" />
                        <Text className='div-descripcion'>
                        </Text>
                        <Text className='div-titulo'>
                            10 Problemas en la creación y/o actualización del vídeo instructivo que son resueltos por la automatización
                        </Text>
                        <div className='div-icon-text'>
                            <FaChevronDown />
                            <span className='div-down-text'>Descripción</span>
                        </div>

                    </CardBody>
                </Card>


            </div>

        </div>
    )
}

export default Diary