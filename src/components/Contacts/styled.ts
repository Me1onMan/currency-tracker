import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ theme }) => theme.sizes.percents.vh100};

  background-color: ${({ theme }) => theme.colors.bgColorPrimary};
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
  color: ${({ theme }) => theme.colors.textColorPrimary};
`;
