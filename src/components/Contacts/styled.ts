import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColorPrimary};
`;

export const Text = styled.p`
  color: ${(props) => props.theme.textColorPrimary};
  text-align: center;
  font-size: 1.5rem;
`;
