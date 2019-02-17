import Musics from 'Music';
const KEY = 'AIzaSyBiSVIUTrA_UhjT12af1Lyiuotx94z-OvM';

export default Musics.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})