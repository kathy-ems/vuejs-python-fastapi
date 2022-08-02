from datetime import datetime
from typing import Optional
from fastapi import FastAPI, Path
from pydantic import BaseModel
from pymongo import MongoClient
from bson.objectid import ObjectId

app = FastAPI()
client = MongoClient("mongodb://localhost/vue-todo")
db = client["vue-todo"]
task_repository = db["tasks"]

class Task(BaseModel):
  text: str
  completed: bool
  order: Optional[int] = None
  createdAt: Optional[datetime] = None
  _id: Optional[str] = None

@app.get("/")
def get_task():
    return ["hello world"]

# Obtain all tasks
# GET http://localhost:8080/api/tasks
# Returns an array of tasks as objects
@app.get("/tasks")
def get_task():
  # create a new list to convert ObjectId from mongo to str
  l = []
  for x in task_repository.find():
    taskToInsert = {
      "_id": str(x["_id"]),
      "text": x["text"],
      "order": x["order"],
      "completed": x["completed"],
    }
    l.append(taskToInsert)
  return l

# Get a specific task (used for toggling completed and ordering)
# GET http://localhost:8080/api/tasks/62b4ca25e32e1449255247be
# Returns an array of tasks as objects
@app.get("/tasks/{_id}")
def get_task(_id: str):
    x = task_repository.find_one({'_id': ObjectId(_id)})
    task = {
      "_id": str(x["_id"]),
      "text": x["text"],
      "order": x["order"],
      "completed": x["completed"],
    }
    return task

# Updates a task (used for toggling completed and ordering)
# PUT http://localhost:8080/api/tasks/62b4ca25e32e1449255247be
# Updates a task in the database
# Returns a 200 status
@app.put("/tasks/{_id}")
def put_task(_id: str, taskFromUser: Task):
    taskToUpdate = {
      "text": taskFromUser.text,
      "order": taskFromUser.order,
      "completed": taskFromUser.completed,
    }
    # update the task
    task_repository.update_one({"_id": ObjectId(_id)}, {"$set":  taskToUpdate})
    # obtain updated task
    value = task_repository.find_one({"_id": ObjectId(_id)})
    # return updated task for filtering
    updatedTask = Task(
      _id=id,
      text=value["text"],
      order=value["order"],
      completed=value["completed"],
      createdAt=value["createdAt"]
    )
    return updatedTask.dict()

# Delete a task
# DELETE http://localhost:8080/api/tasks/62b4ca25e32e1449255247be
# Deletes a task from the database
@app.delete("/tasks/{_id}")
def delete_task(_id: str = Path(None, description="The ID of the task")):
  try:
      task_repository.delete_one({'_id': ObjectId(_id)})
  except Exception as e:
      print("ERROR deleting", e)

# Add a task
# POST http://localhost:8080/api/tasks/62b4ca25e32e1449255247be
# Adds a task to the database
@app.post("/tasks")
def add_task(taskFromUser: Task):
  count = task_repository.count()
  taskToInsert = {
      "text": taskFromUser.text,
      "order": count + 1,
      "completed": False,
      "createdAt": datetime.datetime.now().isoformat()
    }
    
  x = task_repository.insert_one(taskToInsert).inserted_id
  
  value = task_repository.find_one(x)

  newTask = {
    "_id": str(x),
    "text": value["text"],
    "order": value["order"],
    "completed": value["completed"],
    "createdAt": value["createdAt"]
  }
  return newTask
