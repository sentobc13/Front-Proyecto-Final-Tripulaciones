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
  
    if(attendee !== null ){
      useEffect(() => {
        dispatch(getLoggedAttendee())
      }, []);
    }else{
      useEffect(() => {
        dispatch(getLoggedSpeaker())
      }, []);
    }
    console.log(attendee);
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

    if (isLoading) {
        return (
            <div className="custom-loader-container">
                <div className="custom-loader"></div>
            </div>
        );
    }

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? 12 : hours;
        const strTime = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
        return strTime;
    };

    return (
        <ChakraProvider>
            <div className='div-agenda'>
                <div className='div-programa'>
                    <h3>Mi agenda</h3>
                </div>
                <div className='div-card-one2one'>
                    <Card className='card-one2one'>
                        <div className='div-content'>
                            <div className='div-horario-one2one'><p>9:30hs</p></div>
                            <div className="div-chip-one2one"><Chip label="One to One" /></div>
                            <div className='div-nombre-one2one'><Text>Fernando Redondo</Text></div>
                            <div className='div-cargo-one2one'><Text>CEO en LVIS</Text></div>
                            <img src="https://s3-alpha-sig.figma.com/img/a56f/6697/8a2b86f7a89eb3ed76a431148a72f3e6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHxXqJAkFm4ztlInhUPCZnHYV7XD2d7KYaIt9kHiPlAyxHBBu32YrGvywK~XMy-A3HQb~aMZQD6HpYVobMGvugIZFmsV0heAb0dDNV5X6VwDqFmVtk5Up1knh3-A~IcwQbLuw52LHkEjFUmlgYS2WuV5aQriJ~egFgkRIzrVMVwYh-sUxJVb~bbmhvoDOa0S931luy3KniC2151KifpxZ32wcj1UBcDkGEbQh4Ajw7T4PzSi8HOh9TgSZ7IBimxcQ2~D2wPqoJurjsdwCYNfWn7ZJmiXHK-gE979YNfDs0vQuO78mr~PybiuiRU-ZcfyD2WS~yYanf4JiCtLEaRGeg__" alt="Foto de Perfil" className="avatar-picture" />
                        </div>
                    </Card>
                </div>
                {filteredWorkshops.map(workshop => (
                    <div className='div-card' key={workshop._id}>
                        <Card>
                            <CardBody className='card-content'>
                                <Text className='div-horario-card'>
                                    {formatTime(workshop.start_date)}
                                </Text>
                                <Text className='div-nombre'>
                                    {workshop.speaker_id.name}
                                </Text>
                                <Text className='div-cargo'>
                                    {workshop.speaker_id.role}
                                </Text>
                                <Text className='div-card-descripcion'>
                                    {workshop.description}
                                </Text>
                                <Text className='div-titulo'>
                                    {workshop.name}
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
