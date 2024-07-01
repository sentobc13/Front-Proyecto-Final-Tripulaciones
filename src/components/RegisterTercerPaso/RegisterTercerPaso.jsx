import './RegisterTercerPaso.scss';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Button, AccordionIcon } from '@chakra-ui/react';

const RegisterTercerPaso = () => {
    return (
        <>
            <div className="register-tercer-paso-container">
                <div className="stepper">
                    <div className="btn-back">
                        <Link to="/registerSegundoPaso" style={{ textDecoration: 'none', color: 'inherit', }}>
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
                <div className='div-title'>
                    <p className='title'>Selecciona el tipo de entrada</p>
                </div>
            </div>
            <div className="container-content3">
                <div className='div-subtitle'>
                    <p className='subtitle'>Las entradas incluyen:</p>
                    <ul>
                        <li>Welcome Pack del Asistente</li>
                        <li>Asistencia a ponencias y clases magistrales.</li>
                        <li>Coffee Break, Comida y Cena Cóctel y copas (Cada día)</li>
                    </ul>
                </div>
                <Accordion allowToggle className='div-entry-type'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Administración pública, educación y entidades sin ánimo de lucro
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <div className='div-prices'>
                                <p>Día 1: 23 de junio <Button colorScheme="blue" variant="solid">180€</Button></p>
                                <p>Día 2: 24 de junio <Button colorScheme="blue" variant="solid">180€</Button></p>
                                <p>2 días: 23 y 24 de junio <Button colorScheme="blue" variant="solid">380€</Button></p>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as='span' flex='1' textAlign='left'>
                                    Empresa privada
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <div className='div-prices'>
                                <p>Día 1: 23 de junio <Button colorScheme="blue" variant="solid">180€</Button></p>
                                <p>Día 2: 24 de junio <Button colorScheme="blue" variant="solid">180€</Button></p>
                                <p>2 días: 23 y 24 de junio <Button colorScheme="blue" variant="solid">380€</Button></p>
                            </div>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='container-button'>
                <Link to="/connectLinkedin">
                    <button className='continue-button'>Siguiente</button>
                </Link>
            </div>
        </>
    );
}

export default RegisterTercerPaso;
