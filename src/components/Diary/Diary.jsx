import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PiSliders } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import './Diary.scss';
import { Chip } from '@mui/material';
import { Button, Card, CardBody, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { getAllWorkshops } from '../../features/workshop/WorkshopSlice';
import { useNavigate } from 'react-router-dom';

const DescriptionModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent className='modal-content'>
                <ModalHeader className='div-nodal-titulo'>Detalles de la Descripción</ModalHeader>
                <ModalCloseButton className="close-button" />
                <ModalBody className='div-nodal-body'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, tortor eget varius euismod, mauris justo ultricies ligula.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-nodal-save' colorScheme='blue' onClick={onClose}>Save</Button>
                    <Button className='btn-nodal-cancel' onClick={onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

const Diary = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedDay, setSelectedDay] = useState(null);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { workshops, isLoading } = useSelector(state => state.WorkshopSlice);

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
        hours = hours ? hours : 12;
        const strTime = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;
        return strTime;
    };

    const GoUserProfile = () => {
        navigate("")
    }

    return (
        <div className={`div-agenda ${isOpen ? 'blurred' : ''}`}>
            <div className='div-programa'>
                <h3>Programa</h3>
            </div>
            <div className='div-dias'>
                <p className={selectedDay === '22 de junio' ? 'active' : ''} onClick={() => handleDayClick('22 de junio')}>
                    22 de junio
                </p>
                <p className={selectedDay === '23 de junio' ? 'active' : ''} onClick={() => handleDayClick('23 de junio')}>
                    23 de junio
                </p>
            </div>
            <div className='div-slider-chip'>
                <div className='slider'>
                    <PiSliders />
                    <div className='chip'>
                        <Chip className="uniqueChipProfile" label="LMS" />
                        <Chip className="uniqueChipProfile" label="Diversidad" />
                        <Chip className="uniqueChipProfile" label="Stem" />
                    </div>
                </div>
            </div>
            {filteredWorkshops.map(workshop => (
                <div className='div-card' key={workshop._id}>
                    <Card>
                        <CardBody className='card-content'>
                            <Text className='div-horario-card'>
                                {formatTime(workshop.start_date)}
                            </Text>
                            <Text className='div-nombre' onClick={GoUserProfile}>
                                {workshop.speaker_id.name}
                            </Text>
                            <Text className='div-cargo'>
                                {workshop.speaker_id.role}
                            </Text>
                            <Chip className="div-ponencia" label="Ponencia" />
                            <Text className='div-descripcion'>
                                {workshop.description}
                            </Text>
                            <Text className='div-titulo'>
                                {workshop.name}
                            </Text>
                            <div className='div-icon-text' onClick={onOpen} style={{ cursor: 'pointer' }}>
                                <FaChevronDown />
                                <span className='div-down-text'>Descripción</span>
                            </div>
                            <DescriptionModal isOpen={isOpen} onClose={onClose} />
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Diary;
