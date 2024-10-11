import RecipeCard from "../components/RecipeCard";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich meat sauce.",
  },
  {
    id: 2,
    title: "Chicken Curry",
    description: "A flavorful dish with tender chicken in a spicy sauce.",
  },
  // Add more recipes here
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8 text-[#2E2E2E]">
        Recipes
      </h1>
      <div className="flex flex-wrap -m-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
