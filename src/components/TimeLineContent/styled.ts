import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
  width: 100%;
  padding: 0 5%;

  & > * {
    font-size: 1.25rem;
    color: ${(props) => props.theme.textColorPrimary};
  }

  & > button {
    cursor: pointer;
    padding: 0.25rem 0.75rem;

    background-color: ${(props) => props.theme.bgColorSecondary};
    border: none;
  }

  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.75rem;
    row-gap: 1rem;

    font-size: 1.25rem;
  }
`;

export const Select = styled.select`
  outline: none;

  width: 100%;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border: none;

  color: ${(props) => props.theme.textColorPrimary};
`;

export const Option = styled.option``;

export const DateInput = styled.input`
  cursor: pointer;

  width: 100%;
  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border: none;

  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const OptionBtn = styled.button`
  width: 100%;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
