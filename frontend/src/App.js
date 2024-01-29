import React, { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { ROUTE_ARR } from "./routes/route";
import { useUserDispatch } from "./context/UserContext";
import LoadingScrean from "./components/LoadingScrean";
import {auth} from "./firebase";


function App() {
  const [count, setCount] = useState(1);
  const dispatch = useUserDispatch();

  const [isLoading, setIsLoading] = useState(true)
  const init = async ()=>{
    // firebase가 로그인 여부나 유저가 누구인지 확인할 떄까지 기다리는 부분
    // 최초 인증 상태가 완료 될 때 실행
    // firebase가 쿠키와 토큰을 읽고 백엔드와 소통해 로그인 여부를 확인하는 동안 기다림
    await auth.authStateReady()
    // firebase가 로딩이 완료되면
    setIsLoading(false)
  }

    
  useEffect(() => {
    init();
    if (localStorage.getItem("token")) {
      dispatch({
        type: "LOGIN",
      });
    } else {
      dispatch({
        type: "LOGOUT",
      });
    }
  }, []);

  return (
    <>
      <Reset />
      <Nav />
      <Header />
      {
        isLoading ? <LoadingScrean /> : 
        <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={<route.element count={count} setCount={setCount} />}
              key={index}
            />
          );
        })}
      </Routes>
      }
      
    </>
  );
}

export default App;
