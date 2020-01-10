import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image, ingredients}) => {
    return (
        <div className={style.recipe} >
            <h1 >{title}</h1>
            <img className={style.image} src={image} alt="" />
            <p>{calories.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} Calories </p>
            
            <ul>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}</ul>
            
        </div>
    );
}

export default Recipe;