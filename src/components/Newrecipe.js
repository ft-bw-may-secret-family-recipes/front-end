import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function NewRecipe() {
    return(
      <Form>
        <form>
            <lable>
                Title:
                <input type='text' placeholder='Enter Title here'></input>
            </lable>
            <lable>
                Source:
                <input type='text' placeholder='Source of the Recipe'></input>
            </lable>
            <lable>
                Ingrediants: 
                <input type='text' placeholder='List of Ingrediants'></input>
            </lable>
            <lable>
                Instructions:
                <input type='text' placeholder='How to Make'></input>
            </lable>
            <lable>
                Catagory:
                <select>
                    <option>Pick a catagory</option>
                    <option>Dessert</option>
                    <option>Chicken</option>
                    <option>Side Dish</option>
                    <option>Beef</option>
                    <option>Pork</option>
                </select>
            </lable>
        </form>
        <submit>
            <button>Add Recipe</button>
        </submit>
      </Form>
    )
}

export default NewRecipe