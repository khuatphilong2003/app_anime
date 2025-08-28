import {IFavoriteMovie} from '#/types';
import Realm, {ObjectSchema} from 'realm';

export class FavoriteMovieSchema extends Realm.Object<FavoriteMovieSchema> {
  id!: Realm.BSON.ObjectId;
  idMovie!: number;
  image!: string;

  static schema: ObjectSchema = {
    name: 'FavoriteMovieSchema',
    properties: {
      id: 'objectId',
      idMovie: 'int',
      image: 'string',
    },
    primaryKey: 'id',
  };

  static handleAddFavoriteMovie(realm: Realm, obj: IFavoriteMovie): boolean {
    try {
      realm.write(() => {
        realm.create(FavoriteMovieSchema, obj);
      });
      console.log('Add favorite movie succes');
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static handleDeleteFavoriteMovie(
    realm: Realm,
    id: Realm.BSON.ObjectId,
  ): boolean {
    try {
      const objDelete: IFavoriteMovie = realm.objectForPrimaryKey(
        FavoriteMovieSchema,
        id,
      ) as never;
      if (objDelete) {
        realm.write(() => {
          realm.delete(objDelete);
        });
        console.log('Delete favorite movie succes');
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
