import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.sizes.percents.p100};
  padding: 0.75rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.bgColorPrimary};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    padding: ${({ theme }) => theme.sizes.rem.rem1};
  }
`;

export const Logo = styled.img`
  width: ${({ theme }) => theme.sizes.rem.rem1};

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    width: ${({ theme }) => theme.sizes.rem.rem1_5};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    width: ${({ theme }) => theme.sizes.rem.rem2_5};
  }
`;

export const BurgerButton = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: ${({ theme }) => theme.sizes.rem.rem2};
  height: ${({ theme }) => theme.sizes.rem.rem2};

  & > span {
    width: ${({ theme }) => theme.sizes.percents.p100};
    height: ${({ theme }) => theme.sizes.px.px2};
    background-color: ${({ theme }) => theme.colors.textColorCardPrimary};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    display: none;
  }
`;
