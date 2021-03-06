import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
export const collections: { tasks?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  // collections.tasks = taskCollection;
  console.log(`connected to ${db.databaseName} amd collection`);
}
