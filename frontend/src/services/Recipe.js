import axios from 'axios'
const baseUrl = 'http://localhost:8000/api/recipes'

const getByIngredients = (ingredients) => {
    const request = axios.get(`${baseUrl}/?ingredients=${ingredients}`)
    return request.then(response => {
        return response.data
    })
}

const getRecipeById = (id) => {
    const request = axios.get(`${baseUrl}/${id}/`)
    return request.then(response => {
        return response.data
    })
}

const getNutritionById = (id) => {
    const request = axios.get(`${baseUrl}/${id}/`)
    return request.then(response => {
        return response.data
    })
}
const logView = (data) => {

    const request = axios.post(`${baseUrl}/log-view/`, data)
    return request.then(response => {
        return response.data
    })
}

const getMostViewed = () => {
    const request = axios.get(`${baseUrl}/most-viewed/`)
    return request.then(response => {
        return response.data
    })
}

export default { getByIngredients,getRecipeById, getNutritionById ,logView,getMostViewed}