import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '../features/form/formSlice';
import { register } from '../features/auth/authSlice';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Flex,
  useToast,
} from '@chakra-ui/react';

const AboutYou = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const { isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);
  const [localFormData, setLocalFormData] = useState(formData);
  const toast = useToast();

  const handleChange = (e) => {
    setLocalFormData({
      ...localFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateFormData(localFormData));
    dispatch(register(localFormData));
  };

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" p={5}>
      <Box width="100%" maxWidth="400px" mx="auto" p={5} boxShadow="md" borderRadius="md">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Sobre ti
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                name="name"
                value={localFormData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Apellido</FormLabel>
              <Input
                type="text"
                name="surname"
                value={localFormData.surname}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>País de residencia</FormLabel>
              <Input
                type="text"
                name="country"
                value={localFormData.country}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Empresa</FormLabel>
              <Input
                type="text"
                name="company"
                value={localFormData.company}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Teléfono</FormLabel>
              <Input
                type="text"
                name="phone"
                value={localFormData.phone}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input
                type="text"
                name="position"
                value={localFormData.position}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Linkedin</FormLabel>
              <Input
                type="text"
                name="linkedin"
                value={localFormData.linkedin}
                onChange={handleChange}
              />
            </FormControl>
            <Button type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
              Siguiente
            </Button>
          </Stack>
        </form>
        {isSuccess && toast({
          title: "Registro completado.",
          description: "Tu información ha sido registrada exitosamente.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })}
        {isError && toast({
          title: "Error en el registro.",
          description: message,
          status: "error",
          duration: 5000,
          isClosable: true,
        })}
      </Box>
    </Flex>
  );
};

export default AboutYou;
