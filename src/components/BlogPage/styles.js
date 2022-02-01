import styled from 'styled-components';
export const Div = styled.div`
  & > h1{
    text-align: left;
  }
  & .searcher {
    text-align: left;
    display: flex;
    align-items: center;
    & input {
      width: 100%;
      height: 20px;
      border: none;
      padding: 8px 16px;
      margin-right: 16px;
    }
    & > svg {
      fill: black;
      opacity: 0.5;
      margin-left: -35px;
      width: 18px;
      height: 18px;
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  & > div:first-child {
    margin-right: 20px;
  }
`;

export const CardsContainer = styled.div`
  height: 681px;
  overflow-y: auto;
  & > div {
    margin-bottom: 10px;
  }
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
  padding: 16px;
  background-color: #fff;
  
  & .css-1480iag-MuiInputBase-root-MuiInput-root:after {
    border-bottom: 2px solid #38147a;
  }
  
  & > div {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
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

export const BlogTitle = styled.h1`
  color: #000;
  font-family: CreatoDisplay-Regular;
`;

export const SearcherContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  position: relative;

  & > svg {
    position: absolute;
    margin-left: 19px;
    margin-top: 2px;
    fill: #6a6f7c;
  }

  & .MuiFilledInput-multiline {
    padding: 16px 12px 16px 70px;
    height: 40px;

    &:hover {
      border-color: #525969;
    }
  }

  & .MuiFormControl-marginNormal {
    margin-top: 0;
    margin-bottom: 0;
  }
`;