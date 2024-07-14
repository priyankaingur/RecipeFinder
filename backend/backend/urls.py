from django.contrib import admin
from django.urls import path
from .views import RapidApiRecipeSearch

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/rapidapi/recipes/', RapidApiRecipeSearch.as_view(), name='rapidapi-recipe-search'),
]
