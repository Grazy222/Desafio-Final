import Main from "./main/index";
import { createGlobalStyle } from "styled-components";
import Carousel from "./carousel/carousel";
import Header from "./header/header.js";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Carousel />
    </>
  );
}
