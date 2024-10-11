// app/recipes/[id]/page.js

"use client"; // Ensure this is a Client Component

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const RecipeDetail = () => {
  const { id } = useParams();
  const router = useRouter();

  const [recipe, setRecipe] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchedRecipe = {
        id: id,
        title: `Delicious Recipe ${id}`,
        description: `A step-by-step guide to make Recipe ${id}. Follow the instructions to create this dish.`,
        ingredients: [
          "2 cups flour",
          "1/2 cup sugar",
          "3 eggs",
          "1/4 cup butter",
          "Pinch of salt",
        ],
      };
      setRecipe(fetchedRecipe);
    }
  }, [id]);

  useEffect(() => {
    if (recipe) {
      setCheckedIngredients(new Array(recipe.ingredients.length).fill(false));
    }
  }, [recipe]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedIngredients = [...checkedIngredients];
    updatedCheckedIngredients[index] = !updatedCheckedIngredients[index];
    setCheckedIngredients(updatedCheckedIngredients);
  };

  if (!recipe) {
    return (
      <div className="text-center text-gray-500 mt-10 text-[#48CFCB]">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-[#229799] mb-4">{recipe.title}</h1>
      <p className="text-lg text-[#424242] mb-6">{recipe.description}</p>

      <h2 className="text-2xl font-semibold text-[#424242] mb-4">
        Ingredients
      </h2>
      <ul className="mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center mb-3">
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              checked={checkedIngredients[index]}
              onChange={() => handleCheckboxChange(index)}
              className="form-checkbox h-5 w-5 text-[#48CFCB] rounded focus:ring-[#48CFCB]"
            />
            <label
              htmlFor={`ingredient-${index}`}
              className="ml-3 text-lg text-[#424242]"
            >
              {ingredient}
            </label>
          </li>
        ))}
      </ul>

      <button className="bg-gradient-to-r from-[#48CFCB] to-[#229799] text-white font-semibold py-2 px-6 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        Read Recipe in Detail
      </button>

      <br />
      <button
        onClick={() => router.back()}
        className="mt-6 text-gray-500 hover:text-gray-700"
      >
        ← Back to Recipes
      </button>
    </div>
  );
};

export default RecipeDetail;
