import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0.5rem;

  background-color: ${(props) => props.theme.bgColorPrimary};

  @media (min-width: 420px) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  width: 16px;

  @media (min-width: 420px) {
    width: 24px;
  }

  @media (min-width: 768px) {
    width: 40px;
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
  font-size: 0.75rem;

  & a {
    color: ${(props) => props.theme.textColorPrimary};
  }

  @media (min-width: 420px) {
    gap: 0.5rem;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    gap: 3rem;
    font-size: 1.5rem;
  }
`;

export const NavItem = styled.li`
  padding: 0.5rem 0.25rem;
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  display: none;

  &:checked + label {
    border: ${(props) => props.theme.borderToggler};
  }

  &:checked + label:after {
    left: 94%;
    transform: translateX(-100%);
    border-color: #030304;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 36px;
  height: 20px;
  background: transparent;
  border: 1px solid #fff;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 14px;
    height: 14px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  @media (min-width: 768px) {
    width: 52px;
    height: 32px;

    &:after {
      width: 26px;
      height: 26px;
    }
  }
`;
