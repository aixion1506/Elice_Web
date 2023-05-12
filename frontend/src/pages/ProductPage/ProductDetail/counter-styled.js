import styled, {css} from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  span {
    display: block;
    flex-basis: 35px;
    padding: 10px 0;
    text-align: center;
    border: 2px solid #d9d9d9;
    border-left: none;
    border-right: none;
  }
`
export const Button = styled.button`
  flex-basis: 35px;
  background-color: #fff;
  border: 2px solid #d9d9d9;
  color: #555;
  cursor: pointer;

  ${
    (props) => props.disabled &&
    css`
      color: #d9d9d9;
    `
  }
`