function generateChoices() {
    const name = document.getElementById("name").value;
    const numChoices = document.getElementById("numChoices").value;
    const formStep1 = document.getElementById("formStep1");
    const formStep2 = document.getElementById("formStep2");
    const choicesContainer = document.getElementById("choicesContainer");

    if (name === "" || numChoices === "") {
        alert("Nama dan Jumlah Pilihan harus diisi!");
        return;
    }

    formStep1.style.display = "none";
    formStep2.style.display = "block";
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

    let choices = [];
    for (let i = 1; i <= numChoices; i++) {
        const choice = document.getElementById(`choice${i}`).value;
        if (choice === "") {
            alert("Semua pilihan harus diisi!");
            return;
        }
        choices.push(choice);
    }

    formStep2.style.display = "none";
    formStep3.style.display = "block";

    radioButtonContainer.innerHTML = `
        <label for="selection">Pilihan:</label><br>
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

    if (!selectedChoice) {
        alert("Pilih salah satu pilihan!");
        return;
    }

    formStep3.style.display = "none";
    result.style.display = "block";

    let choicesText = [];
    for (let i = 1; i <= numChoices; i++) {
        choicesText.push(document.getElementById(`choice${i}`).value);
    }

    resultText.innerHTML = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${numChoices} pilihan yaitu ${choicesText.join(", ")} dan saya memilih ${selectedChoice.value}.`;
}