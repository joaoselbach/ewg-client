import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 30px 100px;
  background-color: #ec1415;

  //Mobile
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } 
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  //Mobile
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  } 
`;

export const SectionTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-top: 20px;

  //Mobile
  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const SubTitle = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
  transition: 0.4s;
  font-weight: 300;
  cursor: pointer;

  :hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const SectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 310px;
  font-weight: bold;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } 
`;

export const SubTitleInfo = styled.span`
  font-size: 14px;
  color: #fff;
  margin-top: 10px;
  font-weight: 300;
`;

export const ContactSubTitle = styled.span`
  display: flex;
  align-items: flex-start;
  margin-top: 6px;
  color: #fff;
  font-weight: 300;
  text-align: center;
`

export const Address = styled.a`
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardImage = styled.img`
  margin-top: 5px;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 40px;
`;

export const CopyrightText = styled.span`
  font-size: 12px;
  color: #2e2e2e90;
  max-width: 900px;
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 70px;
  gap: 20px;
`;

export const FooterImg = styled.img`
  width: 100%;
`;
