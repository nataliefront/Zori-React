import styled from "styled-components";
import { FaSnowflake } from 'react-icons/fa';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroContVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoCarp = styled.video`
  width: 100%;
  height: calc(100% - 80px);
  object-fit: cover
`;

export const HeroAnimation = styled.div`
  display: flex;
  z-index: 2;
  position: absolute;
  top: 0;
`;

export const SnowflakeOne = styled(FaSnowflake)`
  font-size: 0;
  color: white;
  position: relative;
  top: 5px;
  right: 100px;
  animation-name: snowflakeone;
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @keyframes snowflakeone {

    0% {
        top: 5px;
        font-size: 0;
    }
    100% {
        top: 80px;
        font-size: 22px;
    }
    
}
`;

export const SnowflakeTwo = styled(FaSnowflake)`
  font-size: 0;
  color: white;
  position: relative;
  top: 5px;
  animation-name: snowflaketwo;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 2s;

  @keyframes snowflaketwo {

    0% {
        top: 5px;
        font-size: 0;
    }
    100% {
        top: 80px;
        font-size: 22px;
    }
    
}
`;

export const SnowflakeThree = styled(FaSnowflake)`
  font-size: 0;
  color: white;
  position: relative;
  top: 5px;
  left: 100px;
  animation-name: snowflakethree;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-delay: 4s;

  @keyframes snowflakethree {

    0% {
        top: 5px;
        font-size: 0;
    }
    100% {
        top: 80px;
        font-size: 22px;
    }
    
}
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: absolute;
  top: 80px;
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  color: black;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
`;

