import styled from "styled-components";

export const ServicesItems = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0;

  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ServicesImage = styled.div`
  max-width: 50%;
  margin: 0 5px 0 0;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 991px) {
    max-width: 100%;
    }
`;

export const ServicesInfo = styled.div`
  max-width: 50%;
  margin: 20px 5px 5px 5px;

  @media screen and (max-width: 991px) {
    max-width: 800px;
    }
`;

export const ServicesItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 20px 0;

  @media screen and (max-width: 991px) {
    margin: 0 0 12px 0;
    }
`;

export const ServicesText = styled.div`
  font-size: 22px;
  line-height: 32px;
`;