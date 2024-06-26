import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const { message, isSuccess, isError } = useSelector((state) => state.auth);

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
    <div>
        <div>
            <h3>
                Bienvenido a
            </h3>
        </div>
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" p={5}>
      <Box width="100%" maxWidth="400px" mx="auto" p={5} boxShadow="md" borderRadius="md">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
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
        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired isInvalid={emailError}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Insert your email"
              />
              {emailError && <Text color="red.500" fontSize="sm">{emailError}</Text>}
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Insert your password"
              />
            </FormControl>
            <Button type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
    </div>
  );
};

export default Login;
