import React from 'react';
import { Link } from 'react-router-dom';
import "../PaymentMethods/PaymentMethods.scss";
import { Button } from '@chakra-ui/react';
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const PaymentMethods = () => {

  return (
    <div className="paymentContainer">
      <div className="divtitleAllergies">
        <h1 className="titleAllergies">Métodos de pago</h1>
      </div>
      <div className="custom-input">
        <span>Tipo de entrada:</span>
        <input type="text" defaultValue="Educación, administración pública y Entidades sin ánimo de lucro." />
        <span className="price">-Entrada 2 días 360€</span>
      </div>
      <div className='btn-container'>
        <div>
          <Button className='btn-creditCard' type="submit" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
            <FaCreditCard className="iconCreditCard" /> Tarjeta de crédito
          </Button>
        </div>
        <div>
          <Button className='btn-paypal' type="submit" bg="#FFC439" color="white" _hover={{ bg: '#FFB81C' }} isFullWidth>
            <FaPaypal className='iconPaypal' /> PayPal
          </Button>
        </div>
        <div>
          <Button className='btn-paypalCredit' type="submit" bg="#003087" color="white" _hover={{ bg: '#001F5C' }} isFullWidth>
            <FaPaypal className='iconPaypalCredit' /> PayPal CREDIT
          </Button>
        </div>
      </div>
      <div className='separator'>
        <hr className='line' />
        <span className='or'>o</span>
        <hr className='line' />
      </div>
      <div className="bankTransfer">
        <span>Pago con transferencia bancaria</span>
        <p>Realiza una transferencia bancaria al siguiente IBAN, en un plazo máximo de 72 horas se verificará el pago.</p>
        <Button className='btn-copyIban' type="button" bg="#4299E1" color="white" _hover={{ bg: '#3182CE' }} isFullWidth>
          Copiar IBAN
        </Button>
      </div>
    </div>
  )
}

export default PaymentMethods;
