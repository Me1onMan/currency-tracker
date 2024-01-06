import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin: 100px 112px 0;
  /* padding-top: 40px;
    padding-left: 112px;
    padding-right: 112px; */
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterContent = styled.div``;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p:nth-of-type(1) {
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Logo = styled.img`
  width: 44px;
`;

export const LogoName = styled.p`
  font-size: 26px;
  font-weight: 600;
`;

export const FooterDescription = styled.p`
  font-size: 24px;
  font-weight: 200;
  max-width: 480px;
  margin-top: 20px;
`;

export const LinksTable = styled.table`
  width: 532px;
  max-height: 156px;

  & thead {
    font-size: 28px;
  }

  & tbody td {
    font-size: 24px;
    color: #898989;
  }
`;

export const Copyright = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  color: #898989;
  text-align: center;
  margin: 40px;
`;
