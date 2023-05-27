import React from "react";
import Styled from "styled-components";
import Logo from "../images/logo.png";
import Lupa from "../images/lupa.png";

export const HeaderStyle = Styled.header`
  position: fixed;
  background-color: rgba(108, 122, 137 / 1);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;


  #divLogo{
    width: 37%;
   }

  .ImgLogo{
    width: 17vh;
    height: 8vh;
    margin-left: 4vh;
    
    }

  nav {
    display: flex;
    width: 58%;
    
  }
  
 

  a {
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
  }
  #container{
   display: flex;
    width: 25%;
    
    
  }
  .containerUl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row ;
    list-style: none;
  }
  li.series{
   
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;
   
  }
  button{
    width: 70px;
    height: 50px;
    border-radius: 30%;
    color: #ffff;
    background: #00000029;
    border: none;
    font-size: 1em;
  }
  #ImgLupa{
   
    
}
  
  .filtros{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row ;
    list-style: none;
    
    
    font-size: 1.1em;
    margin-left: 15em;

  }
  li.login{
    
    display: inline;
    padding: 20px;
    text-align: center;
    color: #fff;
    
    }
    .lupa{
      position: relative;
      top:1em;
      
      
    }

`;

export default function Header() {
  return (
    <HeaderStyle>
      <div id="divLogo">
        <img class="ImgLogo" src={Logo} alt="foto logo" />
      </div>
      <nav>
        <div id="container">
          <ul class="containerUl">
            <li class="series">
              <a href="#filmes">Series</a>
            </li>
            <li class="series">
              <button>Filmes</button>{" "}
            </li>
          </ul>
        </div>

        <div id="ImgLupa">
          <img class="lupa" src={Lupa} alt="Imagem lupa" />
          <ul class="filtros">
            <li class="login">Filtros</li>
            <li class="login">Login</li>
          </ul>
        </div>
      </nav>
    </HeaderStyle>
  );
}
