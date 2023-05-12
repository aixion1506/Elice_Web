import styled from "styled-components";

export const MyDetailsWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  padding-top: 40px;
  width: 300px;
  h1 {
    margin-bottom: 40px;
    margin-right: 80px;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
`;

export const DetailFormWrapper = styled.form`
  flex-grow: 1;
  width: 600px;
  margin-right: 40px;
`;

export const GotoSignout = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 80px;

  a {
    transition: all 0.3s;
  }

  &:hover a {
    opacity: 0.5;
  }
`;

export const CancelButton = styled.div`
  background-color: #fff;
  width: 100%;
  height: 48px;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  a {
    text-decoration: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;
