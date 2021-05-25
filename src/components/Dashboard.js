import React, {useState, useEffect} from "react";
import * as yup from 'yup'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import DashboardSearchForm from './DashboardSearch'
import { axiosWithAuth } from "../auth/axiosWithAuth";

const initialFormValues = {

    title: '',
    category: '',
    source: '',
    ingredients: '',
    instructions: '',
    search: '',
  }




function Dashboard({ user }) {

  const [formValues, setFormValues] = useState(initialFormValues)
  const [recipes, setRecipes] = useState([]);
  const { push } = useHistory()



  const recipiies = [
  {    
    title: 'Chocolate Cake',
    category: 'cake, dessert,chocolate',
    source: 'online',
    ingredients: 'chocolate, flour, eggs, sugar, milk',
    instructions: 'mix flour, eggs, sugar, and milk, melt chocolate and mix in, then bake.',
    user_id: 1
  },
  {
    title: 'Pepperoni Pizza',
    category: 'dinner, lunch',
    source: 'me',
    ingredients: 'dough, sauce, cheese, pepperoni',
    instructions: 'spread dough, add sauce, cheese and pepperoni, bake',
    user_id: 2
  },
]

  const formSubmit = () => {
    const searchSubmit = {
      title: formValues.title.trim()
    }

      axios.post('', searchSubmit)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const inputChange = (name, value) => {
    console.log(formValues)
    // yup.reach(name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({...formErrors, [name]: ''})
    //   })
    //   .catch(err => {
    //     setFormErrors({...formErrors, [name]: err.errors[0]})
    //   })
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`/user/${user.user_id}`)
  //     .then((res) => {
  //       setRecipes(res.data);
  //     })
  //     .catch((err) => {
  //       console.log({ err });
  //     });
  // }, [user]);

  // console.log(user.user_id);


  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>

      <DashboardSearchForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}

      />
      <button onClick={() => push("/new")}>Add New</button>

      {recipiies.map(recipe => (
        <div 
          className='recipe-card-container'
          key={recipe.id}>

      <h2>{recipe.title}</h2>
      <p>{recipe.category}</p>
      <p>{recipe.source}</p>


      <Link to="/">Edit Recipe</Link>
      <Link to="/">Delete Recipe</Link>
      <Link to="/">Display Recipe</Link>

      </div>
      ))}
    </div>
  )
}

export default Dashboard
	