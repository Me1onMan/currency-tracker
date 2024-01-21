import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 90%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContent = styled.div``;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & p {
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const Logo = styled.img`
  width: 44px;
`;

export const LogoName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const FooterDescription = styled.p`
  font-weight: 200;
  max-width: 30rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.textColorPrimary};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & p {
    color: ${(props) => props.theme.textColorPrimary};
  }

  & a {
    display: block;
    color: ${(props) => props.theme.textColorSecondary};
  }
`;

export const Copyright = styled.p`
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.textColorSecondary};
  text-align: center;
  margin: 40px;
`;
