import React from "react";
import {Link, useNavigate} from "react-router-dom";

const ListRecipes=({recipes})=>{
    const navigate = useNavigate();
    const truncateText = (text) => {
        if (text?.length > 20) {
            return text.substring(0, 20) + '...';
        }
        return text;
    };
    const handleRecipeClick = (id) => {
        navigate(`/recipe/${id}`);
    };

    return (
            <>{recipes.length > 0 && (
                <div className="mt-4 flex flex-wrap bg-third-surface bg-opacity-5 shadow-md border-2 rounded-2xl p-4 m-2 border-primary">
                    <h3 className="text-xl font-semibold">Similar Recipes</h3>
                    <ul className="list-disc list-inside w-full p-4 rounded bg-third-surface bg-opacity-5 shadow-md rounded-2xl">
                        {recipes.map(recipe => (
                            <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                                <Link className="text-blue-500 hover:underline">
                                    {recipe.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}</>
    )
}

export default ListRecipes;