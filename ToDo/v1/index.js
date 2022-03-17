let list = [
   {
      id: 1,
      name: "create a post",
      status: "TODO",
      priority: "low",
   },
   {
      id: 2,
      name: "make a bed",
      status: "Done",
      priority: "high",
   },
   {
      id: 3,
      name: "write a post",
      status: "TODO",
      priority: "high",
   },
   {
      id: 4,
      name: "make a desk",
      status: "TODO",
      priority: "high",
   },
];

function changeStatus(nameTask, status) {
   for (const item of list) {
      item.status = item.name === nameTask ? status : item.status;
   }
}

function addTask(nameTask) {
   list.push({
      id: list[list.length - 1].id + 1 || 1,
      name: nameTask,
      status: "TODO",
      priority: "high",
   });
}

function deleteTask(nameTask) {
   list = list.filter(function (item) {
      return item.name !== nameTask;
   });
}

function showBy(parameter) {
   function showing(arrayParam) {
      for (const param of arrayParam) {
         console.log(param + ":");
         for (const item of list) {
            item[parameter] === param && console.log(item.name + ",");
         }
      }
   }
   const grouping = {
      status: function () {
         const arrayParam = ["TODO", "Done"];
         showing(arrayParam);
      },
      priority: function () {
         const arrayParam = ["high", "low"];
         showing(arrayParam);
      },
   };
   grouping[parameter]();
}

addTask("dead cat");
deleteTask("write a post");
addTask("ead cat");
changeStatus("create a post", "Done");
showBy("priority");
