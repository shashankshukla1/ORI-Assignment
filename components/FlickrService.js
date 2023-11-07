import axios from 'axios';

const API_KEY = 'https://www.flickr.com/services/api/flickr.photos.getRecent.html';
const BASE_URL = 'https://www.flickr.com/services/rest/';

export const getRecentPhotos = async () => {
  const response = await axios.get(BASE_URL, {
    params: {
      method: 'flickr.photos.getRecent',
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: 1,
      safe_search: 1,
    },
  });
  return response.data.photos.photo.map((photo) => ({
    id: photo.id,
    title: photo.title,
    url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  }));
};

export const searchPhotos = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: {
      method: 'flickr.photos.search',
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: 1,
      safe_search: 1,
      text: query,
    },
  });
  return response.data.photos.photo.map((photo) => ({
    id: photo.id,
    title: photo.title,
    url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  }));
};
