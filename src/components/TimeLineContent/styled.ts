import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.rem.rem1};
`;

export const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.sizes.rem.rem0_5};
  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: 0 5%;

  & > * {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
    color: ${({ theme }) => theme.colors.textColorPrimary};
  }

  & > button {
    padding: 0.25rem 0.75rem;

    background-color: ${({ theme }) => theme.colors.bgColorSecondary};
    border: none;
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.sizes.rem.rem0_75};
    row-gap: ${({ theme }) => theme.sizes.rem.rem1};

    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const DateInput = styled.input`
  cursor: pointer;

  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border: none;

  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const OptionBtn = styled.button`
  width: ${({ theme }) => theme.sizes.percents.p100};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;
