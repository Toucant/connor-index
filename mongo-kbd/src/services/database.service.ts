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
  // await db.command({
  //   collMod: process.env.TASK_COLLECTION_NAME,
  //   validator: {
  //     $jsonSchema: {
  //       bsonType: "object",
  //       required: ["title", "description", "department"],
  //       additionalProperties: false,
  //       properties: {
  //         _id: {},
  //         title: {
  //           bsonType: "string",
  //           description: "'title' is required and is string",
  //         },
  //         description: {
  //           bsonType: "string",
  //           description: "'description' is required and is string",
  //         },
  //         department: {
  //           bsonType: "string",
  //           description: "'department' is required and is string",
  //         },
  //       },
  //     },
  //   },
  // });

  const taskCollection: mongoDB.Collection = db.collection(
    process.env.TASK_COLLECTION_NAME
  );

  collections.tasks = taskCollection;
  console.log(
    `connected to ${db.databaseName} amd collection ${taskCollection.collectionName}`
  );
}
