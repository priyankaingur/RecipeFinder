# Recipe Finder Website Deployment

## Table of Contents
- [Introduction](#introduction)
- [Tech Stack and Architecture Overview](#tech-stack-and-architecture-overview)
- [Frontend Development](#frontend-development)
- [Backend Development](#backend-development)
- [Deployment Process to AWS](#deployment-process-to-aws)


## Introduction 

[Recipe Finder ](http://recipe-finder-2024.s3-website.us-east-2.amazonaws.com/)
demonstrates the development and deployment of a Recipe Finder website. The purpose of this website is to identify recipes based on the ingredients available. It features a search functionality called "Search Recipe by Ingredients," which retrieves recipe information from a third-party website based on the ingredients provided. The website also logs recipe views, displays detailed recipe information, and showcases the most viewed recipes on the home page.


## Tech Stack and Architecture Overview
### Tech Stack
- **Frontend**: React.js
- **Backend**: Django, Pymongo, Django REST Framework
- **Database**: MongoDB Atlas 
- **Deployment**: AWS S3, EC2, CloudFront

### Architecture Diagram
![Architechture2.png](Assets%2FArchitechture2.png)
## Frontend Development

**Features**
* Home: Displays the most viewed recipes.
* Search: Allows users to search for recipes by ingredients.
* RecipeList: Displays a list of recipes based on search results.
* RecipeDetail: Shows detailed information about a selected recipe with 
  nutrient information
* SimilarRecipes: Displays list of similar recipes based on the selected recipe

## Backend Development

**Features**

- **External SAAS Database:** Pymongo manages interactions with the external MongoDB database, allowing for efficient data operations.
- **Third-Party API Integration:** Django REST framework is used to build 
  endpoints that communicate with external APIs (Rapid API), handling data 
  retrieval and manipulation.


### Django APIs
* /api/recipes/?ingredients=<ingredient1,ingredient2>: Endpoint to search for 
  recipes by ingredients.
* /api/recipes/<id>: Endpoint to get details of a specific recipe.
* /api/recipes/<id>/nutrients: Endpoint to get nutritional information about a recipe.
* /api/recipes/<id>/similar: Endpoint to get similar recipes.
* /api/recipes/<id>/log-view: Endpoint to log that a particular recipe has been
    viewed.
* /api/recipes/<id>/info: Endpoint to get most viewed recipes.

## Deployment Process to AWS

### Frontend Deployment

1. Create an S3 bucket.
2. Configure the bucket for static website hosting.
3. Upload the React build to S3.

### Backend Deployment

1. Set up an EC2 instance.
2. Install necessary dependencies.
3. Configure and run the Django application.

### CloudFront for CDN

1. Set up CloudFront to serve content from S3 (Facing some issue in )

### Custom VPC and Private Subnet

1. Create a custom VPC and a private subnet.
2. Configure the EC2 instance within this VPC.