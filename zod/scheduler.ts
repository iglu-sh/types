import {z} from "zod"
import {valid_build_states as type_build_states} from "../core/db";
const valid_build_states:type_build_states[] = ["created", "claimed", "starting", "running", "failed", "success", "aborted"]
export const controllerStateUpdateSchema = z.object({
    old_state: z.enum(valid_build_states),
    new_state: z.enum(valid_build_states),
    timestamp: z.date(),
    job_id: z.number(),
})