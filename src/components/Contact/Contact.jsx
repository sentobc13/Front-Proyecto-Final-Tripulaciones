import { Box, Text, Flex, Icon, Link } from '@chakra-ui/react';
import { FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Contact = () => {
  return (
    <Flex 
      height="100vh" 
      justifyContent="center" 
      alignItems="center" 
      backgroundColor="gray.50"
      fontFamily="Montserrat, sans-serif" 
    >
      <Box 
        width="100%" 
        maxWidth="600px" 
        padding="20px" 
        borderRadius="10px" 
        backgroundColor="white" 
        boxShadow="md"
      >
        <Text fontSize="2xl" fontWeight="bold" marginBottom="20px" textAlign="center">
          Contacto
        </Text>
        <Flex direction="column" gap="15px">
          <Flex alignItems="center" gap="10px">
            <Icon as={IoLocationSharp} boxSize={6} color="teal.500" />
            <Text>Antiga senda d’En Senent 8 - 4º Piso, 46023 - Valencia</Text>
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Icon as={FaPhoneAlt} boxSize={6} color="teal.500" />
            <Text>Teléfono: <Link href="tel:+34963937433" color="teal.500">+34 963 93 74 33</Link></Text>
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Icon as={FaEnvelope} boxSize={6} color="teal.500" />
            <Text>Correo electrónico: <Link href="mailto:info@samoo.es" color="teal.500">info@samoo.es</Link></Text>
          </Flex>
          <Flex alignItems="center" gap="10px">
            <Icon as={FaGlobe} boxSize={6} color="teal.500" />
            <Text>Web: <Link href="https://www.samoo.es/" isExternal color="teal.500">https://www.samoo.es/</Link></Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Contact;
