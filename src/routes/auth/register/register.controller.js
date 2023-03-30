const bcrypt = require("bcrypt");
const { db } = require("../../../utils/database");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "my_secret_key";

async function registerAgent(req, res) {
  const { firstname, lastname, phonenumber, email, passwords } = req.body;
  if (!email || !passwords) {
    return res
      .status(400)
      .json({ message: "email and passwords are required" });
  }
  const hashedPassword = await bcrypt.hash(passwords, 10);

  try {
    await db("support_agent").insert({
      firstname,
      passwords: hashedPassword,
      phonenumber,
      lastname,
      email,
      agent_id: uuid.v4(),
    });
    res.json({ message: "user successfully created" });
  } catch (err) {
    console.log(err);
    res.status(500).json("an error occured");
  }
}

function getRegisteredAgent(req, res) {
  db.select("*")
    .from("support_agent")
    .then((agent) => res.status(200).json(agent))
    .catch((err) => res.status(400).json(err));
}

module.exports = {
  registerAgent,
  getRegisteredAgent,
};
