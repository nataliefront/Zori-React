import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export const ContactsContainer = styled.div`
  margin: 0 10px;
`;

export const ContactsTitle = styled.h1`
  text-align: center;
  margin: 26px 0 20px 0;
  font-size: 32px;
`;

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  margin: 0 0 20px 0;
`;

export const ContactsInfoItem = styled.li`
  font-size: 22px;
  line-height: 34px;
  display: flex;
  margin: 5px 0;
`;

export const MapMarkerAlt = styled(FaMapMarkerAlt)`
  font-size: 26px;
  margin: 0 10px 0 0;
  color: green;
  width: 50px;
`;

export const Phone = styled(FaPhone)`
  font-size: 26px;
  margin: 0 10px 0 0;
  color: blueviolet;
  width: 50px;
`;

export const ContactsAddress = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 22px;
  text-align: center;

  &:hover {
  color: burlywood;
  transition: all 0.3s ease-out;
  }
`;

export const ContactsPhone = styled.a`
  color: black;
  cursor: pointer;
  text-decoration: none;
  font-size: 22px;
  text-align: center;

  &:hover {
  color: burlywood;
  transition: all 0.3s ease-out;
  }
`;

export const ContactsText = styled.div`
  max-width: 800px;
  font-size: 22px;
  line-height: 32px;
  margin: 10px 0 20px 0;
`;