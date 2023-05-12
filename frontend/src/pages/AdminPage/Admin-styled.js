import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminWrapper = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px;

  > div {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: left;
    justify-content: left;
  }
`;

export const AdminNav = styled.div`
  padding: 60px 120px;
  width: 1000px;
  text-align: left;
  height: 100%;
  margin-left: 100px;
  text-decoration: none;
  font-size: 40px;
`;
