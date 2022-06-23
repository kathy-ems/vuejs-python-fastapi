const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasksCollection = await loadTasksCollection();
    // const numOfTasks = tasks.collection.count();
    res.send(await tasksCollection.find({}).sort({ order: -1 }).toArray());
  } catch (e) {
    console.log("Unable to get tasks", e);
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
