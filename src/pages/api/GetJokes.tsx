import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import url from "url";

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);
  cachedDb = db;

  return db;
}

export default async (request: NowRequest, response: NowResponse) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection("piadas-db");

  await collection.find({}).toArray(function (err, result) {
    if (err) throw err;
    return response.status(200).json(result);
  });
};
