import React, { useEffect } from "react";
import styled from "styled-components";
import Input from "./pages/Input";

const Root = styled.div`
  padding: 5px 5px;
`;

function App() {
  fetch("http://localhost:5000/")
    .then((res) => res.json())
    .then((data) => console.log(data));

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Root>
      <Input></Input>
    </Root>
  );
}

export default App;
