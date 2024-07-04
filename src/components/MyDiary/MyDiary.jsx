import React, { useState, useEffect } from 'react';
import { Chip } from '@mui/material';
import { Card, CardBody, Text, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'; // Asegúrate de envolver tu aplicación con este proveedor
import { useDispatch, useSelector } from 'react-redux';
import { getAllWorkshops } from '../../features/workshop/WorkshopSlice';
import './MyDiary.scss'
import { getLoggedAttendee } from '../../features/auth/attendee/authAttendeeSlice';
import { getLoggedSpeaker } from '../../features/auth/speaker/authSpeakerSlice';

const MyDiary = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const dispatch = useDispatch();
    const { workshops, isLoading } = useSelector(state => state.WorkshopSlice);
    const { attendee, isLoadingAttendee } = useSelector((state) => state.authAttendee);
    const { speaker, isLoadingSpeaker } = useSelector((state) => state.authSpeaker);

    if (attendee !== null) {
        useEffect(() => {
            dispatch(getLoggedAttendee())
        }, []);
    } else {
        useEffect(() => {
            dispatch(getLoggedSpeaker())
        }, []);
    }
    useEffect(() => {
        dispatch(getAllWorkshops());
    }, [dispatch]);

    useEffect(() => {
        if (selectedDay && workshops.length > 0) {
            const filtered = workshops.filter(workshop => {
                const workshopDate = new Date(workshop.start_date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
                return workshopDate === selectedDay;
            });
            setFilteredWorkshops(filtered);
        } else {
            setFilteredWorkshops(workshops);
        }
    }, [selectedDay, workshops]);

    if (isLoadingAttendee) {
        return (
            <div className="custom-loader-container">
                <div className="custom-loader">Cargando</div>
            </div>
        );
    }

    function formatTime(fechaISO) {
        
        let fecha = new Date(fechaISO);

        
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();

        
        if (horas < 10) {
            horas = '0' + horas;
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }


        return horas + ':' + minutos;
    }
    let fechaISO = '2024-06-23T17:30:00';
    let horas = formatTime(fechaISO);

    const user = attendee || speaker
    console.log(user);

    return (
        <ChakraProvider>
            <div className='div-agenda'>
                <div className='div-programa'>
                    <h3>Mi agenda</h3>
                </div>
                {user.one2OneTaken.map((one2One, index) => (
                    <div className='div-card-one2one'>
                        <Card className='card-one2one'>
                            <div className='div-content-one2one'>
                                <div className='column'>
                                    <div className='div-horario-one2one'><p>{formatTime(one2One.time)}</p></div>
                                    <div className="div-chip-one2one"><Chip label="One to One" /></div>
                                </div>
                                <div className='column'>
                                    <div className='div-nombre-one2one'><Text>{one2One.speaker.name}</Text></div>
                                    <div className='div-cargo-one2one'><Text>{one2One.speaker.job_title}</Text></div>
                                </div>
                                <div className='column'>
                                    <img
                                        src={
                                            one2One.speaker.profilePic
                                                ? `${one2One.speaker.profilePic}`
                                                : "http://localhost:3001/public/noProfilePicture.jpg"
                                        }
                                        alt={one2One.speaker.profilePic}
                                        className="avatar-picture"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
                {user.workshops_ids.map((workshop, index) => (
                    <div className='div-card' key={index}>
                        <Card>
                            <CardBody className='card-content'>
                                <Text className='div-horario-card'>
                                    {formatTime(workshop.start_date)}
                                </Text>
                                <Text className='div-nombre'>
                                    {workshop.speaker_id.name}
                                </Text>
                                <Text className='div-cargo'>
                                    {workshop.speaker_id.job_title}
                                </Text>
                                <Text className='div-titulo'>
                                    {workshop.name}
                                </Text>
                                <Text className='div-card-descripcion'>
                                    {workshop.description}
                                </Text>
                                <Accordion allowToggle>
                                    <AccordionItem>
                                        <AccordionButton>
                                            <AccordionIcon />
                                            <Box flex="1" textAlign="left">
                                                <span className='div-down-text'>Descripción</span>
                                            </Box>
                                        </AccordionButton>
                                        <AccordionPanel pb={4}>
                                            {workshop.description}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
        </ChakraProvider>
    );
}

export default MyDiary;
