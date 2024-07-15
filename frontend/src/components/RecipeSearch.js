import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RecipeSearch() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const searchRecipes = () => {
        // axios.get(`http://localhost:8000/api/rapidapi/recipes/?ingredients=${ingredients}`)
        //     .then(response => setRecipes(response.data))
        //     .catch(error => console.error('There was an error fetching the recipes!', error));
        setRecipes([
            {
                "id": 666439,
                "title": "Homemade Ricotta",
                "image": "https://img.spoonacular.com/recipes/666439-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 1049,
                        "amount": 3.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "half & half",
                        "original": "3 cups half & half",
                        "originalName": "half & half",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/fluid-cream.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1011077,
                        "amount": 5.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "full-fat buttermilk",
                        "original": "5 cups full-fat buttermilk",
                        "originalName": "full-fat buttermilk",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 1564
            },
            {
                "id": 718523,
                "title": "Ask Alisa: Is there a good dairy-free substitute for coffee creamer",
                "image": "https://img.spoonacular.com/recipes/718523-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 10016223,
                        "amount": 1.0,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": null,
                        "name": "flavorings: dairy-free buyer beware",
                        "original": "Flavorings: Dairy-Free Buyer Beware",
                        "originalName": "Flavorings: Dairy-Free Buyer Beware",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/no.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 1.0,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk alternatives: maybe",
                        "original": "Milk Alternatives: Maybe for Some",
                        "originalName": "Milk Alternatives: Maybe for Some",
                        "meta": [
                            "for some"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 375
            },
            {
                "id": 462729,
                "title": "Chocolate Caramel Sundaes",
                "image": "https://img.spoonacular.com/recipes/462729-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 19095,
                        "amount": 8.0,
                        "unit": "servings",
                        "unitLong": "servings",
                        "unitShort": "servings",
                        "aisle": "Frozen",
                        "name": "coffee ice cream",
                        "original": "Vanilla or coffee ice cream",
                        "originalName": "Vanilla or coffee ice cream",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/vanilla-ice-cream.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1/4 cup milk",
                        "originalName": "milk",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 13
            },
            {
                "id": 688355,
                "title": "Peppermint Chocolate Martini",
                "image": "https://img.spoonacular.com/recipes/688355-312x231.png",
                "imageType": "png",
                "usedIngredientCount": 1,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 98988,
                        "amount": 1.0,
                        "unit": "shot",
                        "unitLong": "shot",
                        "unitShort": "shot",
                        "aisle": "Alcoholic Beverages",
                        "name": "chocolate liqueur",
                        "original": "1 shot chocolate liqueur",
                        "originalName": "chocolate liqueur",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/light-green-liqueur.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1102,
                        "amount": 1.0,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "chocolate milk",
                        "original": "1 cup chocolate milk (non-dairy preferred - I like almond)",
                        "originalName": "chocolate milk (non-dairy preferred - I like almond)",
                        "meta": [
                            "(non-dairy preferred - I like almond)"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/chocolate-milk.jpg"
                    }
                ],
                "unusedIngredients": [],
                "likes": 0
            },
            {
                "id": 874700,
                "title": "Kroger Top Weekly Deals Apr 5 – Apr 11",
                "image": "https://img.spoonacular.com/recipes/874700-312x231.png",
                "imageType": "png",
                "usedIngredientCount": 1,
                "missedIngredientCount": 1,
                "missedIngredients": [
                    {
                        "id": 1256,
                        "amount": 0.88,
                        "unit": "",
                        "unitLong": "",
                        "unitShort": "",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "chobani greek yogurt",
                        "original": "Chobani Greek Yogurt, 5.3 oz – $0.88",
                        "originalName": "Chobani Greek Yogurt, 5.3 oz – $",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/plain-yogurt.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 1.0,
                        "unit": "serving",
                        "unitLong": "serving",
                        "unitShort": "serving",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "dairy",
                        "original": "Dairy",
                        "originalName": "Dairy",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 0
            },
            {
                "id": 263804,
                "title": "Rice Pudding",
                "image": "https://img.spoonacular.com/recipes/263804-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 2010,
                        "amount": 1.0,
                        "unit": "dash",
                        "unitLong": "dash",
                        "unitShort": "dash",
                        "aisle": "Spices and Seasonings",
                        "name": "cinnamon",
                        "original": "a dash of cinnamon",
                        "originalName": "cinnamon",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/cinnamon.jpg"
                    },
                    {
                        "id": 20027,
                        "amount": 2.0,
                        "unit": "tbsp",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Baking",
                        "name": "cornstarch",
                        "original": "2 tbsp cornstarch",
                        "originalName": "cornstarch",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/white-powder.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 2.0,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "plant-based milk",
                        "original": "2 cups plant-based milk",
                        "originalName": "plant-based milk",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 144
            },
            {
                "id": 264026,
                "title": "Chipotle Roasted Corn Soup",
                "image": "https://img.spoonacular.com/recipes/264026-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 1052009,
                        "amount": 1.0,
                        "unit": "tsp",
                        "unitLong": "teaspoon",
                        "unitShort": "tsp",
                        "aisle": "Spices and Seasonings",
                        "name": "chipotle powder",
                        "original": "1 tsp chipotle powder",
                        "originalName": "chipotle powder",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/chili-powder.jpg"
                    },
                    {
                        "id": 11913,
                        "amount": 1.0,
                        "unit": "pound",
                        "unitLong": "pound",
                        "unitShort": "lb",
                        "aisle": "Frozen",
                        "name": "roasted corn",
                        "original": "1 pound roasted frozen corn",
                        "originalName": "roasted frozen corn",
                        "meta": [
                            "frozen"
                        ],
                        "extendedName": "frozen roasted corn",
                        "image": "https://img.spoonacular.com/ingredients_100x100/corn.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "plant-based milk",
                        "original": "¼ cup plant-based milk",
                        "originalName": "plant-based milk",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 51
            },
            {
                "id": 263549,
                "title": "Tofu Ice Cream",
                "image": "https://img.spoonacular.com/recipes/263549-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 19911,
                        "amount": 3.0,
                        "unit": "tbsp",
                        "unitLong": "tablespoons",
                        "unitShort": "Tbsp",
                        "aisle": "Cereal",
                        "name": "maple syrup",
                        "original": "3 tbsp pure maple syrup",
                        "originalName": "pure maple syrup",
                        "meta": [
                            "pure"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/maple-syrup.png"
                    },
                    {
                        "id": 16213,
                        "amount": 12.0,
                        "unit": "ounces",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Produce",
                        "name": "lite mori-nu tofu",
                        "original": "12 ounces lite mori-nu tofu, extra firm",
                        "originalName": "lite mori-nu tofu, extra firm",
                        "meta": [
                            "firm"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/tofu.png"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 1.0,
                        "unit": "cup",
                        "unitLong": "cup",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "plant-based milk",
                        "original": "1 cup plant-based milk",
                        "originalName": "plant-based milk",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 24
            },
            {
                "id": 264962,
                "title": "Coffee-Caramel Dessert Dip",
                "image": "https://img.spoonacular.com/recipes/264962-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 19074,
                        "amount": 11.0,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Sweet Snacks",
                        "name": "caramels",
                        "original": "1 pkg. (11 oz.) KRAFT Caramels",
                        "originalName": "pkg. KRAFT Caramels",
                        "meta": [
                            "kraft"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/soft-caramels.jpg"
                    },
                    {
                        "id": 10014209,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Tea and Coffee",
                        "name": "strong maxwell house coffee",
                        "original": "1/4 cup brewed strong MAXWELL HOUSE Coffee, any variety",
                        "originalName": "brewed strong MAXWELL HOUSE Coffee, any variety",
                        "meta": [
                            "brewed"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/brewed-coffee.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 0.25,
                        "unit": "cup",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1/4 cup milk",
                        "originalName": "milk",
                        "meta": [],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 0
            },
            {
                "id": 265173,
                "title": "Easy Pudding Poke Cake",
                "image": "https://img.spoonacular.com/recipes/265173-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 1,
                "missedIngredientCount": 2,
                "missedIngredients": [
                    {
                        "id": 19184,
                        "amount": 1.0,
                        "unit": "pkg",
                        "unitLong": "package",
                        "unitShort": "pkg",
                        "aisle": "Baking",
                        "name": "jell-o chocolate flavor pudding",
                        "original": "1 pkg. (4-serving size) JELL-O Chocolate Flavor Instant Pudding",
                        "originalName": "(4-serving size) JELL-O Chocolate Flavor Instant Pudding",
                        "meta": [
                            "instant",
                            "(4-serving size)"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/chocolate-pudding.jpg"
                    },
                    {
                        "id": 18133,
                        "amount": 10.75,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Bakery/Bread",
                        "name": "pound cake",
                        "original": "1 pkg. (10.75 oz.) prepared pound cake",
                        "originalName": "pkg. prepared pound cake",
                        "meta": [
                            "prepared"
                        ],
                        "extendedName": "cooked pound cake",
                        "image": "https://img.spoonacular.com/ingredients_100x100/pound-cake.jpg"
                    }
                ],
                "usedIngredients": [
                    {
                        "id": 1077,
                        "amount": 1.5,
                        "unit": "cups",
                        "unitLong": "cups",
                        "unitShort": "cup",
                        "aisle": "Milk, Eggs, Other Dairy",
                        "name": "milk",
                        "original": "1-1/2 cups cold milk",
                        "originalName": "cold milk",
                        "meta": [
                            "cold"
                        ],
                        "image": "https://img.spoonacular.com/ingredients_100x100/milk.png"
                    }
                ],
                "unusedIngredients": [],
                "likes": 0
            }
        ])
    };


    const viewRecipeDetails = (id) => {
        navigate(`/recipe/${id}`);
    };

    const truncateText = (text) => {
        if (text.length > 20) {
            return text.substring(0, 20) + '...';
        }
        return text;
    };
    return (
        <div className="mx-4">
            <h2 className="text-2xl font-bold mb-4">Search Recipes by Ingredients</h2>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={ingredients}
                    onChange={e => setIngredients(e.target.value)}
                    className="border border-gray-300 px-4 py-2 rounded-l-lg w-full"
                    placeholder="Enter ingredients separated by commas"
                />
                <button
                    onClick={searchRecipes}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                >
                    Search
                </button>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center max-h-screen overflow-y-auto">
                {recipes.map(recipe => (
                    <li
                        key={recipe.id}
                        className="p-4 bg-white shadow-md rounded-lg border-2 cursor-pointer flex flex-col justify-between"
                        style={{ minWidth: '200px', maxWidth: '250px' }}
                        onClick={() => viewRecipeDetails(recipe.id)}
                    >
                        <div className="flex justify-center">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="h-40 w-40 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="text-sm font-bold text-center mt-2 mb-4">{recipe.title}</h3>
                        <p className="text-xs">{recipe.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeSearch;
