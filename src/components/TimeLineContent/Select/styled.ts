import styled from "styled-components";

export const Select = styled.select`
  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorSecondary};
  border: none;

  color: ${({ theme }) => theme.colors.textColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;

export const Option = styled.option``;
