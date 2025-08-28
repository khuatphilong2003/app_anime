import Realm from 'realm';
export interface IPlaylist {
  id: Realm.BSON.ObjectId;
  name: string;
  url: string;
}

export interface IPTVChannel {
  name: string;
  url: string;
  group?: {
    title: string;
  };
  tvg?: {
    id?: string;
    logo?: string;
    name?: string;
    rec?: string;
    shift?: string;
    url?: string;
  };
}

export interface IGroupIPTV {
  title: string;
  items: IPTVChannel[];
}

export interface IChannel {
  id: Realm.BSON.ObjectId;
  name: string;
  url: string;
  logo: string;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres?: IGerens[];
}

export interface IGerens {
  id: number;
  name: string;
}

export interface IMovieImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: string | null;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface  IFavoriteMovie {
  id:Realm.BSON.ObjectId,
  image: string;
  idMovie: number
}

export interface INote {
  id: Realm.BSON.ObjectId,
  image: string;
  idMovie: number;
  note: string;
}

export interface IQuiz {
  image: string;
  question: string;
  options: string[];
  answer:string;
}