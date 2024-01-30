import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.rem.rem1};

  padding: 2rem 0;
`;

export const Input = styled.input`
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorInput};
  border: 2px solid ${({ theme }) => theme.colors.borderColorInput};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_25};

  color: ${({ theme }) => theme.colors.textColorPrimary};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.rem.rem2};
  align-items: center;
`;

export const ClearButton = styled.button`
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_25};

  text-align: center;
  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const SearchResults = styled.div`
  overflow-y: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.sizes.rem.rem0_5};

  max-height: ${({ theme }) => theme.sizes.rem.rem8};
  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: ${({ theme }) => theme.sizes.rem.rem0_5} 0;

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    grid-template-columns: repeat(6, 1fr);
    column-gap: ${({ theme }) => theme.sizes.rem.rem0_75};
    row-gap: ${({ theme }) => theme.sizes.rem.rem0_5};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    max-height: ${({ theme }) => theme.sizes.rem.rem10};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    max-height: ${({ theme }) => theme.sizes.rem.rem12};
  }
`;

export const ResultItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_25};

  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    width: ${({ theme }) => theme.sizes.rem.rem4};
    height: ${({ theme }) => theme.sizes.rem.rem2};

    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    width: ${({ theme }) => theme.sizes.rem.rem6};
  }
`;
