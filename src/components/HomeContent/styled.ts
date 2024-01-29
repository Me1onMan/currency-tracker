import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Quotes = styled.section`
  margin-top: ${({ theme }) => theme.sizes.rem.rem3};
  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: 0 5%;
`;

export const SectionHeader = styled.h3`
  border-bottom: 1px solid #474747;

  font-weight: 200;
  color: ${({ theme }) => theme.colors.textColorPrimary};
`;

export const CardsContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  row-gap: ${({ theme }) => theme.sizes.rem.rem1};

  margin-top: ${({ theme }) => theme.sizes.rem.rem1};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.sizes.rem.rem3};
    row-gap: ${({ theme }) => theme.sizes.rem.rem2};

    margin-top: ${({ theme }) => theme.sizes.rem.rem2};
  }
`;
