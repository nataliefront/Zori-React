import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
`;

export const FooterLogo = styled(Link)`
    color: burlywood;
    cursor: pointer;
    text-decoration: none;
    font-size: 32px;
    margin: 0 0 20px 0;

    &:hover {
    color: white;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

export const FooterAddress = styled.a`
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-size: 22px;
    text-align: center;
    margin: 0 0 20px 0;

    &:hover {
    color: burlywood;
    transition: all 0.3s ease-out;
    }
`;

export const FooterNumber = styled.a`
    color: burlywood;
    cursor: pointer;
    text-decoration: none;
    font-size: 26px;
    margin: 0 0 20px 0;

    &:hover {
    color: white;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

export const FooterText = styled.div`
  font-size: 20px;
  margin: 0 0 20px 0;
  max-width: 400px;
  text-align: center;
  line-height: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const SocialIconLink = styled.a`
  color: white;
  font-size: 32px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }

  &:first-child:hover {
    color: blue;
    transition: all 0.3s ease-out;
  }

  &:last-child:hover {
    color: violet;
    transition: all 0.3s ease-out;
  }
`;

export const WebsiteRights = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 28px;
`;