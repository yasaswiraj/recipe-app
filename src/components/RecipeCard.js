import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[25px] p-8 shadow-md hover:shadow-lg transition-shadow duration-200 m-4 h-3/4 w-full md:w-1/2 lg:w-1/3">
      <h2 className="text-[#229799] text-xl font-semibold mb-3">
        {recipe.title}
      </h2>
      <p className="text-[#424242] mb-4">{recipe.description}</p>
      <Link
        className="bg-[#48CFCB] hover:bg-[#48CFCB] text-white font-semibold py-2 px-6 rounded"
        href={`/recipes/${recipe.id}`}
      >
        View Recipe
      </Link>
    </div>
  );
}
