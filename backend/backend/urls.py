from django.contrib import admin
from django.urls import path
from .views import RapidApiRecipeSearch, RapidApiRecipeDetail, RapidApiRecipeNutrients,CreateRecipeView,GetMostViewedRecipesView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/recipes/', RapidApiRecipeSearch.as_view(), name='rapidapi-recipe-search'),
    path('api/recipes/<int:recipe_id>/', RapidApiRecipeDetail.as_view(), name='rapidapi-recipe-detail'),
    path('api/recipes/<int:recipe_id>/nutrients',
         RapidApiRecipeNutrients.as_view(), name='rapidapi-recipe-nutrients'),
    path('api/recipes/log-view/', CreateRecipeView.as_view(), name='log-view'),
    path('api/recipes/most-viewed/', GetMostViewedRecipesView.as_view(), name='most-viewed'),
    

]
