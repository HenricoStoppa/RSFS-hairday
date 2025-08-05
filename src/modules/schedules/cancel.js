import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Gets the id of the item to be removed
            const item = event.target.closest("li");
            const { id } = item.dataset;

            if (id) {
                // User confirm ou cancel
                const isConfirm = confirm(
                    "Tem certeza que deseja cancelar o agendamento?"
                );

                if (isConfirm) {
                    // Request API to delete item
                    await scheduleCancel({ id });

                    // Refresh schedule list
                    schedulesDay();
                }
            }
        }
    });
});
