import styled from 'styled-components';
import { FaHamburger, FaLaptop, FaParking, FaTv, FaBed, FaAirFreshener } from 'react-icons/fa';

export const RoomsContainer = styled.div`
  margin: 0 10px;
`;

export const RoomsTitle = styled.h1`
  text-align: center;
  margin: 26px 0 0 0;
  font-size: 32px;
`;

export const RoomsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RoomsInfo = styled.ul`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  margin: 0 0 20px 0;
`;

export const RoomsInfoItem = styled.li`
  font-size: 22px;
  line-height: 34px;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const Hamburger = styled(FaHamburger)`
  font-size: 28px;
  margin: 0 10px 0 0;
  color: brown;
`;

export const Laptop = styled(FaLaptop)`
  font-size: 28px;
  margin: 0 10px 0 0;
`;

export const Parking = styled(FaParking)`
  font-size: 28px;
  margin: 0 10px 0 0;
  color: blue;
`;

export const Tv = styled(FaTv)`
  font-size: 28px;
  margin: 0 10px 0 0;
`;

export const Bed = styled(FaBed)`
  font-size: 28px;
  margin: 0 10px 0 0;
  color: green;
`;

export const AirFreshener = styled(FaAirFreshener)`
  font-size: 28px;
  margin: 0 10px 0 0;
  color: violet;
`;

export const RoomsText = styled.div`
  max-width: 800px;
  font-size: 22px;
  line-height: 32px;
  margin: 10px 0 20px 0;
`;