import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 2rem;
  background: ${(props) => props.theme.bgColorHeader};

  @media (min-width: 420px) {
    padding: 1.5rem 2rem;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    align-items: center;
    gap: 2rem;
  }
`;

export const HeaderH1 = styled.h1`
  display: flex;
  flex-direction: column;

  font-weight: 600;
  font-size: 2rem;

  & > span {
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const DescriptionText = styled.p`
  max-width: 25rem;

  font-size: 1.25rem;
  text-align: center;
  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Logo = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
    height: 240px;
  }

  @media (min-width: 1024px) {
    height: 320px;
  }
`;
