import styled from "styled-components";

const StyledPage = styled.div`
  #HomePage {
    background-image: url("https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80");
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover; */
    height: 700px;
    width: 100%;
  }

  h1 {
    color: white;
    text-shadow: 2px 2px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  a {
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px black;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size: 2rem;
    /* border: 1px ridge black;
        margin: 5px 5px; */
  }
  form {
    display: flex;
    justify-content: space-around;
  }
  #logInForm {
    background-image: url
      (
        "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
      );
  }

  #signUpForm {
    background-image: url("https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80");
  }
`;

export default StyledPage;
