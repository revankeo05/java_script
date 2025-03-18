function generateChoices() {
    const name = document.getElementById("name").value;
    const numChoices = document.getElementById("numChoices").value;
    const formStep1 = document.getElementById("formStep1");
    const formStep2 = document.getElementById("formStep2");
    const choicesContainer = document.getElementById("choicesContainer");
    const inputs = document.querySelectorAll("#formStep1 input");
    const button = document.querySelector("#formStep1 button");

    if (name === "" || numChoices === "") {
        alert("Nama dan Jumlah Pilihan harus diisi!");
        return;
    }

    inputs.forEach(input => input.disabled = true);
    button.disabled = true;

    formStep2.classList.remove("hidden"); 
    choicesContainer.innerHTML = "";

    for (let i = 1; i <= numChoices; i++) {
        choicesContainer.innerHTML += `
            <label for="choice${i}">Pilihan ${i}:</label>
            <input type="text" id="choice${i}" placeholder="Masukkan Teks Pilihan ${i}">
        `;
    }
}

function generateRadioButtons() {
    const numChoices = document.getElementById("numChoices").value;
    const radioButtonContainer = document.getElementById("radioButtonContainer");
    const formStep2 = document.getElementById("formStep2");
    const formStep3 = document.getElementById("formStep3");
    const inputs = document.querySelectorAll("#choicesContainer input");
    const button = document.querySelector("#formStep2 button");

    let choices = [];
    for (let i = 1; i <= numChoices; i++) {
        const choice = document.getElementById(`choice${i}`).value;
        if (choice === "") {
            alert("Semua pilihan harus diisi!");
            return;
        }
        choices.push(choice);
    }

    inputs.forEach(input => input.disabled = true);
    button.disabled = true;

    formStep3.classList.remove("hidden"); 

    radioButtonContainer.innerHTML = `
        <label for="selection">Pilih salah satu:</label><br>
        ${choices.map((choice, index) => {
            return `
                <input type="radio" name="selection" value="${choice}" id="choice${index + 1}">
                <label for="choice${index + 1}">${choice}</label><br>
            `;
        }).join("")}
    `;
}

function displaySelection() {
    const name = document.getElementById("name").value;
    const numChoices = document.getElementById("numChoices").value;
    const formStep3 = document.getElementById("formStep3");
    const result = document.getElementById("result");
    const resultText = document.getElementById("resultText");
    const selectedChoice = document.querySelector('input[name="selection"]:checked');
    const inputs = document.querySelectorAll("#radioButtonContainer input");
    const button = document.querySelector("#formStep3 button");

    if (!selectedChoice) {
        alert("Pilih salah satu pilihan!");
        return;
    }

    inputs.forEach(input => input.disabled = true);
    button.disabled = true;

    result.classList.remove("hidden"); 

    let choicesText = [];
    for (let i = 1; i <= numChoices; i++) {
        choicesText.push(document.getElementById(`choice${i}`).value);
    }

    resultText.innerHTML = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${numChoices} pilihan yaitu ${choicesText.join(", ")} dan saya memilih <strong>${selectedChoice.value}</strong>.`;
}
