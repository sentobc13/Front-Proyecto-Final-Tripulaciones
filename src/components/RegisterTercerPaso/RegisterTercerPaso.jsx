import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterTercerPaso.scss';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from '@chakra-ui/react';
import { getAllTickets } from '../../features/tickets/ticketsSlice';
import { Spinner } from '@chakra-ui/react';

const RegisterTercerPaso = () => {
    const [selectedPrice, setSelectedPrice] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    if (!localStorage.getItem('Attendee') || !localStorage.getItem('Speaker')) {
        navigate("/identify")
    }
    
    const { tickets, isLoading, isError, errorMessage } = useSelector((state) => state.tickets);

    useEffect(() => {
        dispatch(getAllTickets());
    }, [dispatch]);

    useEffect(() => {
        if (selectedPrice) {
            localStorage.setItem('selectedPrice', selectedPrice);
        }
    }, [selectedPrice]);

    const handlePriceClick = (id) => {
        const register = JSON.parse(localStorage.getItem('register'))
        if (register && typeof register === 'object') {
            register.ticket_id = id;
            localStorage.setItem('register', JSON.stringify(register));
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    };

    return (
        <>
            <div className="register-tercer-paso-container">
                <div className="stepper">
                    <div className="btn-back">
                        <Link to="/registerSegundoPaso" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MdArrowBackIos style={{ fontSize: 18 }} />
                        </Link>
                    </div>
                    <div className="step"></div>
                    <div className="step highlighted"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                </div>
            </div>

            <div className="containerRegister3">
                <div className="div-title">
                    <p className="title">Selecciona el tipo de entrada</p>
                </div>

                <div className="container-content3">
                    <div className="div-subtitle">
                        <p className="subtitle">Las entradas incluyen:</p>
                        <ul>
                            <li>Welcome Pack del Asistente</li>
                            <li>Asistencia a ponencias y clases magistrales.</li>
                            <li>Coffee Break, Comida y Cena Cóctel y copas (Cada día)</li>
                        </ul>
                    </div>
                    <Accordion allowToggle className="div-entry-type">
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Administración pública, educación y entidades sin ánimo de lucro
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="div-prices">
                                    {tickets && tickets.length > 0 && (
                                        tickets.map((ticket, index) => (
                                            <div key={index} className="div-prices-card">
                                                <span>{
                                                    Array.isArray(ticket.date) ? (
                                                        ticket.date.map((tick, i) => (
                                                            <span key={i}>{formatDate(tick)} </span>
                                                        ))
                                                    ) : (
                                                        <span>{formatDate(ticket.date)}</span>
                                                    )
                                                }</span>
                                                <button
                                                    className={`price-button ${selectedPrice === `180-${index}` ? 'selected' : ''}`}
                                                    onClick={() => handlePriceClick(ticket._id)}>
                                                    {ticket.price}€
                                                </button>
                                            </div>
                                        ))
                                    )}

                                </div>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as="span" flex="1" textAlign="left">
                                        Empresa privada
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <div className="div-prices">
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    {isLoading && <Spinner size="xl" color="blue.500" thickness="4px" />}
                    {isError && (
                        <p>Hubo un error al guardar la opción seleccionada: {errorMessage}</p>
                    )}
                </div>
            </div>

            <div className="container-button">
                <Link className="continue-button" to="/connectLinkedin">
                    <span>Siguiente</span>
                </Link>
            </div>
        </>
    );
};

export default RegisterTercerPaso;
