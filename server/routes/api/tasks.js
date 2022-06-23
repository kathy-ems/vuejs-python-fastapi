const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

/*
 * Obtain all tasks
 * GET http://localhost:5000/api/tasks
 * Returns an array of tasks as objects
 *
 * Example A): data on success:
 * [
 *   {
 *    "_id":"62b4ca25e32e1449255247be",
 *    "text":"New Task",
 *    "order":0,
 *    "completed":false,
 *    "createdAt":"2022-06-23T20:16:37.871Z"
 *   },
 *   {
 *    "_id":"62b4b915c8a9c69c8153c0e9",
 *    "text":"New Task2",
 *    "order":1,
 *    "completed":true,
 *    "createdAt":"2022-06-23T19:05:13.026Z"
 *   }
 *  ]
 */
router.get("/", async (req, res) => {
  try {
    const tasksCollection = await loadTasksCollection();
    res.send(await tasksCollection.find({}).sort({ order: -1 }).toArray());
  } catch (e) {
    console.log("Unable to get tasks", e);
  }
});

/*
 * Add a task
 * PUT http://localhost:5000/api/tasks/62b4ca25e32e1449255247be
 * Adds a task to the database
 */
router.post("/", async (req, res) => {
  try {
    const tasksCollection = await loadTasksCollection();
    // get number of tasks for order #
    const numOfTasks = await tasksCollection.count();
    const response = await tasksCollection.insertOne({
      text: req.body.text,
      order: numOfTasks || 0,
      completed: false,
      createdAt: new Date(),
    });

    // after insert, find doc to return
    try {
      let newTask = await tasksCollection
        .find({ _id: new mongodb.ObjectId(response.insertedId) })
        .toArray();

      res.status(201).send(newTask);
    } catch (e) {
      console.log("Unable to get single task", e);
    }
  } catch (e) {
    console.log("Unable to post new task", e);
  }
});

/*
 * Get a task (used for toggling completed and ordering)
 * GET http://localhost:5000/api/tasks/62b4ca25e32e1449255247be
 * Returns an array of tasks as objects
 *
 * Example A): data on success:
 * [
 *   {
 *    "_id":"62b4ca25e32e1449255247be",
 *    "text":"New Task",
 *    "order":0,
 *    "completed":false,
 *    "createdAt":"2022-06-23T20:16:37.871Z"
 *   }
 *  ]
 */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const tasksCollection = await loadTasksCollection();
    let task = await tasksCollection
      .find({ _id: new mongodb.ObjectId(id) })
      .next();
    res.status(200).send(task);
  } catch (e) {
    console.log("Unable to get tasks", e);
  }
});

/*
 * Updates a task (used for toggling completed and ordering)
 * PUT http://localhost:5000/api/tasks/62b4ca25e32e1449255247be
 * Updates a task in the database
 */
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const tasksCollection = await loadTasksCollection();

    // update the task
    await tasksCollection.updateOne(
      { _id: new mongodb.ObjectId(id) },
      {
        $set: {
          text: req.body.text,
          order: req.body.order || 0,
          completed: req.body.completed || false,
        },
      }
    );

    // obtain the updated task
    let updatedTask = await tasksCollection
      .find({ _id: new mongodb.ObjectId(id) })
      .next();

    // return updated task
    res.status(201).send(updatedTask);
  } catch (e) {
    console.log("Unable to update task in Mongo", e);
  }
});

/*
 * Delete a task
 * DELETE http://localhost:5000/api/tasks/62b4ca25e32e1449255247be
 * Deletes a task from the database
 */
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
