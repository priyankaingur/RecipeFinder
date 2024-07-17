import React from "react";
import {useNavigate} from "react-router-dom";

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
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center max-h-screen overflow-y-auto">
            {recipes.length > 0 && recipes.map(recipe => (
                <li
                    key={recipe.id}
                    className="bg-third-surface bg-opacity-5 shadow-md border-2 rounded-2xl p-4 m-2 border-primary  cursor-pointer flex flex-col justify-between"
                    style={{minWidth: '200px', maxWidth: '250px'}}
                    onClick={() => handleRecipeClick(recipe.id)}
                >
                    <div className="flex justify-center">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="h-40 w-40 object-cover rounded-lg"
                        />
                    </div>
                    <h3 className="text-sm font-bold text-center mt-2 mb-4">{recipe.title}</h3>
                    <p className="text-xs">{truncateText(recipe?.summary)}</p>
                </li>
            ))}
        </ul>
    )
}

export default ListRecipes;