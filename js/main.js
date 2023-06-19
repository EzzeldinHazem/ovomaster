const themeButton = document.getElementById('theme-button');
const lightTheme = 'dark-theme';

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
})

let close = document.getElementById('close');
let sidebar = document.getElementById('sidebar');

close.onclick = function () {
    sidebar.classList.toggle('active');
}

const inputBox = document.getElementById('input-box');
const listBox = document.getElementById('list-task');

function addTask() {
    if (inputBox.value === '') {
        addTask.onclick = function () {
            addTask = false;
        }
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listBox.addEventListener("click", function (e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)