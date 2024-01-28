import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quotes = styled.section`
  margin-top: 3rem;
  width: 100%;
  padding: 0 5%;
`;

export const SectionHeader = styled.h3`
  border-bottom: 1px solid #474747;
  font-weight: 200;
  color: ${(props) => props.theme.textColorPrimary};
`;

export const CardsContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  justify-items: center;

  @media (min-width: 768px) {
    margin-top: 2rem;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 2rem;
  }
`;
