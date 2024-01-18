import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quotes = styled.section`
  margin-top: 3rem;
  width: 80%;
`;

export const SectionHeader = styled.h3`
  border-bottom: 1px solid #474747;
  font-weight: 200;
  color: ${(props) => props.theme.textColorPrimary};
  padding: 1rem 0;
`;

export const CardsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`;
