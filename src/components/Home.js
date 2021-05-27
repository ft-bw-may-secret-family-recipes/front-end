import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledPage from "./StyledComponents";

// const StyledPage = styled.div`
//   background-image: url("https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80");
//   background-repeat: no-repeat;
//   background-position: center;
//   /* background-size: cover; */
//   height: 700px;
//   width: 100%;

//   h1 {
//     color: white;
//     text-shadow: 2px 2px black;
//     -webkit-text-stroke-width: 1px;
//     -webkit-text-stroke-color: black;
//   }

//   a {
//     text-decoration: none;
//     color: white;
//     text-shadow: 1px 1px black;
//     -webkit-text-stroke-width: 1px;
//     -webkit-text-stroke-color: black;
//     font-size: 2rem;
//     /* border: 1px ridge black;
//     margin: 5px 5px; */
//   }
// `;

const Home = () => {
  return (
    <StyledPage>
      <div id="HomePage">
        <h1>Mamma Mia's Recipes</h1>
        <Link to="/login">Click here see your recipes</Link>
        <br></br>
        <Link to="/signup">Click here to sign up</Link>
      </div>
    </StyledPage>
  );
};

export default Home;
