import { Box, Image, Text, Flex } from '@chakra-ui/react';

const Alojamientos = () => {
  return (
    <Box 
      width="100%" 
      maxWidth="1200px" 
      margin="auto" 
      padding="20px" 
      borderRadius="10px" 
      backgroundColor="white"
      mt="80px"  
      textAlign="center" 
    >
      <Box 
        position="relative" 
        width="100%" 
        maxWidth="430px" 
        margin="auto" 
        marginBottom="20px"
        overflow="hidden" 
        borderRadius="10px"
      >
        <Image 
          src="/cabecera1.png" 
          alt="Alojamiento"
          objectFit="cover" 
          width="100%" 
          height={{ base: '150px', md: '200px' }} 
        />
        <Text 
          position="absolute" 
          bottom="10px" 
          left="50%" 
          transform="translateX(-50%)" 
          backgroundColor="rgba(0, 0, 0, 0.5)" 
          color="white" 
          padding="10px" 
          borderRadius="5px"
        >
          
        </Text>
      </Box>

      <Flex 
        direction="column" 
        gap="20px"
        alignItems="center" 
      >
        {/* Card 1 */}
        <Box 
          width="100%" 
          maxWidth="430px"
          height="auto" 
          overflow="hidden" 
          borderRadius="10px" 
          boxShadow="md"
          bg="white"
          p="4"
          mb="4"
        >
          <Image 
            src="/SELECCION1.png" 
            alt="Hotel 1"
            objectFit="cover" 
            width="100%" 
            height="292px" 
          />
        </Box>
        
      </Flex>
    </Box>
  );
};

export default Alojamientos;
