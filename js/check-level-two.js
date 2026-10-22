const button = document.getElementById("start-update");
const input = document.getElementById("sudo-pw");

if (sessionStorage.getItem("levelOnePassed") !== "true") {
    window.location.replace("level-one.html");
}

async function checkInput() {
    if (input.value.trim().toLowerCase() == "chaos") {
        sessionStorage.setItem("levelTwoPassed", "true");
        window.location.href = "level-three.html";
    } else {
        window.location.href = "level-two.html";
        document.getElementById("config-input").value = "";
    }
}

button.addEventListener("click", checkInput);
input.addEventListener("keydown", e => { if (e.key === 'Enter') {checkInput()}});