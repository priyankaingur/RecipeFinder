# todo/views.py
import requests
from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView

class SpoonacularRecipeSearch(APIView):
    def get(self, request):
        ingredients = request.query_params.get('ingredients', '')
        api_key = settings.SPOONACULAR_API_KEY
        url = f'https://api.spoonacular.com/recipes/findByIngredients?ingredients={ingredients}&apiKey={api_key}'
        response = requests.get(url)
        data = response.json()
        return Response(data)

