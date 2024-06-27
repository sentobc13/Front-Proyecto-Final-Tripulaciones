import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../features/auth/attendee/authAttendeeSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import "./Login.scss"
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

const LoginAttendee = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const { message, isSuccess, isError } = useSelector((state) => state.authAttendee);

  const [emailError, setEmailError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      navigate('/profile');
    }
    dispatch(reset());
  }, [isSuccess, dispatch, navigate]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(e.target.value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError(null);
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      return;
    }

    dispatch(login(formData));
  };

  return (
    <div className="loginContainer">
      <div className='bienvenidos'>
        <h3>Bienvenid@ a</h3>
        <div className='logoImagen'>
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </div>
      <div className='formLogin'>
        <Flex minHeight="54vh" alignItems="center" justifyContent="center" p={5}>
          {isSuccess && (
            <Alert status="success" mb={4}>
              <AlertIcon />
              <Text flex="1">
                <strong>Success:</strong> {message}
              </Text>
              <Button onClick={() => dispatch(reset())} size="sm" variant="ghost">
                X
              </Button>
            </Alert>
          )}
          {isError && (
            <Alert status="error" mb={4}>
              <AlertIcon />
              <Text flex="1">
                <strong>Error:</strong> {message}
              </Text>
              <Button onClick={() => dispatch(reset())} size="sm" variant="ghost">
                X
              </Button>
            </Alert>
          )}
          <form onSubmit={onSubmit} style={{ width: '100%' }}>
            <Stack spacing={4} width="100%" maxWidth="400px">
              <FormControl isRequired isInvalid={emailError}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Inserte su correo"
                  size="lg" // Ajusta el tamaño del input (lg: large)
                />
                {emailError && <Text color="red.500" fontSize="sm">{emailError}</Text>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Contraseña</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Inserte su contraseña"
                  size="lg" // Ajusta el tamaño del input (lg: large)
                />
              </FormControl>
              <Button className='btn-login' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
                Login
              </Button>
            </Stack>
          </form>
        </Flex>
      </div>
    </div>
  );
};

export default LoginAttendee;
