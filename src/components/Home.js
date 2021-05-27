import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledPage from "./StyledComponents";

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
