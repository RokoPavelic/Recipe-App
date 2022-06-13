import react from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe }) => {
  const {
    label,
    cuisineType,
    dietLabels,
    mealType,
    ingredients,
    calories,
    image,
  } = recipe;
  console.log(recipe);
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <p>Cuisine Type: {cuisineType}</p>
      <p>Diet Labels: {dietLabels}</p>
      <p>Meal Type: {mealType}</p>

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <strong>Calories</strong> {calories}
      </p>
      <img className={style.recipe} src={image} alt="" />
    </div>
  );
};

export default Recipe;
