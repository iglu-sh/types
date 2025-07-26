export type NotificationType = "new" | "update" | "delete";
export type Notification  = {
    builder_id: string,
    type: NotificationType,
    timestamp: string,
}