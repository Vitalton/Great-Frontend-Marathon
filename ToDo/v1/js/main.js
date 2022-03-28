import { btnAddTask, listHigh, listLow } from "./view.js";
let btnStatus = null;
let btnRemoveTask = null;

// storing TODO list
let list = [];

function changeStatus(id, status) {
   for (const item of list) {
      item.status = item.id === id ? status : item.status;
   }
}
function addTask(nameTask, priority = "high") {
   const newId = list.length !== 0 ? list[list.length - 1].id + 1 : 1;
   list.push({
      id: newId,
      name: nameTask,
      status: "TODO",
      priority: priority,
   });
}
function deleteTask(id) {
   list = list.filter(function (item) {
      return item.id !== id;
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
function checkboxList(btnStatus) {
   btnStatus.forEach((checkbox) => {
      checkbox.onclick = function () {
         for (const item of list) {
            if (checkbox.parentNode.dataset.id === String(item.id)) {
               if (item.status === "Done") {
                  changeStatus(item.id, "TODO");
                  checkbox.parentNode.classList.remove("done");
               } else {
                  changeStatus(item.id, "Done");
                  checkbox.parentNode.classList.add("done");
               }
            }
         }
      };
   });
}
function btnRemoveList(btnRemoveTask) {
   btnRemoveTask.forEach((button) => {
      button.onclick = function () {
         for (const item of list) {
            if (button.parentNode.dataset.id === String(item.id)) {
               deleteTask(item.id);
               button.parentNode.remove();
            }
         }
      };
   });
}
function updateList(list) {
   listHigh.innerHTML = "";
   listLow.innerHTML = "";
   const priorityList = {
      high: listHigh,
      low: listLow,
   };
   for (const item of list) {
      let taskClassList = "task__item";
      taskClassList = item.status === "Done" ? "task__item done" : "task__item";
      priorityList[item.priority].insertAdjacentHTML(
         "beforeEnd",
         `<li class="${taskClassList}" data-id="${item.id}">
                  <div class="task__checkbox"></div>
                  <div class="task__text">${item.name}</div>
                  <img src="./img/close-icon.svg" alt="Remove Task" class="close-icon">
               </li>`,
      );
   }
   btnStatus = Array.prototype.slice.call(document.querySelectorAll(".task__checkbox"));
   btnRemoveTask = Array.prototype.slice.call(document.querySelectorAll(".close-icon"));
   checkboxList(btnStatus);
   btnRemoveList(btnRemoveTask);
}
updateList(list);
btnAddTask.forEach((button) => {
   button.onclick = function () {
      const parent = button.parentNode;
      addTask(parent.querySelector(".task__input").value, parent.dataset.priority);
      updateList(list);
      btnStatus = Array.prototype.slice.call(document.querySelectorAll(".task__checkbox"));
      btnRemoveTask = Array.prototype.slice.call(document.querySelectorAll(".close-icon"));
      checkboxList(btnStatus);
      btnRemoveList(btnRemoveTask);
   };
});
