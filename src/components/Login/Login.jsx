  import React, { useEffect, useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { login, reset } from '../../features/auth/authSlice';
  import { useNavigate } from 'react-router-dom';
  import logo from '../../assets/E-learning-Experience_Logo-negro.png';
  import "./Login.scss"
  import{
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Alert,
    AlertIcon,
    Flex,
    Text,
    useSteps,
    Step,
    Steps,
  } from '@chakra-ui/react';
  
    const Login = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const { email, password } = formData;
    const { message, isSuccess, isError } = useSelector((state) => state.auth);
  
    const [emailError, setEmailError] = useState(null);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (isSuccess) {
        navigate('/profile');
      }
      dispatch(reset());
    }, [isSuccess, dispatch, navigate]);
  
    const onChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  
      if (e.target.name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(e.target.value)) {
          setEmailError('Please enter a valid email address.');
        } else {
          setEmailError(null);
        }
      }
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
  
      if (emailError) {
        return;
      }
  
      dispatch(login(formData));
    };
  
    // Define los pasos para el Stepper
    const steps = [
      { title: 'Step 1', description: 'Enter email and password' },
      { title: 'Step 2', description: 'Next step description' },
      { title: 'Step 3', description: 'Final step description' },
    ];
  
    // Usa el hook useSteps para manejar el estado del Stepper
    const { activeStep } = useSteps({ initialStep: 0, count: steps.length });
  
    return (
      <div className="loginContainer">
        <div className='bienvenidos'>
          <h3>Bienvenid@ a</h3>
          <div className='logoImagen'>
            <img className="logo" src={logo} alt="Logo" />
          </div>
        </div>
        <div className='formLogin'>
          <Flex minHeight="50vh" alignItems="center" justifyContent="center" p={5}>
            <Steps activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step key={index} label={step.title}>
                  <Box p={4}>
                    <Text>{step.description}</Text>
                  </Box>
                </Step>
              ))}
            </Steps>
          </Flex>
        </div>
      </div>
    );
  };
  

  export default Login;
