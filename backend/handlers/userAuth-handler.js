const assert = require("assert");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("pet_data");
    const data = await db.collection("users").find().toArray();
    res.status(200).json({ status: 200, data: data });
    // console.log(data);
  } catch (err) {
    res.status(400).json({ status: 400, msg: "can't find data" });
  }
  client.close();
};

const addUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    const salt = await bcrypt.genSalt();
    //10 is the salt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await client.connect();
    const db = client.db("pet_data");
    await db
      .collection("users")
      .insertOne({ email: req.body.email, password: hashedPassword });
    const data = await db.collection("users").find().toArray();

    if (data) {
      res.status(201).json({ status: 201, data: data });
    }
  } catch {
    res.status(500).json({ status: 500, msg: "can't find data" });
  }
};

const userAuth = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  //   const user = req.body.email === req.body.email;
  //   if (user == null) {
  //     res.status(400).json({ status: 400, msg: "can't find data" });
  //   }
  try {
    await client.connect();
    const db = client.db("pet_data");
    const user = await db
      .collection("users")
      .findOne({ email: req.body.email });
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(201).json({ status: "success" });
    } else {
      res.status(201).json({ status: "not allowed" });
    }
  } catch {
    res.status(500).json({ status: 500, msg: "can't find data" });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  userAuth,
};
