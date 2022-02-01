import styled from 'styled-components';

export const Div = styled.div`
  color: #38147a;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto-Regular';
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  padding-bottom: 16px;
  & > button {
    width: 200px;
    margin: 0 16px;
  }
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
  border-bottom: 2px solid  #272A2D;
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 70ch;
  padding: 0 16px;
`;

export const Divider = styled.div`
  width: 100%;
  height: ${props => props.height}px;
`;

export const Button = styled.button`
  width: 200px;
  height: 41px;
  background-color: ${props => props.disabled? '#878787' : '#38147a'};
  border-color: transparent;
  color: #fff;
  font-size: 16px;
  transition: background 0.25s;
  box-shadow: none;
  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;