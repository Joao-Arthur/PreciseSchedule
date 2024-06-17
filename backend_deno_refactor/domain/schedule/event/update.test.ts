import { assertEquals } from "@std/assert/assert-equals";
import { ok } from "../../lang/result.ts";
import { dateGeneratorStubBuild } from "../../generator/date.stub.ts";
import {
    appointmentEventUpdateStub,
    appointmentStub,
    appointmentUpdatedStub,
} from "./appointment/model.stub.ts";
import { eventRepoStubBuild } from "./repo.stub.ts";
import { eventUpdate, eventUpdateToEvent } from "./update.ts";

Deno.test("eventUpdateToEvent", () => {
    assertEquals(
        eventUpdateToEvent(
            appointmentEventUpdateStub,
            appointmentStub,
            new Date("2025-07-18T15:43:12.377Z"),
        ),
        appointmentUpdatedStub,
    );
});

Deno.test("eventUpdate", async () => {
    assertEquals(
        await eventUpdate(
            eventRepoStubBuild([], appointmentStub),
            dateGeneratorStubBuild(new Date("2025-07-18T15:43:12.377Z")),
            "user-id",
            "appointment-id",
            appointmentEventUpdateStub,
        ),
        ok(appointmentUpdatedStub),
    );
});