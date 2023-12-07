const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!"); /*if the search box or input box is empty the box will give the message yoiu must enter a something!*/
       }
       else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); /*else means if we write something in the search box or input box it will create e li element i mean it will create a list after we write something on it*/
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       }
       inputBox.value = ""; /* this will automatically clean the text afer we click the add button */
       savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); /*if we clicked the li stored element it will work on checked element in the css and turn it on the clicked symbol and cross line on words respectively */
        savedata();

    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); /* if we clicked the cross button i mean the hover of cross line beside the li element it will remove the element from the list and delete the parent element respectively */
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML); /* data gonna be stored the in web with these code listcontainer.innerHTML will save data in the local storage */
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask(); /* this two code will store the data even if we closed the web */