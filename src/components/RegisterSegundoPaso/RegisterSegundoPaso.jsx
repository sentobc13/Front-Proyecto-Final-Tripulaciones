import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import './RegisterSegundoPaso.scss'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Alert,
    AlertIcon,
    Flex,
    Text,
} from '@chakra-ui/react';

const RegisterSegundoPaso = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const [formError, setFormError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth);

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
            setFormError('Las contraseñas no coinciden.');
            return;
        }


        setFormError(null);
        setSuccessMessage(null);
        dispatch(register(formData)).then(() => {
            if (!error) {
                setSuccessMessage('¡Registro exitoso!');
            }
        });
    };

    return (
        <div className="loginContainer">
            <div className='bienvenidos'>
                <h3>Bienvenid@ a</h3>
                <div className='logoImagen'>
                    <img className="logo" src={logo} alt="Logo" />
                </div>
            </div>
            <div className='form-register'>
                <Flex minHeight="50vh" alignItems="center" justifyContent="center" p={5}>
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
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Inserte su correo"
                                    />
                                    {emailError && <Text color="red.500" fontSize="sm">{emailError}</Text>}
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Contraseña</FormLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={formData.contraseña}
                                        onChange={handleChange}
                                        placeholder="Inserte su contraseña"
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Confirmar contraseña</FormLabel>
                                    <Input
                                        type="password"
                                        name="password2"
                                        value={formData.confirmar}
                                        onChange={handleChange}
                                        placeholder="Confirme su contraseña"
                                    />
                                </FormControl>
                                <Button className='btn-register' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
                                    Crear cuenta
                                </Button>
                            </Stack>
                        </form>
                    </div>
                </Flex>
            </div>
        </div>
    );
};
export default RegisterSegundoPaso;
