import axios from 'axios'

const KEY = 'AIzaSyC_tVAwbT7d5xtr8p-D8XniPDLWsV9LJ0E'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})