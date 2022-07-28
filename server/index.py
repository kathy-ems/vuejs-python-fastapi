from datetime import date
import datetime
from typing import Optional
from fastapi import FastAPI, Path
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()
client = MongoClient("mongodb://localhost/vue-todo")
db = client["vue-todo"]
task_repository = db["tasks"]

class Task(BaseModel):
  text: str
  completed: bool
  order: Optional[int] = None
  createdAt: Optional[date] = None
  # _id: Optional[str] = None
  # id: Optional[ObjectIdField] = Field(alias="_id")
  # id: ObjectIdField = Field(alias="_id") 
  
  # class Config:
    # The ObjectIdField creates an bson ObjectId value, so its necessary to setup the json encoding
    # json_encoders = {ObjectId: str}

tasks =  [
   {
    "_id": "62b4ca25e32e1449255247be",
    "text": "Get Vegan Milk",
    "order": 0,
    "completed": False,
    "createdAt": "2022-06-23T20:16:37.871Z"
   },
   {
    "_id": "62b4b915c8a9c69c8153c0e9",
    "text": "Library",
    "order": 1,
    "completed": True,
    "createdAt": "2022-06-23T19:05:13.026Z"
   }
  ]

@app.get("/")
def get_task():
    return ["hello world"]

@app.get("/tasks")
def get_task():
  x = list(task_repository.find({},{ "_id": 0}))
  return x

@app.get("/tasks/{_id}")
def get_task(_id: int = Path(None, description="The ID of the task")):
    return tasks[_id]

@app.post("/tasks")
def add_task(taskFromUser: Task):
  count = task_repository.count()
  taskToInsert = {
      "text": taskFromUser.text,
      "order": count + 1,
      "completed": taskFromUser.completed,
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


