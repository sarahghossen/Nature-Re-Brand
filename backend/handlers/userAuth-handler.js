const assert = require("assert");
const { MongoClient, ObjectID } = require("mongodb");
const bcrypt = require("bcrypt");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  await client.connect();
  const db = client.db("pet_data");
  db.collection("users").findOne({ _id: ObjectID(_id) }, (err, result) => {
    result
      ? res.status(200).json({ status: "success", _id, user: result })
      : res.status(404).json({ status: 404, _id, user: "Not Found" });
    client.close();
  });
};

const addUser = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  try {
    const salt = await bcrypt.genSalt();
    //10 is the salt
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await client.connect();
    const db = client.db("pet_data");
    const foundUser = await db
      .collection("users")
      .findOne({ email: req.body.email });

    if (!foundUser) {
      let response = await db.collection("users").insertOne({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.status(201).json({ status: "success", user: response.ops[0] });
    } else {
      res.status(400).json({ status: "not allowed" });
    }
  } catch {
    res.status(500).json({ status: 500, msg: "can't find data" });
  }
};

const userAuth = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("pet_data");
    const user = await db.collection("users").findOne({
      email: req.body.email,
    });
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(201).json({ status: "success", user });
    } else {
      res.status(201).json({ status: "not allowed" });
    }
  } catch {
    res.status(500).json({ status: 500, msg: "can't find data" });
  }
};

module.exports = {
  getUser,
  addUser,
  userAuth,
};
