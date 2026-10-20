const dynamicText = document.querySelector(".cli-command");

let speed = 35;

async function typeEffect(element) {
    const text = element.textContent;
    console.log(text);

    element.textContent = "";
    element.style.visibility = "visible";

    for (let x = 0; x < text.length; x++) {
        element.textContent += text[x];

        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

document.addEventListener("DOMContentLoaded", typeEffect(dynamicText));