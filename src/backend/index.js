

import DatabaseContext from './context';
import Database from './database';
import FirebaseAPI from './APIs/firebase_api';


let db = new Database(new FirebaseAPI());

export default Database;

export {DatabaseContext, db};