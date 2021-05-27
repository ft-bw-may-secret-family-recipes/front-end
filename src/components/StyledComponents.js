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
    align-items: center;
    font-size: 4rem;
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

    border-radius: 8px;
    color: black;
    /* -webkit-text-stroke-width: 0.2px;
    -webkit-text-stroke-color: white; */
    text-shadow: 0.5px 0.5px black;
    font-size: 1.7rem;
    margin: 4px;
    font-weight: bold;
  }
  #logInForm {
    background-image: url
      (
        "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
      );
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover; */
    height: 700px;
    width: 100%;
  }

  #signUpForm {
    background-image: url("https://cdn-cajkg.nitrocdn.com/ZJzLelPaQQUYcIzKvveTxTAioLgFVwpU/assets/static/optimized/rev-cd29551/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-768x1024.jpg.webp");
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: cover; */
    height: 700px;
    width: 100%;
  }
`;

export default StyledPage;
