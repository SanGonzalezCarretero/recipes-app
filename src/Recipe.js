import React, { useState } from "react";
import style from "./recipe.module.css";
import toast, { Toaster } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

const notify = () => toast("Receta copiada!");

const Recipe = ({ title, calories, image, ingredients }) => {
  const [copied, setCopied] = useState("");

  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>

      <img className={style.image} src={image} alt="" />

      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>

      <p>
        <b>Total Calories: </b>
        {calories}
      </p>

      {copied && <Toaster />}
    </div>
  );
};

export default Recipe;
