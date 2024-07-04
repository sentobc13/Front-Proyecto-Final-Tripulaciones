import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PiSliders } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Diary.scss';
import { Chip } from '@mui/material';
import { Button, Card, CardBody, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Checkbox } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import registrationOne2OneService from "../../features/registrationOnetoOne/registrationOnetoOneService";
import registrationWorkshop from "../../features/registrationWorkshop/registrationWorkshopService";
import { getAllWorkshops } from '../../features/workshop/WorkshopSlice';

const DescriptionModal = ({ isOpen, onOpen, onClose, workshop }) => {
    const [showHorarios, setShowHorarios] = useState(false);
    const [horariosSeleccionados, setHorariosSeleccionados] = useState([]);
    const [showSolicitarButton, setShowSolicitarButton] = useState(false);
    const [showMeInteresaButton, setShowMeInteresaButton] = useState(true);

    const navigate = useNavigate(); 

    const handleSolicitarClick = () => {
        setShowHorarios(prev => !prev);
        setShowSolicitarButton(false);
        setShowMeInteresaButton(true);
    };

    const handleCloseModal = () => {
        setShowHorarios(false);
        setShowSolicitarButton(false);
        setShowMeInteresaButton(true);
        setHorariosSeleccionados([]);
        onClose();
    };

    const handleCheckboxChange = (value) => {
        if (horariosSeleccionados.includes(value)) {
            setHorariosSeleccionados(horariosSeleccionados.filter(item => item !== value));
            setShowSolicitarButton(false);
        } else {
            setHorariosSeleccionados([value]);
            setShowSolicitarButton(true);
        }
    };

    const solicitar121 = (horariosSeleccionado, speaker_id) => {
        const one2oneDisponibles = workshop.speaker_id.partner_id.membership_type.benefits[0];
        const one2oneTomados = workshop.speaker_id.partner_id.one2oneTaken;
        if (one2oneDisponibles - one2oneTomados !== 0) {
            registrationOne2OneService.registerOnetoOne(horariosSeleccionado, speaker_id);
        }
    };

    const handleSubmit = () => {
        if (horariosSeleccionados.length > 0) {
            solicitar121(horariosSeleccionados[0], workshop.speaker_id._id);
            navigate('/notification');
        }
    };

    const obtenerHorariosOrdenados = (horarios) => {
        const horariosOrdenados = [...horarios].sort((a, b) => new Date(a) - new Date(b));
        return horariosOrdenados;
    };

    const convertirHora = (horario) => {
        const fecha = new Date(horario);
        const dia = fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
        const hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return `${dia} a las ${hora}`;
    };

    const reservarWorkshop = (workshop) => {
        registrationWorkshop.registerRegistrationWorkshop(workshop._id, workshop.start_date);
    };

    const horariosOrdenados = obtenerHorariosOrdenados(workshop.speaker_id.freeSchedule);

    return (
        <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered>
            <ModalOverlay className="modal-overlay" />
            <ModalContent className='modal-content'>
                <ModalHeader className='div-nodal-titulo'>Detalles de la Descripción</ModalHeader>
                <ModalCloseButton className="close-button" />
                <ModalBody className='div-nodal-body'>
                    <p>{workshop.description}</p>
                </ModalBody>
                <ModalFooter className='div-btn'>
                    <Button className='btn-nodal-one' bg="white" color="#4299E1" _hover={{ bg: '#eee' }} isFullWidth onClick={handleSolicitarClick}>
                        Solicitar One to One
                    </Button>
                </ModalFooter>
                {showHorarios && (
                    <ModalFooter className='div-horarios'>
                        <p className='div-horarios-disponibles'>Horarios Disponibles:</p>
                        {horariosOrdenados.map(horario => (
                            <div className="horario-item" key={horario}>
                                <Checkbox isChecked={horariosSeleccionados.includes(horario)} onChange={() => handleCheckboxChange(horario)}>
                                    {convertirHora(horario)}
                                </Checkbox>
                            </div>
                        ))}
                    </ModalFooter>
                )}
                {!showSolicitarButton && showMeInteresaButton && (
                    <ModalFooter className='div-btn'>
                        <Button className='btn-nodal-interesa' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth onClick={() => reservarWorkshop(workshop)}>
                            Me interesa <CiHeart className="_CiHeart" />
                        </Button>
                    </ModalFooter>
                )}
                {showSolicitarButton && (
                    <ModalFooter className='div-btn'>
                        <Button className='btn-nodal-solicitar' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth onClick={handleSubmit}>
                            Solicitar
                        </Button>
                    </ModalFooter>
                )}
            </ModalContent>
        </Modal>
    );
};

const Diary = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [filteredWorkshops, setFilteredWorkshops] = useState([]);
    const dispatch = useDispatch();
    const { workshops, isLoading } = useSelector(state => state.WorkshopSlice);
    const { isOpen, onOpen, onClose } = useDisclosure(); // Asegúrate de tener useDisclosure configurado correctamente
    const [selectedWorkshop, setSelectedWorkshop] = useState(null);

    const handleOpen = (workshop) => {
        setSelectedWorkshop(workshop);
        onOpen();
    };
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
        <ChakraProvider>
            <div className={`div-agenda`}>
                <div className='div-programa'>
                    <h3>Programa</h3>
                </div>
                <div className='div-dias'>
                    <p className={selectedDay === '22 de junio' ? 'active' : ''} onClick={() => handleDayClick('22 de junio')}>
                        22 de Junio
                    </p>
                    <p className={selectedDay === '23 de junio' ? 'active' : ''} onClick={() => handleDayClick('23 de junio')}>
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
                                <Text className='div-titulo'>
                                    {workshop.name}
                                </Text>
                                <Text className='div-card-descripcion'>
                                    {workshop.description}
                                </Text>

                                <div className='div-icon-text' onClick={() => handleOpen(workshop)} style={{ cursor: 'pointer' }}>
                                    <FaChevronDown />
                                    <span className='div-down-text'>Descripción</span>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                ))}

                {selectedWorkshop && (
                    <DescriptionModal
                        isOpen={isOpen}
                        onClose={onClose}
                        workshop={selectedWorkshop}
                    />
                )}
            </div>
        </ChakraProvider>
    );
};

export default Diary;
