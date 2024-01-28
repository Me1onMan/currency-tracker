import styled from "styled-components";

export const Select = styled.select`
  cursor: pointer;
  outline: none;

  width: 100%;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border: none;

  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Option = styled.option``;
