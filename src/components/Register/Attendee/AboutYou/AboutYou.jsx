import React, { useState } from 'react'
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

  <div>
    <h3>Sobre ti</h3>
  </div>
const AboutYou = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        país_de_residencia: '',
        empresa: '',
        telefono: '',
        cargo: '',
        linkedin: '',

    })
  return (
    <div>AboutYou</div>
  )
}

export default AboutYou