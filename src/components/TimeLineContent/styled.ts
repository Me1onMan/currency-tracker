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
    justify-content: space-between;
  }

  & > button {
    cursor: pointer;
    padding: 0.25rem 0.75rem;

    background-color: ${(props) => props.theme.bgColorSecondary};
    border: none;

    color: ${(props) => props.theme.textColorPrimary};
  }

  @media (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.75rem;
    row-gap: 1rem;

    font-size: 1.25rem;
  }

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);

    & > * {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    & button {
      justify-content: center;
    }
  } */
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
