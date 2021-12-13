import React from 'react';
import { FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

const PhoneLink = styled.a`
  background: grey;
  padding: 20px;
  position: fixed;
  bottom: 30px;
  left: 30px;
  color: burlywood;
  font-size: 26px;
  display: flex;
  z-index: 30;
  border-radius: 50%;
  transform: scale(0.9, 0.9);
  animation-name: phone;
  animation-duration: 4s;
  animation-iteration-count: infinite;

  @keyframes phone {
    0% {
        transform: scale(0.9, 0.9);
    }
    50% {
        transform: scale(1.1, 1.1);
    }
    100% {
        transform: scale(0.9, 0.9);
    }
}
`;

const Phone = () => {
    return (
      <PhoneLink href="tel:+380679041814">
        <FaPhone />
      </PhoneLink>
    )
}

export default Phone;
