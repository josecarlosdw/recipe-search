import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, dietLabels, image, ingredients}) => {
	return (
		<div className={style.recipe}>
			<h2> {title}</h2>
			<img className={style.image} src={image} alt="" />

			<ol>
			<h2>Ingredientes:</h2>
				{ingredients.map(ingredient =>(

				<li>{ingredient.text}</li>

				))} 
			</ol>
			<div><h2>Tipo Dieta:</h2> {dietLabels}</div>

			
		</div>	
	);
};

export default Recipe;