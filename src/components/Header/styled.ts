import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* margin-top: 5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: ${(props) => props.theme.bgColorHeader};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const HeaderH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: end;

  font-weight: 600;

  & > span {
    font-size: 4rem;
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 990px) {
    & > span {
      font-size: 3rem;
    }
  }

  @media (max-width: 990px) {
    align-items: center;

    & > span {
      font-size: 2rem;
    }
  }
`;

export const DescriptionText = styled.p`
  font-size: 25px;
  max-width: 408px;
  text-align: center;
  color: ${(props) => props.theme.textColorPrimary};
`;

export const Logo = styled.img`
  height: 312px;

  @media (max-width: 990px) {
    height: 240px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
