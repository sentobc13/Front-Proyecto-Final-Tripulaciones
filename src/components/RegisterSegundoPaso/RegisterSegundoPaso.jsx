import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import './RegisterSegundoPaso.scss';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Alert,
    AlertIcon,
    Flex,
    Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

const RegisterSegundoPaso = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const [formError, setFormError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const navigate = useNavigate()
    const { status, error } = useSelector((state) => state.authAttendee);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(e.target.value)) {
                setEmailError('Por favor, ingrese una dirección de correo válida.');
            } else {
                setEmailError(null);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFields = Object.keys(formData).filter(
            (key) => formData[key] === ''
        );

        if (emptyFields.length > 0) {
            setFormError(`Por favor, complete todos los campos requeridos: ${emptyFields.join(', ')}`);
            return;
        }

        if (emailError) {
            setFormError('Por favor, corrija los errores antes de enviar.');
            return;
        }

        if (formData.password !== formData.password2) {
            setPasswordError('Las contraseñas no coinciden.');
            return;
        }

        localStorage.setItem('register', JSON.stringify(formData));

        setFormError(null);
        setPasswordError(null);
        setSuccessMessage(null);
        const goTo = localStorage.getItem('validator')
        if(goTo === 'Attendee'){
            navigate('/registertercerpaso')
        }else{
            navigate('/connectLinkedin')
        }
    };

    return (
        <>
            <div className="Register-container">
                <div className="stepper">
                    <div className="btn-back">
                        <Link to="/loginPrincipal" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MdArrowBackIos style={{
                                fontSize: 14

                            }} />
                        </Link>
                    </div>
                    <div className="step highlighted"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                    <div className="step"></div>
                </div>
            </div>
            <div className="registerContainer">
                <div className='bienvenidos'>
                    <h3 className="bienvenidos-text">Bienvenid@ a</h3>
                    <div className='logoImagen'>
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                </div>
                <div className='form-register'>
                    <Flex minHeight="54vh" alignItems="center" justifyContent="center" p={5}>
                        <div style={{ width: '100%', maxWidth: '500px' }}>
                            {formError && (
                                <Alert status="error" mb={4}>
                                    <AlertIcon />
                                    {formError}
                                </Alert>
                            )}
                            {status === 'failed' && (
                                <Alert status="error" mb={4}>
                                    <AlertIcon />
                                    {error}
                                </Alert>
                            )}
                            {successMessage && (
                                <Alert status="success" mb={4}>
                                    <AlertIcon />
                                    {successMessage}
                                </Alert>
                            )}
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={4}>
                                    <FormControl isRequired isInvalid={emailError}>
                                        <FormLabel className="formulario-text">Email</FormLabel>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Inserte su correo"
                                        />
                                        {emailError && <Text color="red.500" fontSize="sm">{emailError}</Text>}
                                    </FormControl>
                                    <FormControl isRequired isInvalid={passwordError}>
                                        <FormLabel className="formulario-text">Contraseña</FormLabel>
                                        <Input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Inserte su contraseña"
                                        />
                                    </FormControl>
                                    <FormControl isRequired isInvalid={passwordError}>
                                        <FormLabel className="formulario-text">Confirmar contraseña</FormLabel>
                                        <Input
                                            type="password"
                                            name="password2"
                                            value={formData.password2}
                                            onChange={handleChange}
                                            placeholder="Confirme su contraseña"
                                        />
                                        {passwordError && <Text color="red.500" fontSize="sm">{passwordError}</Text>}
                                    </FormControl>
                                    <Text fontSize="sm" textAlign="" color="gray.600" mt={4}>
                                        Al registrarte, aceptas los <a href="/terminos" style={{ color: '#4299E1' }}>Términos de servicio</a> y la <a href="/privacidad" style={{ color: '#4299E1' }}>Política de privacidad</a>, incluida la política de <a href="/cookies" style={{ color: '#4299E1' }}>Uso de Cookies.</a>
                                    </Text>
                                    <div className="container-button">
                                        <Button className='continue-button btn-register' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
                                            Crear cuenta
                                        </Button>
                                    </div>
                                </Stack>
                            </form>
                        </div>
                    </Flex>
                </div>
            </div>
        </>
    );
};

export default RegisterSegundoPaso;
