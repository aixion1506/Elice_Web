import styled from "styled-components"; 

export const MainWrapper = styled.div`
  /* padding-left: 350px; */
  position: relative;
  top: 0;
  left: 350px;
  width: calc(100% - 350px);

  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
