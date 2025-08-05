import { scheduleFecthByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay() {
    // Get input date
    const date = selectedDate.value;

    // Fetches API schedules
    const dailySchedules = await scheduleFecthByDay({ date });

    // Show schedules
    schedulesShow({ dailySchedules });

    // Render available hours
    hoursLoad({ date, dailySchedules });
}
