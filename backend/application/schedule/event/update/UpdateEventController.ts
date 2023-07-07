import type { Event } from "@ps/domain/schedule/event/Event.ts";
import type { UpdateEventModel } from "@ps/domain/schedule/event/update/UpdateEventModel.ts";
import type { HTTPRequest } from "../../../http/HTTPRequest.ts";
import type { HTTPResponse } from "../../../http/HTTPResponse.ts";
import type { IdParam } from "../../../http/IdParam.ts";

export type UpdateEventController = {
    readonly handle: (
        request: HTTPRequest<UpdateEventModel, IdParam<Event["id"]>>,
    ) => Promise<HTTPResponse>;
};
