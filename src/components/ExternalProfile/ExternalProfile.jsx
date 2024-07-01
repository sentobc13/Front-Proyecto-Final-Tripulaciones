import { GoChevronLeft } from 'react-icons/go';
import { CiHeart } from "react-icons/ci";
import { Card, CardBody, Text } from '@chakra-ui/react';
import { Chip } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getAllWorkshops } from '../../features/workshop/WorkshopSlice';

import './ExternalProfile.scss'

const ExternalProfile = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const { workshops, isLoading } = useSelector(state => state.WorkshopSlice);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(getAllWorkshops());
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="custom-loader-container">
                <div className="custom-loader"></div>
            </div>
        );
    }

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const strTime = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
        return strTime;
    };

    return (
        <div className="mainContent-profile">
            <div className="topProfile">
                <div className="pProfile">
                    <GoChevronLeft className="iconProfile" />
                    <p className='asistantProfileName'>Perfil Asistente</p>
                </div>
            </div>
            <div className="user-description-profile">
                <div className='divProfileAsistant'>
                    <img src="https://s3-alpha-sig.figma.com/img/a56f/6697/8a2b86f7a89eb3ed76a431148a72f3e6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHxXqJAkFm4ztlInhUPCZnHYV7XD2d7KYaIt9kHiPlAyxHBBu32YrGvywK~XMy-A3HQb~aMZQD6HpYVobMGvugIZFmsV0heAb0dDNV5X6VwDqFmVtk5Up1knh3-A~IcwQbLuw52LHkEjFUmlgYS2WuV5aQriJ~egFgkRIzrVMVwYh-sUxJVb~bbmhvoDOa0S931luy3KniC2151KifpxZ32wcj1UBcDkGEbQh4Ajw7T4PzSi8HOh9TgSZ7IBimxcQ2~D2wPqoJurjsdwCYNfWn7ZJmiXHK-gE979YNfDs0vQuO78mr~PybiuiRU-ZcfyD2WS~yYanf4JiCtLEaRGeg__" alt="Foto de Perfil" className="profile-picture-asistant" />
                    <span className='InformationProfileAsistant' >Nombre - CEO en LVIS</span>
                </div>
                <div className="interestsProfile">
                    <div className="chipGrid">
                        <Chip className="uniqueChipProfile" label="a" />
                    </div>
                </div>
                <div className="descriptionNameProfileAsistant">
                    <span>Fernando supervisa las ventas globales de productos de LVIS.</span>
                </div>
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
                            <Text className='div-descripcion'>
                                {workshop.description}
                            </Text>
                            <div className='containerHeartProfile'>
                                <button className='IlikeitButton'>
                                    Me interesa <CiHeart />
                                </button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            ))}
            <div className='containerButton1to1'>
                <button className='ScanQR'>
                    Solicitar One to One
                </button>
            </div>
        </div>
    )
}

export default ExternalProfile