import { JsonDB, Config } from "node-json-db";

import { DB_FILE } from "../environment";
import { TEST_DB_FILE } from "../jest/consts";

import { Schema } from "./types";

const dbFile =
  process.env.NODE_ENV === "test" ? TEST_DB_FILE : DB_FILE;

const dbConfig = new Config(dbFile, true, false, "/");
const database = new JsonDB(dbConfig);

const dbStructure = {
  Genres: "/genres",
  Movies: "/movies"
};

export default database;
export { dbStructure, Schema };
