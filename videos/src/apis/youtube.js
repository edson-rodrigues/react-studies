import axios from 'axios'

const KEY = 'AIzaSyBqO4d6UuCSmKMN2Jyd6Gq0XDgX6CeC4gY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})

