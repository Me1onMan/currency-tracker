import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: ${({ theme }) => theme.sizes.rem.rem0_75};
  gap: ${({ theme }) => theme.sizes.rem.rem1};

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border: ${({ theme }) => theme.borders.card};
  border-radius: ${({ theme }) => theme.sizes.rem.rem0_5};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    padding: ${({ theme }) => theme.sizes.rem.rem1};
    gap: ${({ theme }) => theme.sizes.rem.rem2};
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.sizes.rem.rem3};

  @media (min-width: ${({ theme }) => theme.sizes.rem.rem0_75}) {
    width: ${({ theme }) => theme.sizes.rem.rem4};
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h3`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textColorCardPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
  }
`;

export const Value = styled.div`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.textColorCardSecondary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    margin-top: ${({ theme }) => theme.sizes.rem.rem0_25};
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;
