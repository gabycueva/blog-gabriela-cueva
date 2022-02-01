import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: #000;
  & > svg {
    margin-right: 8px;
    fill: #000;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto-Regular';
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;

export const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Title = styled.div`
  color: #272A2D;
  font-size: 28px;
  font-family: 'Roboto-Bold';
  border-bottom: 2px solid #38147a;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  & .title {
    margin: 8px 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 20ch;
  }
  
  & .icon {
    &:hover {
      cursor: pointer;
    }
  }
`;
export const Author = styled.div`
  color: #6A6F7C;
  font-size: 20px;
`;
export const Date = styled.div`
  color: #6A6F7C;
  font-size: 20px;
`;
export const Content = styled.div`
  color: #272A2D;
  font-size: 16px;
  padding: 0 16px;
  text-align: left;
`;

export const Divider = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`;