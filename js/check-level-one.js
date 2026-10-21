const button = document.getElementById("start-build");

async function checkInput() {
    let input = document.getElementById("config-input").value;
    
    if (input.length > 6) {
        window.location.href = "level-two.html";
    } else {
        window.location.href = "level-one.html";
        document.getElementById("config-input").value = "";
    }
}

button.addEventListener("click", checkInput);