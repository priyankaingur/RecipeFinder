from decouple import config

import certifi
import pymongo
from pymongo import MongoClient

# TODO: move to settings.py
def connect_to_mongodb():
    connection=config('CONNECTION_STRING')
    client = pymongo.MongoClient(connection, tlsCAFile=certifi.where())
    db=client.get_database("Recipe_Finder")
    return db


def get_collection(collection_name):
    db = connect_to_mongodb()
    return db[collection_name]

def insert_one(collection_name, document):
    collection = get_collection(collection_name)
    result = collection.insert_one(document)
    return result.inserted_id

def find_one(collection_name, query):
    collection = get_collection(collection_name)
    return collection.find_one(query)

def find_all(collection_name, query):
    collection = get_collection(collection_name)
    return collection.find(query)

def update_one(collection_name, query, update):
    collection = get_collection(collection_name)
    result = collection.update_one(query, update)
    return result.modified_count

def delete_one(collection_name, query):
    collection = get_collection(collection_name)
    result = collection.delete_one(query)
    return result.deleted_count