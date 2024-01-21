import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  text-align: center;
  outline: none;
  background-color: ${(props) => props.theme.bgColorInput};
  border: 2px solid ${(props) => props.theme.borderColorInput};
  color: ${(props) => props.theme.textColorPrimary};
  border-radius: 4px;
`;

export const SearchResults = styled.div`
  max-height: 8rem;
  width: 20rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0.5rem;
  gap: 0.5rem;
  overflow-y: auto;
`;

export const ResultItem = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColorSecondary};
  color: ${(props) => props.theme.textColorPrimary};
  border: none;
  display: flex;
  max-height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
