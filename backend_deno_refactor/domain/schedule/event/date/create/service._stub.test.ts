import { assertEquals } from "@std/assert/assert-equals";
import { eventStub } from "../../model._stub.ts";
import { DateCreateServiceStub } from "./service._stub.ts";
import { buildOk } from "../../../../lang/result.ts";

Deno.test("DateCreateServiceStub", async () => {
    assertEquals(
        await new DateCreateServiceStub(eventStub).create(),
        buildOk(eventStub),
    );
});
