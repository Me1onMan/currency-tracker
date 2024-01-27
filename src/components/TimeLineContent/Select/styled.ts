import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.bgColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  width: 90%;
`;

export const Option = styled.option``;
