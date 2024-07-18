from django.conf import settings
import requests
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .mongo_utils import insert_one, find_one, update_one, find_all
import pymongo

class CreateRecipeView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            data = request.data
            # Check if the recipe already exists
            existing_recipe = find_one('mostViewedRecipes', {'id':data['id']})
            
            if existing_recipe:
                # If recipe exists, update viewCount
                updated_recipe = {'$inc': {'viewCount': 1}}
                update_one('mostViewedRecipes', updated_recipe)
                document_id = existing_recipe['_id']
            else:
                # If recipe does not exist, insert with viewCount = 1
                data['viewCount'] = 1
                document_id = insert_one('mostViewedRecipes', data)
            
            return Response({'inserted_id': str(document_id)}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class GetMostViewedRecipesView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            # Fetch top 10 recipes sorted by viewCount descending
            recipes_cursor = find_all('mostViewedRecipes', {}).sort('viewCount', pymongo.DESCENDING).limit(10)
            recipes = list(recipes_cursor)
            
            # Convert the result to a JSON-friendly format
            results = []
            for recipe in recipes:
                recipe['_id'] = str(recipe['_id'])  # Convert ObjectId to string
                results.append(recipe)
            
            return Response(recipes, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class RapidApiRecipeSearch(APIView):
    def get(self, request):
        ingredients = request.query_params.get('ingredients', '')
        url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
        headers = {
            "X-RapidAPI-Key": settings.RAPIDAPI_KEY,
            "X-RapidAPI-Host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
        querystring = {"ingredients": ingredients}
        
        try:
            response = requests.get(url, headers=headers, params=querystring)
            response.raise_for_status()  # Raise HTTPError for non-2xx responses
            data = response.json()
            return Response(data, status=response.status_code)
        except requests.exceptions.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class RapidApiRecipeDetail(APIView):
    def get(self, request, recipe_id):
        url = f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{recipe_id}/information"
        headers = {
            "X-RapidAPI-Key": settings.RAPIDAPI_KEY,
            "X-RapidAPI-Host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Raise HTTPError for non-2xx responses
            data = response.json()
            return Response(data, status=response.status_code)
        # except requests.exceptions.RequestException as e:
        except Exception as e:
            print(e)
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

class RapidApiRecipeNutrients(APIView):
    def get(self, request, recipe_id):
        url = f"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{recipe_id}/nutritionWidget.json"
        headers = {
            "X-RapidAPI-Key": settings.RAPIDAPI_KEY,
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }

        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()  # Raise HTTPError for non-2xx responses
            data = response.json()
            return Response(data, status=response.status_code)
        except requests.exceptions.RequestException as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
