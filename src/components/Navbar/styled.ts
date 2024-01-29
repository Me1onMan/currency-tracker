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

export const Input = styled.input`
  display: none;

  &:checked + label:after {
    left: ${({ theme }) => theme.sizes.percents.p94};
    transform: translateX(-100%);
  }
`;

export const Label = styled.label`
  text-indent: -9999px;

  position: relative;
  display: block;
  width: ${({ theme }) => theme.sizes.rem.rem2_25};
  height: ${({ theme }) => theme.sizes.rem.rem1_25};

  background: transparent;
  border: ${({ theme }) => theme.borders.borderToggler};
  border-radius: 100px;

  &:after {
    content: "";

    position: absolute;
    top: ${({ theme }) => theme.sizes.px.px1};
    left: ${({ theme }) => theme.sizes.px.px1};
    width: ${({ theme }) => theme.sizes.px.px14};
    height: ${({ theme }) => theme.sizes.px.px14};

    background: transparent;
    border-radius: ${({ theme }) => theme.sizes.percents.p50};
    border: ${({ theme }) => theme.borders.borderToggler};

    transition: 0.3s;
  }

  @media (min-width: ${({ theme }) => theme.sizes.screenSize.tablet}) {
    width: ${({ theme }) => theme.sizes.rem.rem3_25};
    height: ${({ theme }) => theme.sizes.rem.rem2};

    &:after {
      width: ${({ theme }) => theme.sizes.px.px26};
      height: ${({ theme }) => theme.sizes.px.px26};
    }
  }
`;
