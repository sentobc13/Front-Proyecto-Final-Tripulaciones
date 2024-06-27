import { useState } from 'react';
import { Box, Flex, IconButton, Spacer, Image, VStack, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import './Header.scss'; // Asegúrate de importar el archivo SCSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box bg="white" width="100%" padding="1rem 0" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" position="fixed" top="0" left="0" zIndex="1000">
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
        <VStack className="menu-hamburguesa" width="100%" padding="1rem 0">
          <Link to="/programa" onClick={toggleMenu}>Programa</Link>
          <Link to="/mi-agenda" onClick={toggleMenu}>Mi agenda</Link>
          <Link to="/lista-asistentes" onClick={toggleMenu}>Lista de asistentes</Link>
          <Link to="/mapa-sitio" onClick={toggleMenu}>Mapa del sitio</Link>
          <Link to="/alojamientos" onClick={toggleMenu}>Alojamientos</Link>
          <Link to="/colaboradores" onClick={toggleMenu}>Colaboradores</Link>
          <Link to="/premios-digit" onClick={toggleMenu}>Premios Digit</Link>
          <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
          <Text className="footer-text">E-LEARNING EXPECIENCE by SAMOO<br />23 y 24 de mayo 2025<br />Valencia</Text>
        </VStack>
      )}
    </Box>
  );
};

export default Header;
