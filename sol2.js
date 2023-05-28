const projects = [
    {
      name: "Project 1",
      client: "Client A",
      tasks: [
        {
          title: "Task 1",
          assignee: "Alice",
          status: "In Progress",
          dueDate: "2023-05-31"
        },
        {
          title: "Task 2",
          assignee: "Bob",
          status: "Completed",
          dueDate: "2023-05-28"
        },
        {
          title: "Task 3",
          assignee: "Charlie",
          status: "Pending",
          dueDate: "2023-06-10"
        }
      ]
    }
    // ... (more projects)
  ];
  
  function findOverdueTasks(date) {
    const overdueTasks = [];
  
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.dueDate < date) {
          overdueTasks.push(task);
        }
      });
    });
  
    return overdueTasks;
  }
  
  function assignTaskToEmployee(projectName, taskTitle, assigneeName) {
    const project = projects.find((project) => project.name === projectName);
    if (!project) {
      console.log(`Project '${projectName}' does not exist.`);
      return;
    }
  
    const task = project.tasks.find((task) => task.title === taskTitle);
    if (!task) {
      console.log(
        `Task '${taskTitle}' does not exist in project '${projectName}'.`
      );
      return;
    }
  
    task.assignee = assigneeName;
    console.log(
      `Task '${taskTitle}' assigned to '${assigneeName}' successfully.`
    );
  }
  
  function updateTaskStatus(projectName, taskTitle, newStatus) {
    const project = projects.find((project) => project.name === projectName);
    if (!project) {
      console.log(`Project '${projectName}' does not exist.`);
      return;
    }
  
    const task = project.tasks.find((task) => task.title === taskTitle);
    if (!task) {
      console.log(
        `Task '${taskTitle}' does not exist in project '${projectName}'.`
      );
      return;
    }
  
    task.status = newStatus;
    console.log(
      `Task '${taskTitle}' status updated to '${newStatus}' successfully.`
    );
  }
  
 
  
  findOverdueTasks(projects, "2023-05-01");
  // Output: Returns an array of tasks with a due date before '2023-05-01'
  
  assignTaskToEmployee(projects, "Project 1", "Task 1", "Alice");
  // Output: Assigns the task with title 'Task 1' in project 'Project 1' to the employee with name 'Alice'
  
  updateTaskStatus(projects, "Project 1", "Task 1", "In Progress");
  // Output: Updates the task's status in the project with name 'Project 1'
  