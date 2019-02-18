import musics from 'musics';
const KEY = 'AIzaSyAfjm2OQsIwGObG1fRgKyEBq8aGMF1lgbc';

export default musics.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})