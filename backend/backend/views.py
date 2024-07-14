import requests
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView

class RapidApiRecipeSearch(APIView):
    def get(self, request):
        ingredients = request.query_params.get('ingredients', '')
        url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"
        headers = {
            "X-RapidAPI-Key": settings.RAPIDAPI_KEY,
            "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
        querystring = {"ingredients": ingredients}
        response = requests.get(url, headers=headers, params=querystring)
        data = response.json()
        return Response(data)
