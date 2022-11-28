"use strict";
let tasks = document.querySelectorAll("li");
let binImg = document.querySelector("img");
tasks.forEach(t => {
    let delBtn = document.createElement("img");
    delBtn.src = "/img/bin.png";
    t.appendChild(delBtn);
    console.log("done!");
});
let input = document.querySelector("input");
let addBtn = document.querySelector("#addBtn");
let binBtn = document.querySelector("img");
addBtn.addEventListener("click", onSend);
function onSend() {
    if (input.value != "") {
        let newTask = input.value;
        let newLi = document.createElement("li");
        let newSpan = document.createElement("span");
        newSpan.textContent = newTask;
        newLi.appendChild(newSpan);
        let newBtn = binBtn.cloneNode(true);
        newLi.appendChild(newBtn);
        newBtn.addEventListener("click", () => {
            newBtn.parentElement.remove();
        });
        let list = document.querySelector("ul");
        list.appendChild(newLi);
        input.value = "";
    }
}
//remove with bin icon
let bin = document.querySelectorAll("img");
bin.forEach(b => {
    b.addEventListener("click", () => {
        b.parentElement.remove();
    });
});
