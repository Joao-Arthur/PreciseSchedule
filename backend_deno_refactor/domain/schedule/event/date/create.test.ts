import { assertEquals } from "@std/assert/assert-equals";
import { ok } from "../../../lang/result.ts";
import { idGeneratorStubBuild } from "../../../generator/id.stub.ts";
import { dateGeneratorStubBuild } from "../../../generator/date.stub.ts";
import { eventRepoEmptyStubBuild } from "../repo.stub.ts";
import { dateCreateStub, dateEventCreateStub, dateStub } from "./model.stub.ts";
import { dateCreate, dateCreateToEventCreate } from "./create.ts";

Deno.test("dateCreateToEventCreate", () => {
    assertEquals(
        dateCreateToEventCreate(dateCreateStub),
        dateEventCreateStub,
    );
});

Deno.test("dateCreate", async () => {
    assertEquals(
        await dateCreate(
            eventRepoEmptyStubBuild(),
            idGeneratorStubBuild("date-id"),
            dateGeneratorStubBuild(new Date("2024-06-16T19:16:12.327Z")),
            "user-id",
            dateCreateStub,
        ),
        ok(dateStub),
    );
});
