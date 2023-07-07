import type { CreateEventModel } from "@ps/domain/schedule/event/create/CreateEventModel.ts";
import type { CreateEventService } from "@ps/domain/schedule/event/create/CreateEventService.ts";
import type { CreateEventController } from "@ps/application/schedule/event/create/CreateEventController.ts";
import type { HTTPRequest } from "@ps/application/http/HTTPRequest.ts";
import type { HTTPResponse } from "@ps/application/http/HTTPResponse.ts";

import { ValidationError } from "@ps/domain/validation/ValidationError.ts";
import { ok } from "@ps/application/http/builder/ok.ts";
import { badRequest } from "@ps/application/http/builder/badRequest.ts";
import { internalServerError } from "@ps/application/http/builder/internalServerError.ts";

export class CreateEventControllerImpl
    implements CreateEventController {
    constructor(private readonly service: CreateEventService) {}

    public async handle(
        request: HTTPRequest<CreateEventModel, never>,
    ): Promise<
        HTTPResponse
    > {
        try {
            const result = await this.service.create(request.body);
            return ok(result);
        } catch (e: unknown) {
            if (e instanceof ValidationError) {
                return badRequest(e.result);
            }
            return internalServerError();
        }
    }
}
