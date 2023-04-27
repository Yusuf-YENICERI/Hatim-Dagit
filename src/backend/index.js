







import DatabaseContext from './context';
import Database from './database';
import FirebaseAPI from './APIs/firebase_api';
import { DataService } from 'service/DataService';
import { LocalDatabase } from './LocalDatabase';
import React from 'react'


let db = new Database(new FirebaseAPI());

let localDatabase = new LocalDatabase();
let dataService = new DataService(db,localDatabase);

const DataServiceContext = React.createContext(dataService);

export default Database;

export {DatabaseContext, db, DataServiceContext, dataService, localDatabase};