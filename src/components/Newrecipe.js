import React from 'react';

function NewRecipe() {
    return(
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
                <input type='text' placeholder='What are the steps to make it'></input>
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
    )
}

export default NewRecipe