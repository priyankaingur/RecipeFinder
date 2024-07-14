from django.contrib import admin
from django.urls import path
from .views import RapidApiRecipeSearch
from .views import RapidApiRecipeDetail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/rapidapi/recipes/', RapidApiRecipeSearch.as_view(), name='rapidapi-recipe-search'),
    path('api/rapidapi/recipes/<int:recipe_id>/', RapidApiRecipeDetail.as_view(), name='rapidapi-recipe-detail'),

]
