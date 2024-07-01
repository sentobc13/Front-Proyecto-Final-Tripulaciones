import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterTercerPaso.scss';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon } from '@chakra-ui/react';
import { getAllTickets } from '../../features/tickets/ticketsSlice';
import { Spinner } from '@chakra-ui/react';

const RegisterTercerPaso = () => {
    const [selectedPrice, setSelectedPrice] = useState('');
    const dispatch = useDispatch();
    const { isLoading, isError, errorMessage } = useSelector((state) => state.tickets);

    useEffect(() => {
        const savedPrice = localStorage.getItem('selectedPrice');
        if (savedPrice) {
            setSelectedPrice(savedPrice);
        }
    }, []);

    useEffect(() => {
        if (selectedPrice) {
            localStorage.setItem('selectedPrice', selectedPrice);
        }
    }, [selectedPrice]);

    const handlePriceClick = (price) => {
        setSelectedPrice(price);
        dispatch(getAllTickets({ price }));
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
                    <div className="step"></div>
                    <div className="step highlighted"></div>
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
                                    <div className="div-prices-card">
                                        <span>Día 1: 23 de junio{' '}</span>
                                        <button
                                            className={`price-button ${selectedPrice === '180-1' ? 'selected' : ''}`}
                                            onClick={() => handlePriceClick('180-1')}
                                        >
                                            180€
                                        </button>
                                    </div>
                                    <div className="div-prices-card">
                                        <span>Día 2: 24 de junio{' '}</span>
                                        <button
                                            className={`price-button ${selectedPrice === '180-2' ? 'selected' : ''}`}
                                            onClick={() => handlePriceClick('180-2')}
                                        >
                                            180€
                                        </button>
                                    </div>
                                    <div className="div-prices-card">
                                        <span>2 días: 23 y 24 de junio{' '}</span>
                                        <button
                                            className={`price-button ${selectedPrice === '380-1' ? 'selected' : ''}`}
                                            onClick={() => handlePriceClick('380-1')}
                                        >
                                            380€
                                        </button>
                                    </div>
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
                                    <div className="div-prices-card">
                                        <span>Día 1: 23 de junio{' '}</span>
                                        <button
                                            className={`price-button ${selectedPrice === '180-3' ? 'selected' : ''}`}
                                            onClick={() => handlePriceClick('180-3')}
                                        >
                                            180€
                                        </button>
                                    </div>
                                    <div className="div-prices-card">
                                        <span>Día 2: 24 de junio{' '}</span>
                                        <button
                                            className={`price-button ${selectedPrice === '180-4' ? 'selected' : ''}`}
                                            onClick={() => handlePriceClick('180-4')}
                                        >
                                            180€
                                        </button>
                                    </div>
                                    <div className="div-prices-card">
                                        <span>2 días: 23 y 24 de junio{' '}</span>
                                        <button
                                            className={`price-button ${selectedPrice === '380-2' ? 'selected' : ''}`}
                                            onClick={() => handlePriceClick('380-2')}
                                        >
                                            380€
                                        </button>
                                    </div>
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
                <Link to="/connectLinkedin">
                    <button className="continue-button">Siguiente</button>
                </Link>
            </div>
        </>
    );
};

export default RegisterTercerPaso;
