var items = ["food", "drink", "snacks"];
var ul = document.getElementById("buttonList");
restart();
function restart() {
    createList();
}
function addList() {
    var inputElement = document.getElementById("userInput");
    var inputValue = inputElement.value.trim(); // Trim to remove leading/trailing spaces
    if (inputValue !== "") {
        items.push(inputValue);
        createList();
        inputElement.value = ""; // Clear the input field
    }
}
function createList() {
    ul.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var a =i;
        createButton(items[i], a);
    }
}
function createButton(item, a) {
    var li = document.createElement("li");
    var checkboxId = 'checkbox_' + a;
    var itemlist =item.toUpperCase();
    li.innerHTML = '<span id="check_' + a + '"><input type="checkbox" class="checkbox" id="' + checkboxId + '" onchange="checkboxChanged(' + a + ')">' + itemlist + '</span><button onclick="buttonslice(' + a + ')">-</button>';
    ul.appendChild(li);
}

function buttonslice(a) {
    items.splice(a, 1);
    createList();
};
function checkboxChanged(a) {
    var checkbox = document.getElementById('check_' + a);
    var checkboxInput = document.getElementById('checkbox_' + a);
    
    if (checkboxInput.checked) {
        checkbox.classList.add("pressed");
    } else {
        checkbox.classList.remove("pressed");
    }
}