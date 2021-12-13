import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin: 0 10px;
`;

export const ServicesTitle = styled.h1`
  text-align: center;
  margin: 26px 0 20px 0;
  font-size: 32px;

  @media screen and (max-width: 991px) {
    margin: 26px 0 5px 0;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;