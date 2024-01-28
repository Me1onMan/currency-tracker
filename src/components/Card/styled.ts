import styled from "styled-components";

export const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  gap: 1rem;

  background-color: ${(props) => props.theme.bgColorSecondary};
  border: 1px solid #474747;
  border-radius: 8px;

  @media (min-width: 1024px) {
    padding: 1rem;
    gap: 2rem;
  }
`;

export const Icon = styled.img`
  width: 48px;

  @media (min-width: 1024px) {
    width: 64px;
  }
`;

export const TextContainer = styled.div``;

export const Title = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.textColorCardPrimary};

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Value = styled.div`
  font-weight: 300;
  color: ${(props) => props.theme.textColorCardSecondary};

  @media (min-width: 1024px) {
    margin-top: 0.25rem;
    font-size: 1.25rem;
  }
`;
