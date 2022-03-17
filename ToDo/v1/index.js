const list = {
   "create a task": "In Progress",
   "make a bed": "Done",
   "write a post": "To Do",
   gog: "Done",
   post: "To Do",
};

const listStatus = ["To Do", "In Progress", "Done"];

function changeStatus(nameTask, status) {
   nameTask in list ? (list[nameTask] = status) : console.log("unknown task");
}

function addTask(nameTask) {
   list[nameTask] = "To Do";
}

function deleteTask(nameTask) {
   delete list[nameTask];
}

function showList() {
   for (const item of listStatus) {
      console.log(item + ":");
      for (const key in list) {
         list[key] === item && console.log(key + ",");
      }
   }
}

addTask("dead cat");
deleteTask("write a post");
changeStatus("create a task", "Done");
showList();
