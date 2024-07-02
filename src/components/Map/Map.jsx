import { ChakraProvider, Box, Text, Link } from '@chakra-ui/react';

const Map = () => {
  return (
    <Box
      width="100vw"
      height="78vh"
      marginTop="10vh"
       marginBottom="12vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        padding="0.5rem"
        borderRadius="8px"
        marginBottom="1rem"
        fontFamily="Montserrat"
      >
        Mapa del evento
      </Text>
      <Box
        width="100%"
        height="100%"
        position="relative"
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=800&amp;hl=en&amp;q=huerto%20santa%20maria%20Valencia+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ position: "absolute", top: 0, left: 0, border: 0 }}
        ></iframe>
         <div className="container-button">
           
           <Link to="https://www.google.es/maps/place/39%C2%B035'08.8%22N+0%C2%B018'13.2%22W/@39.585786,-0.303652,17z/data=!3m1!4b1!4m4!3m3!8m2!3d39.585786!4d-0.303652?entry=ttu">
               <button className="continue-button" name = "Siguiente">Cómo llegar</button>
           </Link>
       </div>

        <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=f311ab2921a2e52df8e3b654aec3b2b8d687125a'></script>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider>
      <Map />
    </ChakraProvider>
  );
}

export default App;
