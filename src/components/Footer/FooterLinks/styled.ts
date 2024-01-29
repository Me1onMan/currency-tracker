import styled from "styled-components";

export const LinksContainer = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.sizes.rem.rem2};
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.sizes.rem.rem0_75};

  & > div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.sizes.rem.rem0_5};
  }

  & p {
    color: ${({ theme }) => theme.colors.textColorPrimary};
  }

  & a {
    color: ${({ theme }) => theme.colors.textColorSecondary};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    margin-top: ${({ theme }) => theme.sizes.zero};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.laptop}) {
    font-size: ${({ theme }) => theme.sizes.rem.rem1_25};
  }
`;
