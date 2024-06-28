import { useState } from 'react';
import { Box, Flex, IconButton, Spacer, Image, VStack, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import './Header.scss'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('white'); // Color inicial del header

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Cambiar el color del header al abrir/cerrar el menú
    if (menuOpen) {
      setHeaderColor('white'); // Color inicial cuando se cierra el menú
    } else {
      setHeaderColor('radial-gradient(865.8% 89.15% at 6.03% 9.18%, #106AF2 0%, #6610F2 100%)'); // Cambiar por el gradiente deseado
    }
  };

  return (
    <Box
      bg={headerColor} // Aplicar el color dinámico del header
      width="100%"
      padding="1rem 0"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
    >
      <Flex maxWidth="1200px" margin="0 auto" padding="0 2rem" alignItems="center">
        <IconButton
          icon={<HamburgerIcon />}
          color="black"
          variant="ghost"
          aria-label="Open Menu"
          onClick={toggleMenu}
        />
        <Spacer />
        <Box>
          <Link to="/home">
            <Image src={logo} alt="Logo" height="40px" /> 
          </Link>
        </Box>
        <Spacer />
        <IconButton
          icon={<FaUserCircle />}
          color="black"
          variant="ghost"
          aria-label="User Profile"
        />
      </Flex>
      {menuOpen && (
        <VStack
          className="menu-hamburguesa"
          bg="radial-gradient(865.8% 89.15% at 6.03% 9.18%, #106AF2 0%, #6610F2 100%)"
          width="100%"
          height="100vh"
          position="fixed"
          top="0"
          left="0"
          right="0"
          padding="1rem 0"
          zIndex="999"
          spacing="1rem"
        >
          <Flex justify="flex-end" width="100%" padding="1rem">
            <IconButton
              icon={<HamburgerIcon />}
              color="white"
              background="transparent"
              variant="ghost"
              aria-label="Close Menu"
              onClick={toggleMenu}
              _hover={{ background: 'transparent' }}
            />
          </Flex>
          <Link to="/identify" onClick={toggleMenu}>Identifícate</Link>
          <Link to="/programa" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Programa</Link>
          <Link to="/mi-agenda" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Mi agenda</Link>
          <Link to="/lista-asistentes" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Lista de asistentes</Link>
          <Link to="/mapa-sitio" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Mapa del sitio</Link>
          <Link to="/alojamientos" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Alojamientos</Link>
          <Link to="/colaboradores" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Colaboradores</Link>
          <Link to="/premios-digit" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Premios Digit</Link>
          <Link to="/contacto" onClick={toggleMenu} style={{ color: 'white', fontSize: '18px' }}>Contacto</Link>
          <Text className="footer-text" style={{ color: 'white', marginTop: '2rem', fontSize: '14px', textAlign: 'center' }}>
            E-LEARNING EXPERIENCE by SAMOO<br />23 y 24 de mayo 2025<br />Valencia
          </Text>
        </VStack>
      )}
    </Box>
  );
};

export default Header;
