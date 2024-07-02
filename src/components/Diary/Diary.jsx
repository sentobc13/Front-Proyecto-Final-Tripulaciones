import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PiSliders } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Diary.scss';
import { Chip } from '@mui/material';
import { Button, Card, CardBody, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { getAllWorkshops } from '../../features/workshop/WorkshopSlice';
import { ChakraProvider } from '@chakra-ui/react'; // Asegúrate de envolver tu aplicación con este proveedor

const DescriptionModal = ({ isOpen, onClose }) => {
    const [showHorarios, setShowHorarios] = useState(false);

    const handleSolicitarClick = () => {
        setShowHorarios(prev => !prev); // Cambia el estado de showHorarios al hacer clic
    };

    const handleCloseModal = () => {
        setShowHorarios(false); // Asegura que los horarios se oculten al cerrar el modal
        onClose(); // Cierra el modal
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay className="modal-overlay" />
            <ModalContent className='modal-content'>
                <ModalHeader className='div-nodal-titulo'>Detalles de la Descripción</ModalHeader>
                <ModalCloseButton className="close-button" />
                <ModalBody className='div-nodal-body'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, tortor eget varius euismod, mauris justo ultricies ligula.
                    </p>
                </ModalBody>
                <ModalFooter className='div-btn'>
                    <Button className='btn-nodal-one' bg="white" color="#4299E1" _hover={{ bg: '#eee' }} isFullWidth onClick={handleSolicitarClick}>
                        Solicitar One to One
                    </Button>
                </ModalFooter>
                {showHorarios && (
                    <ModalFooter className='div-horarios'>
                        <p>Horarios Disponibles:</p>
                        <CheckboxGroup>
                            <Checkbox defaultChecked>10:00</Checkbox>
                            <Checkbox defaultChecked>10:30</Checkbox>
                            <Checkbox defaultChecked>11:00</Checkbox>
                        </CheckboxGroup>
                    </ModalFooter>
                )}
                <ModalFooter className='div-btn'>
                    <Button className='btn-nodal-interesa' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
                        Me interesa  <CiHeart className="_CiHeart" />
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

const Diary = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedDay, setSelectedDay] = useState(null);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
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

    console.log(workshops);

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

    return (
        <ChakraProvider> {/* Envuelve tu componente con ChakraProvider */}
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
                            <Chip className="uniqueChipProfile" label="E-learning" />
                            <Chip className="uniqueChipProfile" label="E-learning" />
                            <Chip className="uniqueChipProfile" label="E-learning" />
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
                                <Text className='div-nombre'>
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
        </ChakraProvider>
    );
};

export default Diary;
