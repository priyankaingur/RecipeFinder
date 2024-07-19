"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import RapidApiRecipeSearch, RapidApiRecipeDetail, RapidApiRecipeNutrients,RapidApiSimilarRecipe,CreateRecipeView,GetMostViewedRecipesView


urlpatterns = [
    path('api/recipes/', RapidApiRecipeSearch.as_view(), name='rapidapi-recipe-search'),
    path('api/recipes/', RapidApiRecipeDetail.as_view(), name='rapidapi-recipe-information'),
    path('api/recipes/', RapidApiRecipeNutrients.as_view(), name='rapidapi-recipe-nutrients'),
    path('api/recipes/', RapidApiSimilarRecipe.as_view(), name='rapidapi-similar-recipe'),
    path('api/recipes/', CreateRecipeView.as_view(), name='create_viewed_recipe'),
    path('api/recipes/', GetMostViewedRecipesView.as_view(), name='get_most_viewed_recipes'),

]