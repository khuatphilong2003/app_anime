import {INote} from '#/types';
import Realm, {ObjectSchema} from 'realm';

export class NoteSchema extends Realm.Object {
  id!: Realm.BSON.ObjectId;
  note!: string;
  image!: string;
  idMovie!: number;

  static schema: ObjectSchema = {
    name: 'NoteSchema',
    properties: {
      id: 'objectId',
      note: 'string',
      image: 'string',
      idMovie: 'int',
    },
    primaryKey: 'id',
  };

  static handleAddNote(realm: Realm, obj: INote): boolean {
    try {
      realm.write(() => {
        realm.create('NoteSchema', obj);
      });
      console.log('Add note succes');
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static handleDeleteNote(realm: Realm, id: Realm.BSON.ObjectId): boolean {
    try {
      const objDelete: INote = realm.objectForPrimaryKey(
        NoteSchema,
        id,
      ) as never;
      if (objDelete) {
        realm.write(() => {
          realm.delete(objDelete);
        });
        console.log('Delete note succes');
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
