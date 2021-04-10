// const assert = require("assert");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllPets = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("pet_data");
    //   console.log("connected!");
    const data = await db.collection("pets").find().toArray();
    res.status(200).json({ status: 200, data: data });
    console.log(data);
  } catch (err) {
    res.status(400).json({ status: 400, msg: "can't find data" });
  }
  client.close();
};

module.exports = { getAllPets };
