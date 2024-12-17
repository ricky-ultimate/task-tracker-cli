# **Task Tracker CLI**

A simple command-line interface (CLI) application to manage and track your tasks. This project allows you to add, update, delete, and list tasks, as well as mark tasks as "in progress" or "done". Tasks are stored in a JSON file for persistence.

---

## **Features**
- Add a new task.
- Update or delete existing tasks.
- Mark tasks as `in progress` or `done`.
- List all tasks or filter tasks by status:
  - To Do
  - In Progress
  - Done

---

## **Installation**

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/ricky-ultimate/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run the CLI:
   ```bash
   npm run start <command>
   ```

---

## **Usage**

The CLI supports the following commands:

### **1. Add a Task**
```bash
npm run start add "Task description"
```
Example:
```bash
npm run start add "Buy groceries"
# Output: Task added successfully (ID: 1)
```

### **2. Update a Task**
```bash
npm run start update <task_id> "New task description"
```
Example:
```bash
npm run start update 1 "Buy groceries and cook dinner"
# Output: Task updated successfully.
```

### **3. Delete a Task**
```bash
npm run start delete <task_id>
```
Example:
```bash
npm run start delete 1
# Output: Task deleted successfully.
```

### **4. Mark a Task as In Progress**
```bash
npm run start mark-in-progress <task_id>
```
Example:
```bash
npm run start mark-in-progress 1
# Output: Task marked as in progress.
```

### **5. Mark a Task as Done**
```bash
npm run start mark-done <task_id>
```
Example:
```bash
npm run start mark-done 1
# Output: Task marked as done.
```

### **6. List All Tasks**
```bash
npm run start list
```
Example Output:
```
ID: 1 | Buy groceries | Status: done | Updated: 2024-06-01T12:00:00Z
ID: 2 | Finish homework | Status: todo | Updated: 2024-06-01T12:05:00Z
```

### **7. List Tasks by Status**
To list tasks based on their status (**todo**, **in-progress**, **done**), use:
```bash
npm run start list <status>
```
Example:
```bash
npm run start list done
# Output:
# ID: 1 | Buy groceries | Status: done | Updated: 2024-06-01T12:00:00Z
```

---

## **Project Structure**

```
task-tracker-cli/
├── src/                  # Source TypeScript files
│   ├── main.ts           # Main CLI logic
│   ├── taskManager.ts    # Task management logic
├── dist/                 # Compiled JavaScript files
├── tasks/                # Folder to store tasks.json
│   └── tasks.json        # JSON file storing tasks
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Documentation file
```

---

## **Requirements**
- Node.js (v14+)
- TypeScript
