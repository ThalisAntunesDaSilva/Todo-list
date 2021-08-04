import { createGlobalStyle } from "styled-components";


export default createGlobalStyle `

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }

  html, border-style, #root {
      max-height: 100vh;
      max-width: 100vw;

      width: 100%;
      height: 100%;
  }


  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, sans-serif;

  }

  html { 
    background: var(--primary);
    color: black;
  
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --primary-color: #FF8F6D;
    --secondary-color:#6DDDFF; 
    --primary-light: #FFE0D7;
    --secondary-light: #CAF3FF;
    --header: #F7F9FA;
    --error: #FF6D6D;
    --grey-text: #FF6D6D;
  }



`;