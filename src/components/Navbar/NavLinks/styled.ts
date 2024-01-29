import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  font-weight: 200;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: ${({ theme }) => theme.sizes.rem.rem0_75};

  & a {
    color: ${({ theme }) => theme.colors.textColorPrimary};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.mobileL}) {
    gap: ${({ theme }) => theme.sizes.rem.rem0_5};
    font-size: ${({ theme }) => theme.sizes.rem.rem1};
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    gap: ${({ theme }) => theme.sizes.rem.rem3};
    font-size: ${({ theme }) => theme.sizes.rem.rem1_5};
  }
`;

export const NavItem = styled.li`
  padding: 0.5rem 0.25rem;
`;
