import { schedulesDay } from "../schedules/load.js";

const selectedDate = document.getElementById("date");

// Refresh hours list when date input changes
selectedDate.onchange = () => schedulesDay();
