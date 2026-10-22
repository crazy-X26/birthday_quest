const button = document.getElementById("start-build");
const input = document.getElementById("config-input");

async function checkInput() { 
    if (input.value.trim().toLowerCase() == "kyokushin") {
        sessionStorage.setItem("levelOnePassed", "true");
        window.location.href = "level-two.html";
    } else {
        window.location.href = "level-one.html";
        document.getElementById("config-input").value = "";
    }
}

button.addEventListener("click", checkInput);
input.addEventListener("keydown", e => { if (e.key === 'Enter') {checkInput()}});