import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../features/auth/authSlice';
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

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    phone: '',
    linkedin: '',
    interests: '',
    allergies: '',
    dietary_restrictions: '',
    nationality: '',
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
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key] === '' && key !== 'allergies' && key !== 'dietary_restrictions'
    );

    if (emptyFields.length > 0) {
      setFormError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      return;
    }

    if (emailError) {
      setFormError('Please correct the errors before submitting.');
      return;
    }

    setFormError(null);
    setSuccessMessage(null);
    dispatch(register(formData)).then(() => {
      if (!error) {
        setSuccessMessage('Registration successful!');
      }
    });
  };

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" p={5}>
      <Box width="100%" maxWidth="500px" mx="auto" p={5} boxShadow="md" borderRadius="md">
        <Heading as="h2" size="lg" mb={6} textAlign="center">Registro</Heading>
        {formError && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            {formError}
          </Alert>
        )}
        {status === 'failed' && (
          <Alert status="error" mb={4}>
            <AlertIcon />
            Error: {error}
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
            {Object.keys(formData).map((key) => (
              <FormControl key={key} isRequired={key !== 'allergies' && key !== 'dietary_restrictions'} isInvalid={key === 'email' && emailError}>
                <FormLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</FormLabel>
                <Input
                  type={key === 'password' ? 'password' : 'text'}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                />
                {key === 'email' && emailError && <Text color="red.500" fontSize="sm">{emailError}</Text>}
              </FormControl>
            ))}
            <Button type="submit" colorScheme="teal" isLoading={status === 'loading'}>
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
