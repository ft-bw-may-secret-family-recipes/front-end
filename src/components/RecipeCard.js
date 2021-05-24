import React from 'react';

function Recipe() {
    return(
        <div>
            <h3>Title: {title}</h3>
            <h4>Source: {source}</h4>
            <p>Ingrediants: {ingrediants}</p>
            <p>Insctructions: {instructions}</p>
            <h4>Catagory: {catagory}</h4>
        </div>
    )
}

export default Recipe