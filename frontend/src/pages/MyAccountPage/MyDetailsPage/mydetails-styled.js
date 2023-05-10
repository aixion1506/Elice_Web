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

export const DetailFormWrapper = styled.div`
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
