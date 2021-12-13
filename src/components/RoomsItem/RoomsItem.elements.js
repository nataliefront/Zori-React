import styled, { css } from 'styled-components/macro';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const RoomsSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RoomsWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: start;
  position: relative;
  overflow: hidden;
`;

export const RoomsSlide = styled.div`
  z-index: 1;
  width: 90%;
  height: 90%;
`;

export const RoomsSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
      content: '';
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100vh;
      bottom: 0;
      left: 0;
      overflow: hidden;
      opacity: 0.4;
      background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%,);
  }
`;

export const RoomsImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 90vw;
  height: 90vh;
  object-fit: cover;
`;

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  background: black;
  border-radius: 50px;
  padding: 10px;
  margin-right: 20px;
  user-select: none;
  transition: 0.3s;

  &:hover {
      background: grey;
      transform: scale(1.05);
  }

  @media screen and (max-width: 991px) {
    &:last-child{
        margin-right: 5px;
    }
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

  @media screen and (max-width: 991px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;