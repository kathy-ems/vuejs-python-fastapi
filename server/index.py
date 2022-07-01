from fastapi import FastAPI, Path
from pydantic import BaseModel

app = FastAPI()

class Task(BaseModel):
  text: str
  completed: bool
  order: int


tasks = {
  1: {
    "text": "Milk",
    "completed": True
  }
}

@app.get("/tasks/")
def get_task(_id: int = Path(None, description="The ID of the task")):
    return tasks

@app.get("/tasks/{_id}")
def get_task(_id: int = Path(None, description="The ID of the task")):
    return tasks[_id]

@app.post("/tasks/")
def add_task(task: Task):
  return tasks #empty dictionary
