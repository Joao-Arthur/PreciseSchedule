import type { CreateEventModel } from "../create/CreateEventModel.ts";
import type { CreateBirthdayEvent } from "./CreateBirthdayEvent.ts";

export type CreateBirthdayEventFactory = {
    readonly build: (event: CreateBirthdayEvent) => CreateEventModel;
};
