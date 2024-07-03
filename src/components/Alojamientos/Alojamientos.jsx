import { Box, Image, Text, Flex } from '@chakra-ui/react';

const Alojamientos = () => {
  return (
    <Box 
      width="100%" 
      maxWidth="1200px" 
      margin="auto" 
      padding="20px" 
    //   boxShadow="lg" 
      borderRadius="10px" 
      backgroundColor="white"
      mt="80px"  // Ajusta según la altura de tu header
    >
      <Box 
        position="relative" 
        width="100%" 
        height="auto" 
        marginBottom="20px"
        overflow="hidden" 
        borderRadius="10px"
      >
        <Image 
          src="/cabecera1.png" // Cambia a la ruta de tu imagen de cabecera
          alt="Alojamiento"
          objectFit="cover" 
          width="100%" 
          height={{ base: '200px', md: '300px' }} // Altura ajustable según el dispositivo
        />
        <Text 
          position="absolute" 
          bottom="10px" 
          left="10px" 
          backgroundColor="rgba(0, 0, 0, 0.5)" 
          color="white" 
          padding="10px" 
          borderRadius="5px"
        >
          Hotel
        </Text>
      </Box>

      <Flex 
        direction="column" 
        gap="20px"
      >

        <Box 
          width="100%" 
          height="auto" 
          overflow="hidden" 
          borderRadius="10px" 
          boxShadow="md"
          bg="white"
          p="4"
          mb="4"
        >
          <Image 
            src="/hotel olympia.png" // Cambia a la ruta de tu imagen del hotel 1
            alt="Hotel 1"
            objectFit="cover" 
            width="100%" 
            height={{ base: '120px', md: '300px' }} // Altura ajustable según el dispositivo
          />
       
        </Box>

        <Box 
          width="100%" 
          height="auto" 
          overflow="hidden" 
          borderRadius="10px" 
          boxShadow="md"
          bg="white"
          p="4"
          mb="4"
        >
          <Image 
            src="/SELECCION2.png" // Cambia a la ruta de tu imagen del hotel 2
            alt="Hotel 2"
            objectFit="cover" 
            width="100%" 
            height={{ base: '200px', md: '300px' }} // Altura ajustable según el dispositivo
          />
         
        </Box>
      </Flex>
    </Box>
  );
};

export default Alojamientos;
