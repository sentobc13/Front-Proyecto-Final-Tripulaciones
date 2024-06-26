import { useState } from 'react';
import { Box, Flex, IconButton, Spacer, Image, VStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';

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
        <VStack bg="white" width="100%" padding="1rem 0" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)">
          <Link to="/home" onClick={toggleMenu}>Home</Link>
          <Link to="/register" onClick={toggleMenu}>Registro</Link>
          <Link to="/profile" onClick={toggleMenu}>Perfil</Link>
          <Link to="/login" onClick={toggleMenu}>Login</Link>
        </VStack>
      )}
    </Box>
  );
};

export default Header;
