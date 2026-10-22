const button = document.getElementById("check-package");
const input = document.getElementById("package-to-check");

if (sessionStorage.getItem("levelTwoPassed") !== "true") {
    window.location.replace("level-two.html");
} else if (sessionStorage.getItem("levelOnePassed") !== "true") {
    window.location.replace("level-one.html");
}

async function checkInput() {
    if (input.value.trim().toLowerCase() == "birthday-gift") {
        sessionStorage.setItem("levelThreePassed", "true");
        window.location.href = "congrats.html";
    } else {
        window.location.href = "level-three.html";
        document.getElementById("package-to-check").value = "";
    }
}

button.addEventListener("click", checkInput);
input.addEventListener("keydown", e => { if (e.key === 'Enter') {checkInput()}});