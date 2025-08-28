import {baseApi} from '#/utils/baseApi';
import {keyApi} from '#/utils/keyApi';
import axios from 'axios';

export const instance = axios.create({
  baseURL: baseApi,
  params: {
    api_key: keyApi,
    include_video: false,
  },
});

export const Get_list_trending = async () => {
  try {
    const res = await instance.get('trending/movie/day');
    return res.data.results;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const Get_list_popular = async () => {
  try {
    const res = await instance.get('movie/popular');
    return res.data.results;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const Get_list_top_rate = async () => {
  try {
    const res = await instance.get('movie/top_rated');
    return res.data.results;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const Get_list_now_playing = async () => {
  try {
    const res = await instance.get('movie/now_playing');
    return res.data.results;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const Get_Movie_Detail = async (movie_id: number) => {
  try {
    const res = await instance.get(`movie/${movie_id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const Get_Image_Movie = async (movie_id: number) => {
  try {
    const res = await instance.get(`movie/${movie_id}/images`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const handleSearchMovie = async (name: string) => {
  try {
    const res = await instance.get(`search/movie`, {
      params: {
        query: name,
      },
    });
    return res.data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
};
