import * as mongodb from './mongodb.js';
import * as sqlite from './sqlite.js';

console.log("Demo")
const database = process.env.MONGO_URL ? mongodb : sqlite;
export default database;
