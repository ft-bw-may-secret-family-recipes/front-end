import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: #A1978F;
    width: 50%;
    margin: auto;
`;
function Recipe() {
    return(
        <Div>
            <h3>Title: test</h3>
            <h4>Source: test</h4>
            <p>Ingrediants: test</p>
            <p>Insctructions: test</p>
            <h4>Catagory: test</h4>
        </Div>
    )
}

export default Recipe