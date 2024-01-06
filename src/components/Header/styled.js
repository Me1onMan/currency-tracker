import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 416px;
  align-items: center;
  padding: 32px;
  background: linear-gradient(45deg, #121212 0%, #0d2417 50%, #121212 100%);
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const HeaderH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 70px;

  font-weight: 600;

  & > span {
    background: linear-gradient(to right, #00d04c, #9fdc46);
    -webkit-background-clip: text;
    color: transparent;
  }

  & span:first-child {
    font-size: 76px;
  }
  & span:last-child {
    font-size: 90px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 25px;
  max-width: 408px;
  text-align: center;
`;

export const Logo = styled.img`
  height: 312px;
`;
