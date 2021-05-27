import styled from "styled-components";
import logInImg from "./PastaLogIn.jpg";
import signUpImg from "./Cake-signup.jpg";

const StyledPage = styled.div`
  #HomePage {
    background-image: url("https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80");
    min-height: 100%;
    min-width: 1024;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    position: fixed;

    background-repeat: no-repeat;
    background-position: center;
    /* background-size: contain; */
    /* object-fit: contain; */
  }

  h1 {
    color: white;
    text-shadow: 2px 2px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    align-items: center;
    font-size: 4rem;
  }

  a {
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: 2.5rem;
    /* border: 1px ridge black;
        margin: 5px 5px; */
  }
  label {
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px black;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    font-size: 2.5rem;
    font-weight: bold;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
  .spacingDiv {
    width: 30%;
  }

  button {
    background-color: transparent;
    opacity: 0.8;

    border-radius: 8px;
    color: black;
    -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: white;
    text-shadow: 0.5px 0.5px white;
    font-size: 2.5rem;
    margin: 4px;
    font-weight: bold;
  }
  #logInForm {
    background-image: url(${logInImg});
    min-height: 100%;
    min-width: 1024;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    position: fixed;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  #logInForm button {
    color: white;
    text-shadow: 1px 1px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: 2.3rem;
  }

  #signUpForm {
    background-image: url(${signUpImg});
    min-height: 100%;
    min-width: 1024;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
    position: fixed;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export default StyledPage;
