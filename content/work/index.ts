import type { WorkItem } from "@/lib/schemas";
import { clinicBooking } from "./clinic-booking";
import { restaurantOrders } from "./restaurant-orders";

/** Adding a work item = new file + one line here (runbook operation). */
export const workItems: WorkItem[] = [clinicBooking, restaurantOrders];
