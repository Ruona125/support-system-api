const { db } = require("../../utils/database");
const uuid = require("uuid");

async function createCase(req, res) {
  try {
    const { customer_id, product_id, description } = req.body;
    const case_id = uuid.v4();
    //find an available agent
    const [newCase] = await db("cases")
      .insert({
        description,
        status: "new",
        customer_id,
        product_id,
        case_id,
      })
      .returning("case_id");

    //assign the case to an available agent
    const [agent] = await db("agent")
      .whereNotExists(function () {
        this.select("*")
          .from("cases")
          .whereRaw(
            "cases.agent_id = agent.agent_id and cases.status <> ?",
            "closed"
          );
      })
      .forUpdate()
      .limit(1);

    if (!agent) {
      res.status(400).json("no agent found");
    }

    await db("cases")
      .where("case_id", case_id)
      .andWhere("status", "new")
      .update({
        status: "in_progress",
        agent_id: agent.agent_id,
      });
    res.status(201).json({ case_id, agent_id: agent.agent_id });
  } catch (err) {
    console.log(err);
  }
}

async function closeCase(req, res) {
  try {
    const { case_id } = req.params;

    // Update the case status to "closed" and free up the assigned agent
    const [result] = await db("cases")
      .where("case_id", case_id)
      .andWhere("status", "in_progress")
      .update({
        status: "closed",
        agent_id: null,
      })
      .returning("*");
    if (!result) {
      console.log("case not found or already closed");
    }
    res.json({ case: result });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createCase,
  closeCase,
};
