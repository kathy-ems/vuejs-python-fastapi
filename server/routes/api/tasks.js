const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasksCollection = await loadTasksCollection();
    res.send(await tasksCollection.find({}).sort({ order: -1 }).toArray());
  } catch (e) {
    console.log("Unable to get tasks", e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tasksCollection = await loadTasksCollection();
    await tasksCollection.deleteOne({
      _id: new mongodb.ObjectId(req.params.id),
    });
    res.status(200).send();
  } catch (e) {
    console.log("Unable to delete task", e);
  }
});

async function loadTasksCollection() {
  try {
    const client = await mongodb.MongoClient.connect(
      "mongodb://localhost/vue-todo",
      {
        useNewUrlParser: true,
      }
    );

    return client.db("vue-todo").collection("tasks");
  } catch (e) {
    console.log("Unable to load collection", e);
  }
}

module.exports = router;
