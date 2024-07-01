import React, { useState } from 'react';
import { PiSliders } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Diary.scss';
import { Chip } from '@mui/material';
import { Button, Card, CardBody, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

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

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    return (
        <div className={`div-agenda ${isOpen ? 'blurred' : ''}`}>
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
                <div className='slider'>
                    <PiSliders />
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
                            10:15 am &#9210;
                            <Chip className="div-ponencia" label="Ponencia" />
                        </Text>
                        <Text className='div-nombre'>
                            Fernando Redondo
                        </Text>
                        <Text className='div-cargo'>
                            CEO en LVIS
                        </Text>
                        <Text className='div-descripcion'>
                        </Text>
                        <Text className='div-titulo'>
                            10 Problemas en la creación y/o actualización del vídeo instructivo que son resueltos por la automatización
                        </Text>
                        <div className='div-icon-text' onClick={onOpen} style={{ cursor: 'pointer' }}>
                            <FaChevronDown />
                            <span className='div-down-text'>Descripción</span>
                        </div>
                        <DescriptionModal isOpen={isOpen} onClose={onClose} />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default Diary;
