import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 20rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.bgColorSecondary};
  border: 1px solid #474747;
  border-radius: 8px;
`;

export const Icon = styled.img`
  width: 60px;
`;

export const TextContainer = styled.div`
  margin-left: 2rem;
`;

export const Title = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.textColorCardPrimary};
`;

export const Value = styled.div`
  font-weight: 300;
  color: ${(props) => props.theme.textColorCardSecondary};
`;
