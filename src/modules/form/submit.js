import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Actual date
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Show actual date & define minimum date
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        // Get client name
        const name = clientName.value.trim();

        if (!name) {
            return alert("Informe o nome do cliente");
        }

        // Get selected hour
        const hourSelected = document.querySelector(".hour-selected");

        if (!hourSelected) {
            return alert("Selecione um horário.");
        }

        const [hour] = hourSelected.innerText.split(":");

        // Insert hour into date
        const when = dayjs(selectedDate.value).add(hour, "hour");

        // Generate ID
        const id = new Date().getTime();

        console.log(id, name, when);
    } catch (error) {
        alert("Não foi possível realizar o agendamento.");
    }
};
