import styled from "styled-components";

export const Logo = styled.img`
  width: 40px;

  @media (max-width: 768px) {
    width: 24px;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.bgColorPrimary};
  height: 5rem;
  padding: 0 3rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const Nav = styled.nav`
  justify-self: center;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 4rem;
  align-items: center;
  list-style: none;

  & a {
    color: ${(props) => props.theme.textColorPrimary};
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    font-size: 0.75rem;
  }
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
  width: 52px;
  height: 32px;
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
    width: 26px;
    height: 26px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 1rem;

    &:after {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
`;
