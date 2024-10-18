const Input = document.getElementById("input");
const List = document.getElementById("list");

function addLabel() {
    if (Input.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = Input.value;
        List.appendChild(li);
    }
    Input.value = "";
    saveData();
}

function saveData() {
    localStorage.setItem("data", List.innerHTML);
}