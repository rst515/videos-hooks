import axios from 'axios';

const KEY = 'AIzaSyARTpUfwgDKLxaIsodv-U5Tp57EP9GXSk0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});

// https://developers.google.com/youtube/v3/docs/search/list