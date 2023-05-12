import styled from 'styled-components';

export const RadioWrapper = styled.div`
  ul {
    display: flex;
  }
  li {
    display: flex;
    flex-basis: 20%;
  }
  li:not(:first-child) {
    margin-left: 1%;
  }

  [type="radio"] {
    vertical-align: middle;
    appearance: none;
  }

  [type="radio"]:checked + label{
    background-color: #333;
    border: 2px solid #333;
    color: #fff;
  }
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin: 5px 0;
  border: 2px solid #d9d9d9;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
`