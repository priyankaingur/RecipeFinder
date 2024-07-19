import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from "../services/Recipe";
import Nutrients from "./Nutrients";
import ListRecipes from "./ListRecipes";
import ListSimilarRecipes from "./ListSimilarRecipes";

function RecipeDetails() {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [nutritionalInfo, setNutritionalInfo] = useState(null);
    const [similarRecipes, setSimilarRecipes] = useState([]);
    const [unitSystem, setUnitSystem] = useState('us'); // State variable for unit system
    const [isExpanded, setIsExpanded] = useState(false); // State variable for expanded view

    useEffect(() => {
        Recipe.getRecipeById(id)
            .then(response => {
                setRecipeDetails(response);
                Recipe.logView({...response,id:id})
                    .then(() => console.log("Logged recipe view"))
                    .catch(error => console.error('There was an error fetching the recipes!', error));
            })
            .catch(error => console.error('There was an error fetching the recipe details!', error));

        Recipe.getNutritionById(id)
            .then(response => setNutritionalInfo(response))
            .catch(error => console.error('There was an error fetching the nutritional information!', error));
        Recipe.getSimilarById(id)
            .then(response => setSimilarRecipes(response))
            .catch(error => console.error('There was an error fetching the nutritional information!', error));

        }, [id]);

    if (!recipeDetails || !nutritionalInfo) {
        return <div className="spin-in">Loading...</div>;
    }

    const handleToggleUnits = () => {
        setUnitSystem(prevUnitSystem => (prevUnitSystem === 'us' ? 'metric' : 'us'));
    };

    const handleToggleExpand = () => {
        setIsExpanded(prevIsExpanded => !prevIsExpanded);
    };

    return (
        <div className="mx-4">
            <div className="flex flex-row bg-third-surface bg-opacity-5 shadow-md border-2 rounded-2xl p-4 m-2 border-primary">
                <div className="flex flex-col w-1/5">
                    <h2 className="text-2xl font-bold mb-4">{recipeDetails.title}</h2>
                    <div className="flex justify-items-start">
                        <img
                            src={recipeDetails.image}
                            alt={recipeDetails.title}
                            className="h-40 w-40 object-cover border border-primary shadow-md rounded-2xl p-2"
                        />
                    </div>
                </div>
                <div className="flex flex-col mt-4 p-4 w-full bg-third-surface bg-opacity-5 shadow-md rounded-2xl">
                    <h3 className="text-xl font-semibold">Summary</h3>
                    <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
                </div>
            </div>

            <div className="mt-4 flex flex-wrap bg-third-surface bg-opacity-5 shadow-md border-2 rounded-2xl p-4 m-2 border-primary">
                <div className="w-full p-4 rounded bg-third-surface bg-opacity-5 shadow-md rounded-2xl ">
                    <h3 className="text-xl font-semibold">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        {recipeDetails.extendedIngredients && recipeDetails.extendedIngredients.map(ingredient => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-4 flex flex-wrap bg-third-surface bg-opacity-5 shadow-md border-2 rounded-2xl p-4 m-2 border-primary">
                <h3 className="text-xl font-semibold">Instructions</h3>
                {recipeDetails.analyzedInstructions && recipeDetails.analyzedInstructions.length > 0 && (
                    <ol className="list-decimal list-inside">
                        {recipeDetails.analyzedInstructions[0].steps.map(step => (
                            <li key={step.number}>{step.step}</li>
                        ))}
                    </ol>
                )}
            </div>

            <Nutrients data={nutritionalInfo} />
            <ListSimilarRecipes recipes={similarRecipes} />
        </div>
    );
}

export default RecipeDetails;
