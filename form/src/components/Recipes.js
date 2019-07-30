import React, {useState, useEffect} from 'react'
import { axiosWithAuth } from './axiosWithAuth';

const RecipeList = () => {
    const [recipes , setRecipes] = useState([])

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/restricted/data')
        .then(res => setRecipes(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="RecipesList">
        <h1>Recipes</h1>
        {recipes.map(recipe => {
            return (
            <div className="Recipe">
            <h3>
            {recipe.name}
            </h3>
            </div>
            )
        })}
        </div>
    )
}
export default RecipeList