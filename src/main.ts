import { TaskManager } from "./taskManager";

const taskManager = new TaskManager();

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "add":
    taskManager.addTask(args[0]);
    break;
  case "update":
    taskManager.updateTask(parseInt(args[0]), args[1]);
    break;
  case "delete":
    taskManager.deleteTask(parseInt(args[0]));
    break;
  case "mark-in-progress":
    taskManager.markTaskInProgress(parseInt(args[0]));
    break;
  case "mark-done":
    taskManager.markTaskDone(parseInt(args[0]));
    break;
  case "list":
    if (args[0]) {
      taskManager.listTasksByStatus(args[0]);
    } else {
      taskManager.listTasks();
    }
    break;
  default:
    console.log(
      "Invalid command. Available commands: add, update, delete, mark-in-progress, mark-done, list"
    );
}
