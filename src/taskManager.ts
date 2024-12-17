import * as fs from "fs";
import * as path from "path";

interface Task {
  id: number;
  description: string;
  status: "todo" | "in-progress" | "done";
  createdAt: string;
  updatedAt: string;
}

export class TaskManager {
  private filePath: string;

  constructor() {
    this.filePath = path.join(__dirname, "tasks.json");
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  private loadTasks(): Task[] {
    const data = fs.readFileSync(this.filePath, "utf-8");
    return JSON.parse(data);
  }

  private saveTasks(tasks: Task[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(tasks, null, 2));
  }

  addTask(description: string): void {
    const tasks = this.loadTasks();
    const newTask: Task = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      description,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    this.saveTasks(tasks);
    console.log(`Task added successfully (ID: ${newTask.id})`);
  }

  updateTask(id: number, newDescription: string): void {
    const tasks = this.loadTasks();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      console.log("Task not found.");
      return;
    }
    task.description = newDescription;
    task.updatedAt = new Date().toISOString();
    this.saveTasks(tasks);
    console.log("Task updated successfully.");
  }

  deleteTask(id: number): void {
    const tasks = this.loadTasks();
    const filteredTasks = tasks.filter((t) => t.id !== id);
    if (tasks.length === filteredTasks.length) {
      console.log("Task not found.");
      return;
    }
    this.saveTasks(filteredTasks);
    console.log("Task deleted successfully.");
  }

  markTaskInProgress(id: number): void {
    this.updateTaskStatus(id, "in-progress");
  }

  markTaskDone(id: number): void {
    this.updateTaskStatus(id, "done");
  }

  private updateTaskStatus(id: number, status: "in-progress" | "done"): void {
    const tasks = this.loadTasks();
    const task = tasks.find((t) => t.id === id);
    if (!task) {
      console.log("Task not found.");
      return;
    }
    task.status = status;
    task.updatedAt = new Date().toISOString();
    this.saveTasks(tasks);
    console.log(`Task marked as ${status}.`);
  }

  listTasks(): void {
    const tasks = this.loadTasks();
    this.printTasks(tasks);
  }

  listTasksByStatus(status: string): void {
    const tasks = this.loadTasks();
    const filteredTasks = tasks.filter((t) => t.status === status);
    this.printTasks(filteredTasks);
  }

  private printTasks(tasks: Task[]): void {
    if (tasks.length === 0) {
      console.log("No tasks found.");
      return;
    }
    tasks.forEach((task) => {
      console.log(
        `ID: ${task.id} | ${task.description} | Status: ${task.status} | Updated: ${task.updatedAt}`
      );
    });
  }
}
