const bcrypt = require("bcrypt");
const { db } = require("../../../utils/database");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "my_secret_key";

async function registerAgent(req, res) {
  const { name, phonenumber, email, passwords } = req.body;
  if (!email || !passwords) {
    return res
      .status(400)
      .json({ message: "email and passwords are required" });
  }

  //to hash the password
  const hashedPassword = await bcrypt.hash(passwords, 10);

  try {
    await db("users").insert({
      name,
      passwords: hashedPassword,
      phonenumber,
      email,
      roles: "agent",
      user_id: uuid.v4(),
    });
    res.json({ message: "user successfully created" });
  } catch (err) {
    console.log(err);
    res.status(500).json("an error occured");
  }
}

async function registerCustomer(req, res) {
  const { name, phonenumber, email, passwords } = req.body;
  if (!email || !passwords) {
    return res
      .status(400)
      .json({ message: "email and passwords are required" });
  }

  //to hash the password
  const hashedPassword = await bcrypt.hash(passwords, 10);

  try {
    await db("users").insert({
      name,
      passwords: hashedPassword,
      phonenumber,
      email,
      roles: "customer",
      user_id: uuid.v4(),
    });
    res.json("customer successfully created");
  } catch (err) {
    console.log(err);
    res.status(500).json("an error occured");
  }
}

function getRegisteredAgent(req, res) {
  db.select("*")
    .from("users")
    .then((agent) => res.status(200).json(agent))
    .catch((err) => res.status(400).json(err));
}

function getRegisteredCustomer(req, res) {
  db.select("*")
    .from("customers")
    .then((customer) => res.status(200).json(customer))
    .catch((err) => res.status(400).json(err));
}

module.exports = {
  registerAgent,
  getRegisteredAgent,
  getRegisteredCustomer,
  registerCustomer,
};
