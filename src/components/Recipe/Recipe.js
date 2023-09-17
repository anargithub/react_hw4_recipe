import React from "react";
import "./Recipe.css"

export default function Recipe ({title, calories, image, ingredients, key}) {
    return (
        <div className="recipe">
            <h3>{title}</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li key={key}>{ingredient.text}</li>
                ))}
            </ol>
            <p> Calories: {calories.toFixed()}</p>
            <img className="image" src={image} alt=''/>
        </div>
    )
}