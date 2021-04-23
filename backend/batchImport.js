const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
var fs = require("fs");
const assert = require("assert");
const petData = JSON.parse(fs.readFileSync("pets.json"));

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("pet_data");
    const result = await db.collection("pets").insertMany(petData);
    assert.equal(petData.length, result.insertedCount);
  } catch (err) {
    console.log("error");
  }
  client.close();
};

batchImport();
