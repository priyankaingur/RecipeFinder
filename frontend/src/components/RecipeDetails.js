import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function RecipeDetails() {
    const {id} = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);
    const [nutritionalInfo, setNutritionalInfo] = useState(null);
    const [similarRecipes, setSimilarRecipes] = useState([]);
    const [unitSystem, setUnitSystem] = useState('us'); // State variable for unit system
    const [isExpanded, setIsExpanded] = useState(false); // State variable for expanded view

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/rapidapi/recipes/${id}`)
    //         .then(response => setRecipeDetails(response.data))
    //         .catch(error => console.error('There was an error fetching the recipe details!', error));
    //
    //     axios.get(`http://localhost:8000/api/rapidapi/recipes/${id}/nutrition`)
    //         .then(response => setNutritionalInfo(response.data))
    //         .catch(error => console.error('There was an error fetching the nutritional information!', error));
    //
    //     // Placeholder for fetching similar recipes if the endpoint is available
    //     axios.get(`http://localhost:8000/api/rapidapi/recipes/${id}/similar`)
    //         .then(response => setSimilarRecipes(response.data))
    //         .catch(error => console.error('There was an error fetching similar recipes!', error));
    // }, [id]);
    useEffect(() => {
        setRecipeDetails({
            "title": "Rice Pudding",
            "image": "https://img.spoonacular.com/recipes/263804-556x370.jpg",
            "summary": "Rice Pudding takes around 45 minutes to make...",
            "extendedIngredients": [
                {"id": 2010, "original": "a dash of cinnamon"},
                {"id": 20027, "original": "2 tbsp cornstarch"},
                {"id": 1077, "original": "2 cups plant-based milk"}
            ],
            "analyzedInstructions": [
                {
                    "steps": [{
                        "number": 1,
                        "step": "Combine rice with milk..."
                    }, {"number": 2, "step": "Add sweetener and cook..."}]
                }
            ]
        });

        setNutritionalInfo({
            "ingredients": [
                {
                    "name": "blueberries",
                    "amount": {
                        "metric": {"unit": "g", "value": 222},
                        "us": {"unit": "cups", "value": 1.5}
                    },
                    "image": "blueberries.jpg"
                },
                {
                    "name": "egg white",
                    "amount": {
                        "metric": {"unit": "", "value": 1},
                        "us": {"unit": "", "value": 1}
                    },
                    "image": "egg-white.jpg"
                },
                {
                    "name": "flour",
                    "amount": {
                        "metric": {"unit": "Tbsps", "value": 2},
                        "us": {"unit": "Tbsps", "value": 2}
                    },
                    "image": "flour.png"
                },
                {
                    "name": "granulated sugar",
                    "amount": {
                        "metric": {"unit": "g", "value": 150},
                        "us": {"unit": "cup", "value": 0.75}
                    },
                    "image": "sugar-in-bowl.png"
                },
                {
                    "name": "fresh lemon juice",
                    "amount": {
                        "metric": {"unit": "tsp", "value": 1},
                        "us": {"unit": "tsp", "value": 1}
                    },
                    "image": "lemon-juice.jpg"
                },
                {
                    "name": "nutmeg",
                    "amount": {
                        "metric": {"unit": "pinch", "value": 1},
                        "us": {"unit": "pinch", "value": 1}
                    },
                    "image": "ground-nutmeg.jpg"
                },
                {
                    "name": "pie dough round",
                    "amount": {
                        "metric": {"unit": "", "value": 2},
                        "us": {"unit": "", "value": 2}
                    },
                    "image": "pie-crust.jpg"
                },
                {
                    "name": "quick cooking tapioca",
                    "amount": {
                        "metric": {"unit": "Tbsps", "value": 2},
                        "us": {"unit": "Tbsps", "value": 2}
                    },
                    "image": "tapioca-pearls.png"
                },
                {
                    "name": "trimmed rhubarb",
                    "amount": {
                        "metric": {"unit": "g", "value": 305},
                        "us": {"unit": "cups", "value": 2.5}
                    },
                    "image": "rhubarb.jpg"
                },
                {
                    "name": "salt",
                    "amount": {
                        "metric": {"unit": "tsps", "value": 0.333},
                        "us": {"unit": "tsps", "value": 0.333}
                    },
                    "image": "salt.jpg"
                },
                {
                    "name": "unsalted butter",
                    "amount": {
                        "metric": {"unit": "Tbsps", "value": 0.5},
                        "us": {"unit": "Tbsps", "value": 0.5}
                    },
                    "image": "butter-sliced.jpg"
                }
            ]
        });

        // Placeholder for similar recipes
        setSimilarRecipes([
            {
                "id": 1,
                "title": "Baked Raisin Rice Pudding",
                "sourceUrl": "https://spoonacular.com/recipes/1"
            },
            {
                "id": 2,
                "title": "Baked Rice Pudding",
                "sourceUrl": "https://spoonacular.com/recipes/2"
            }
        ]);
    }, [id]);

    if (!recipeDetails || !nutritionalInfo) {
        return <div>Loading...</div>;
    }

    const handleToggleUnits = () => {
        setUnitSystem(prevUnitSystem => (prevUnitSystem === 'us' ? 'metric' : 'us'));
    };

    const handleToggleExpand = () => {
        setIsExpanded(prevIsExpanded => !prevIsExpanded);
    };

    return (
        <div
            className="p-6 max-w-3xl mx-auto flex flex-col h-screen overflow-y-auto">
            <div className="flex flex-row space-x-4">
                <div className="flex flex-col w-2/5">
                    <h2 className="text-2xl font-bold mb-4">{recipeDetails.title}</h2>
                    <div className="flex justify-items-start">
                        <img
                            src={recipeDetails.image}
                            alt={recipeDetails.title}
                            className="h-40 w-40 object-cover rounded-lg"
                        />
                    </div>
                </div>
                <p className="mt-4 border p-4 rounded w-full">{recipeDetails.summary}</p>
            </div>

            <div className="mt-4 flex flex-wrap">
                <div className="w-full border p-4 rounded">
                    <h3 className="text-xl font-semibold">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        {recipeDetails.extendedIngredients.map(ingredient => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="mt-4 border p-4 rounded">
                <h3 className="text-xl font-semibold">Instructions</h3>
                {recipeDetails.analyzedInstructions && recipeDetails.analyzedInstructions.length > 0 && (
                    <ol className="list-decimal list-inside">
                        {recipeDetails.analyzedInstructions[0].steps.map(step => (
                            <li key={step.number}>{step.step}</li>
                        ))}
                    </ol>
                )}
            </div>

            <div className="mt-4 border p-4 rounded">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Nutritional
                        Information</h3>
                    <div className="flex items-center">
                        <button
                            onClick={handleToggleUnits}
                            className={`border-2 border-blue-800 relative rounded-full w-16 h-8 transition-colors ${unitSystem === 'us' ? 'bg-gray-400' : 'bg-blue-500'}`}
                        >
                <span
                    className={`absolute inset-0 flex items-center justify-center rounded-full ${unitSystem === 'us' ? 'bg-white' : 'bg-blue-500'}`}>
                    <span
                        className={`absolute left-0 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md transition-transform ${unitSystem === 'us' ? 'transform translate-x-8' : 'transform translate-x-0'}`}>
                        {unitSystem === 'us' ? 'US' : 'Metric'}
                    </span>
                </span>
                        </button>
                    </div>
                </div>

                <ul className={`list-disc list-inside ${isExpanded ? 'max-h-full overflow-y-auto' : 'max-h-32 overflow-hidden'}`}>
                    {nutritionalInfo.ingredients.map(ingredient => (
                        <li key={ingredient.name}
                            className="flex items-center mb-2">
                            {/*<img src={ingredient.image} alt={ingredient.name} className="h-10 w-10 mr-2"/>*/}
                            <span className="ml-2">
                    {ingredient.name}: {ingredient.amount[unitSystem].value} {ingredient.amount[unitSystem].unit}
                </span>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleToggleExpand}
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                >
                    {isExpanded ? 'Collapse' : 'Expand'}
                </button>
            </div>

            {similarRecipes.length > 0 && (
                <div className="mt-4 border p-4 rounded">
                    <h3 className="text-xl font-semibold">Similar Recipes</h3>
                    <ul className="list-disc list-inside">
                        {similarRecipes.map(recipe => (
                            <li key={recipe.id}>
                                <a href={recipe.sourceUrl}
                                   className="text-blue-500 hover:underline">{recipe.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default RecipeDetails;
