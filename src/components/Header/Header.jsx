import { useEffect, useState } from 'react';
import { Box, Flex, IconButton, Spacer, Image, VStack, Text, Link as ChakraLink } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaUserCircle } from 'react-icons/fa';
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../../assets/E-learning-Experience_Logo-negro.png';
import logo1 from '../../assets/E-learning-Experience_Logo-Blanco.png';
import './Header.scss';
import '../../../complements.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotifications } from '../../features/notification/notificationSlice';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { notifications, error } = useSelector((state) => state.notificationSlice);
  let notifiAlert = false;

  useEffect(() => {
    const fetchNotifications = async () => {
      await dispatch(getAllNotifications());
    };
    fetchNotifications();
  }, [dispatch]);

  if (notifications && notifications.length > 0) {
    notifications.map((noti) => {
      if (noti.status === 'pending') {
        notifiAlert = true;
      }
    });
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box fontFamily="Montserrat, sans-serif">
      <Box
        bg={menuOpen ? "radial-gradient(865.8% 89.15% at 6.03% 9.18%, #106AF2 0%, #6610F2 100%)" : "white"}
        width="100%"
        padding="1rem 0"
        boxShadow={menuOpen ? "none" : "0 2px 4px rgba(0, 0, 0, 0.1)"}
        position="fixed"
        top="0"
        left="0"
        zIndex="1000"
        transition="background-color 0.3s, box-shadow 0.3s"
      >
        <Flex maxWidth="1200px" margin="0 auto" padding="0 2rem" alignItems="center">
          <IconButton
            icon={<HamburgerIcon />}
            color={menuOpen ? 'white' : 'black'}
            background="transparent"
            variant="ghost"
            aria-label="Open Menu"
            onClick={toggleMenu}
            _hover={{ background: 'transparent' }}
          />
          <Spacer />
          <Box>
            <Link to="/home">
              <Image src={menuOpen ? logo1 : logo} alt="Logo" height="40px" />
            </Link>
          </Box>
          <Spacer />
          <Link to="/profile" style={{ padding: '10px' }}>
            <IconButton
              icon={<FaUserCircle />}
              color={menuOpen ? 'white' : 'black'}
              variant="ghost"
              aria-label="User Profile"
            />
          </Link>
          {
            notifiAlert ? (
              <Link to="/notification" style={{ position: 'relative', display: 'inline-block' }}>
                <IconButton
                  icon={<FaRegBell />}
                  color={menuOpen ? 'white' : 'black'}
                  variant="ghost"
                  aria-label="User Profile"
                />
                <button
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '5px',
                    height: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  aria-label="Notification Button"
                >
                </button>
              </Link>
            ) : (
              <Link to="/notification">
                <IconButton
                  icon={<FaRegBell />}
                  color={menuOpen ? 'white' : 'black'}
                  variant="ghost"
                  aria-label="User Profile"
                />
              </Link>
            )
          }
        </Flex>
      </Box>
      {menuOpen && (
        <VStack
          className="menu-hamburguesa"
          width="100%"
          height="100vh"
          position="fixed"
          top="0"
          left="0"
          right="0"
          padding="1rem 0"
          zIndex="999"
          spacing="0"
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
          <VStack spacing="0" width="100%" align="flex-start">
            <ChakraLink as={Link} to="/identify" onClick={toggleMenu} className="menu-link">Identifícate</ChakraLink>
            <ChakraLink as={Link} to="/programa" onClick={toggleMenu} className="menu-link">Programa</ChakraLink>
            <ChakraLink as={Link} to="/mi-agenda" onClick={toggleMenu} className="menu-link">Mi agenda</ChakraLink>
            <ChakraLink as={Link} to="/attendeeList" onClick={toggleMenu} className="menu-link">Lista de asistentes</ChakraLink>
            <ChakraLink as={Link} to="/map" onClick={toggleMenu} className="menu-link">Mapa del sitio</ChakraLink>
            <ChakraLink as={Link} to="/alojamientos" onClick={toggleMenu} className="menu-link">Alojamientos</ChakraLink>
            <ChakraLink as={Link} to="/colaboradores" onClick={toggleMenu} className="menu-link">Colaboradores</ChakraLink>
            <ChakraLink as={Link} to="/premios-digit" onClick={toggleMenu} className="menu-link">Premios Digit</ChakraLink>
            <ChakraLink as={Link} to="/contacto" onClick={toggleMenu} className="menu-link">Contacto</ChakraLink>
            <Text className="footer-text">
              E-LEARNING EXPERIENCE by SAMOO<br />23 y 24 de mayo 2025<br />Valencia
            </Text>
          </VStack>
        </VStack>
      )}
    </Box>
  );
};

export default Header;
