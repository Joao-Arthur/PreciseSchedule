import type { Result } from "../../../lang/result.ts";
import type { User } from "../../user/model.ts";
import type { Event } from "../model.ts";
import type { EventFindService } from "../find/service.ts";
import type { EventUpdateModel } from "./model.ts";
import type { EventUpdateService } from "./service.ts";
import type { EventUpdateFactory } from "./factory.ts";
import type { EventUpdateRepository } from "./repository.ts";
import { buildOk } from "../../../lang/result.ts";

export class EventUpdateServiceImpl implements EventUpdateService {
    constructor(
        private readonly repository: EventUpdateRepository,
        private readonly factory: EventUpdateFactory,
        private readonly eventFindService: EventFindService,
    ) {}

    public async update(
        userId: User["id"],
        id: Event["id"],
        event: EventUpdateModel,
    ): Promise<Result<Event>> {
        const existingEvent = await this.eventFindService.findByUserAndId(userId, id);
        if (existingEvent.type === "err") {
            return existingEvent;
        }
        const buildedEvent = this.factory.build(event, existingEvent.data);
        await this.repository.update(buildedEvent);
        return buildOk(buildedEvent);
    }
}