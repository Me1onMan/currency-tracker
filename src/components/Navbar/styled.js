import styled from "styled-components";

export const Logo = styled.img`
  width: 40px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #030304;
  height: 100px;
  padding: 30px 100px;
`;

export const Nav = styled.nav`
  width: 660px;
  font-size: 20px;
  font-weight: 200;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: #fff;
  }

  &:checked + label:after {
    left: 100%;
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
`;
