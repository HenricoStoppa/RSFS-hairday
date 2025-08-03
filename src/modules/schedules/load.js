import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export function schedulesDay() {
    // Get input date
    const date = selectedDate.value;

    // Render available hours
    hoursLoad({ date });
}
