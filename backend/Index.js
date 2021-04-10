"use strict";

const express = require("express");
const morgan = require("morgan");
const { getAllPets } = require("./handlers.js");

const PORT = process.env.PORT || 4000;

express()
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  //endpoints
  .get("/adoption", getAllPets)
  // .get("/adoption/:species", getSpecificSpeciesOfPets)
  // .get("/adoption/:species/:_id", getPet)

  .use((req, res) => res.status(404).type("txt").send("🤷‍♂️"))

  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
