import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
  font-family: 'Source Sans Pro';
  /* background-color: green; */

}
#root{
  height: 100%;
}


body::afteaar {
  content: ' ';
  pointer-events: none;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-image: url('../mock/search_page.png'); */
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
  opacity: 0.5;


  @keyframes mockanim { 
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
  animation: mockanim 1s steps(3) alternate infinite;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}

path {
  /* stroke: #ff0000 !important; */

}


.animated_dark_05s {
    @keyframes taadaa {

      100% {
        background-color: rgba(0, 0, 0, 0.9);
      }
    }
    animation: taadaa 0.25s alternate 2 ease-in-out;
  }

`;
