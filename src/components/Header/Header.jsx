import { useState } from 'react';
import { Box, Flex, IconButton, Spacer, Image, VStack, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import './Header.scss'; // Asegúrate de importar el archivo SCSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState('white'); // Color inicial del header
  const [menuButtonColor, setMenuButtonColor] = useState('black'); // Color inicial del botón del menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Cambiar el color del header y del botón del menú al abrir/cerrar el menú
    if (menuOpen) {
      setHeaderColor('white'); // Color inicial cuando se cierra el menú
      setMenuButtonColor('black'); // Color inicial cuando se cierra el menú
    } else {
      setHeaderColor('radial-gradient(865.8% 89.15% at 6.03% 9.18%, #106AF2 0%, #6610F2 100%)'); // Cambiar por el gradiente deseado
      setMenuButtonColor('white'); // Cambiar por el color deseado del botón del menú
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setHeaderColor('white'); // Restaurar color inicial del header al cerrar menú
    setMenuButtonColor('black'); // Restaurar color inicial del botón del menú al cerrar menú
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
          color={menuButtonColor} // Color dinámico del botón del menú
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
        <>
          <Box
            bg="rgba(0, 0, 0, 0.5)" // Fondo oscuro para cerrar menú haciendo clic fuera
            position="fixed"
            top="64px"
            left="0"
            bottom="0"
            right="0"
            zIndex="999"
            onClick={closeMenu}
          />
          <VStack className="menu-hamburguesa" width="100%" position="fixed" top="64px" bottom="0" left="0" right="0" padding="1rem 0" zIndex="1000">
            <Link to="/programa" onClick={closeMenu}>Programa</Link>
            <Link to="/mi-agenda" onClick={closeMenu}>Mi agenda</Link>
            <Link to="/lista-asistentes" onClick={closeMenu}>Lista de asistentes</Link>
            <Link to="/mapa-sitio" onClick={closeMenu}>Mapa del sitio</Link>
            <Link to="/alojamientos" onClick={closeMenu}>Alojamientos</Link>
            <Link to="/colaboradores" onClick={closeMenu}>Colaboradores</Link>
            <Link to="/premios-digit" onClick={closeMenu}>Premios Digit</Link>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
            <Text className="footer-text">E-LEARNING EXPERIENCE by SAMOO<br />23 y 24 de mayo 2025<br />Valencia</Text>
          </VStack>
        </>
      )}
    </Box>
  );
};

export default Header;
