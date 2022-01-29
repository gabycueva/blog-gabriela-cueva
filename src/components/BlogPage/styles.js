import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const CardsContainer = styled.div`
  & > div {
    margin-bottom: 40px;
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div {
    margin-bottom: 10px;
  }
`;