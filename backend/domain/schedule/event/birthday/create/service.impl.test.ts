import { assertEquals } from "std/testing/asserts.ts";
import { ValidatorStub } from "../../../../validation/service._stub.ts";
import { eventStub } from "../../model._stub.ts";
import { EventCreateServiceStub } from "../../create/service._stub.ts";
import { birthdayCreateModelStub } from "./model._stub.ts";
import { BirthdayCreateFactoryStub } from "./factory._stub.ts";
import { BirthdayCreateServiceImpl } from "./service.impl.ts";

Deno.test("BirthdayCreateServiceImpl", async () => {
    assertEquals(
        await new BirthdayCreateServiceImpl(
            new ValidatorStub(),
            new BirthdayCreateFactoryStub(eventStub),
            new EventCreateServiceStub(eventStub),
        ).create(eventStub.user, birthdayCreateModelStub),
        eventStub,
    );
});
