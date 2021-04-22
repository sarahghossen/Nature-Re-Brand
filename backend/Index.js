"use strict";

const express = require("express");
const morgan = require("morgan");
const {
  getAllPets,
  getSpecificSpeciesOfPets,
  getPet,
} = require("./handlers/Pet-handler.js");
const { bookAppointment } = require("./handlers/Booking-handler.js");
const {
  getUser,
  addUser,
  userAuth,
} = require("./handlers/userAuth-handler.js");
const PORT = process.env.PORT || 4000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //endpoints
  .get("/adoption", getAllPets)
  .get("/adoption/:species", getSpecificSpeciesOfPets)
  .get("/adoption/id/:_id", getPet)
  .post("/booking", bookAppointment)
  .get("/users/login/:_id", getUser)
  .post("/users", addUser)
  .post("/users/login", userAuth)

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
