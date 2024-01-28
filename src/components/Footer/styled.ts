import styled from "styled-components";

export const FooterContainer = styled.footer``;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0.5rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 2rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

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
  width: 24px;

  @media (min-width: 768px) {
    width: 32px;
  }

  @media (min-width: 1024px) {
    width: 40px;
  }
`;

export const LogoName = styled.p`
  font-size: 1.25rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const FooterDescription = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    max-width: 18rem;

    font-weight: 200;
    color: ${(props) => props.theme.textColorPrimary};
  }

  @media (min-width: 1024px) {
    max-width: 30rem;
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  & p {
    color: ${(props) => props.theme.textColorPrimary};
  }

  & a {
    color: ${(props) => props.theme.textColorSecondary};
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const Copyright = styled.p`
  margin-top: 2rem;
  padding: 0.5rem 0;

  font-family: "Inter", sans-serif;
  font-size: 0.75rem;
  color: ${(props) => props.theme.textColorSecondary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
