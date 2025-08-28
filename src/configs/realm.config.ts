import Realm from 'realm';
import {createRealmContext} from '@realm/react';
import { FavoriteMovieSchema } from '#/models/Favorite.model';
import { NoteSchema } from '#/models/Note.model';

const configRealm: Realm.Configuration = {
  schema: [FavoriteMovieSchema,NoteSchema],
};

export const {RealmProvider, useQuery, useObject, useRealm} =
  createRealmContext(configRealm);
