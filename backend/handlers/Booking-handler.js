const assert = require("assert");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const bookAppointment = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  const email = req.body.Email;
  console.log(Object.values(req.body));

  try {
    await client.connect();
    const db = client.db("pet_data");

    const emailExisting = await db
      .collection("appointments")
      .findOne({ Email: email });

    await db.collection("appointments").insertOne(req.body);
    const result = await db.collection("appointments").find().toArray();

    if (req.body.Email.includes("@") === false) {
      return res.status(200).json({
        status: "error",
        error: "invalid-email",
        data: result,
      });
    } else if (emailExisting) {
      return res.status(200).json({
        status: "error",
        error: "used-email",
        data: result,
      });
    } else {
      res.status(201).json({ status: "success", data: result });
    }
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ status: 500, data: req.body, msg: "error" });
  }
  client.close();
};

module.exports = {
  bookAppointment,
};
