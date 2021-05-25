import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 45%;
    margin: auto;
`;

function NewRecipe() {

    const onChange = (event) => {
        const { title, source, ingrediants, instructions, catagory } = event.target;
        change(title, source, ingrediants, instructions, catagory);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        submit();
    };

    return(
      <Form>
        <form>
            <lable>
                Title:
                <input type='text' 
                    placeholder='Enter Title here'
                    id='title'
                    onChange={onChange}/>
            </lable>
            <lable>
                Source:
                <input type='text'
                    placeholder='Source of the Recipe'
                    onChange={onChange}
                    id='source'/>
            </lable>
            <lable>
                Ingrediants: 
                <input type='text' 
                    placeholder='List of Ingrediants'
                    id='ingrediants'
                    onChange={onChange}/>
            </lable>
            <lable>
                Instructions:
                <input type='text' 
                    placeholder='How to Make'
                    onChange={onChange} 
                    id='instructions'/>
            </lable>
            <lable>
                Catagory:
                <select id='catagory'
                        onChange={onChange}>
                    <option>Pick a catagory</option>
                    <option>Dessert</option>
                    <option>Chicken</option>
                    <option>Side Dish</option>
                    <option>Beef</option>
                    <option>Pork</option>
                    <option>Soup</option>
                </select>
            </lable>
        </form>
        <submit>
            <button onSubmit={onSubmit}>Add Recipe</button>
        </submit>
      </Form>
    )
}

export default NewRecipe