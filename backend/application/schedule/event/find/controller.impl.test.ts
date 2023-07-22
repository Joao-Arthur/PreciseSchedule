import { assertEquals } from "std/testing/asserts.ts";
import { EventFindControllerImpl } from "./controller.impl.ts";
import { EventFindServiceStub } from "@ps/domain/schedule/event/find/service._stub.ts";
import { eventStub } from "@ps/domain/schedule/event/model._stub.ts";
import { httpRequestParamsStub } from "../../../http/request/model._stub.ts";
import { ok } from "../../../http/response/ok/builder.ts";

Deno.test("EventFindControllerImpl", async () => {
    assertEquals(
        await new EventFindControllerImpl(
            new EventFindServiceStub(eventStub),
        ).handle(eventStub.user, httpRequestParamsStub),
        ok(eventStub),
    );
});
