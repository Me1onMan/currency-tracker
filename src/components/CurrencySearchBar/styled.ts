import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 2rem 0;
`;

export const Input = styled.input`
  outline: none;

  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid ${(props) => props.theme.borderColorInput};
  border-radius: 4px;

  color: ${(props) => props.theme.textColorPrimary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const ClearButton = styled.button`
  cursor: pointer;

  padding: 0.25rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border: none;
  border-radius: 4px;

  text-align: center;
  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const SearchResults = styled.div`
  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;

  max-height: 8rem;
  padding: 0.5rem;

  @media (min-width: 420px) {
    grid-template-columns: repeat(6, 1fr);
    column-gap: 0.75rem;
    row-gap: 0.5rem;
  }

  @media (min-width: 768px) {
    max-height: 10rem;
  }

  @media (min-width: 1024px) {
    max-height: 12rem;
  }
`;

export const ResultItem = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border: none;
  border-radius: 4px;

  color: ${(props) => props.theme.textColorPrimary};

  @media (min-width: 768px) {
    width: 4rem;
    height: 2rem;

    font-size: 1.25rem;
  }

  @media (min-width: 1024px) {
    width: 6rem;
  }
`;
