import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../auth/axiosWithAuth";


const newRecipe = {
	recipe_name: "",
    recipe_source: "",
	category: "",
	recipe_steps: [
        {
          step_description: "",
          step_ingredients: [
            {
              quantity: 0,
              ingredient: {
                ingredient_name: "",
                ingredient_unit: "",
              },
            },
          ],
        },
      ],
    };


const EditRecipe = () => {
	const [recipe, setRecipe] = useState(newRecipe);

	let { push } = useHistory();

	let { id } = useParams();

	useEffect(() => {
		axiosWithAuth()
			.get(`/recipe/${id}`)
			.then((res) => setRecipe(res.data))
			.catch((err) => console.log(err));
	}, [id]);

	const handleChange = (e) => {
		setRecipe({ ...recipe, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/recipe/${id}`, recipe)
			.then(() => push("/recipe"))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="Recipe Name:"
					placeholder="Insert Name Here"
					value={recipe.recipe_name}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Recipe Source:"
					placeholder="Insert Source Here"
					value={recipe.recipe_source}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Category:"
					placeholder="Insert Category Here"
					value={recipe.category}
					onChange={handleChange}
				/>
				<button>Confirm Edit</button>
			</form>
		</div>
	);
};
export default EditRecipe;