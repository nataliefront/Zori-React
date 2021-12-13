import styled, { css } from 'styled-components/macro';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
  height: calc(100vh - 80px);
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  margin: 20px 0 0 0;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1600px;
  width: calc(100%-100px);
  color: white;
  background: black;
  opacity: 0.8;
  padding: 10px;

  h1 {
      font-size: clamp(16px, 8vw, 30px);
      font-weight: 600;
      margin-bottom: 10px;
  }

  p {
      font-size: clamp(16px, 8vw, 24px);
      margin-bottom: 15px;
  }
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

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 5px;
  color: black;
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