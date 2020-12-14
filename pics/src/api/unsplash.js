import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID h3VjXbmohLYqWGG16BGYcdEE7IOZlLtFjE1C9G88Ujs'
    }
})