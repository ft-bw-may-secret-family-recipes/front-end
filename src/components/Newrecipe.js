import React from 'react';

function NewRecipe() {
    return(
        <form>
            <lable>
                Title:
                <input type='text'></input>
            </lable>
            <lable>
                Source:
                <input type='text'></input>
            </lable>
            <lable>
                Ingrediants: 
                <input type='text'></input>
            </lable>
            <lable>
                Instructions:
                <input type='text'></input>
            </lable>
            <lable>
                Catagory:
                <select>
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