import type { Result } from "../../../../lang/result.ts";
import type { Event } from "../../model.ts";
import type { DateCreateService } from "./service.ts";
import { buildOk } from "../../../../lang/result.ts";

export class DateCreateServiceStub implements DateCreateService {
    constructor(private readonly event: Event) {}

    public create(): Promise<Result<Event>> {
        return Promise.resolve(buildOk(this.event));
    }
}