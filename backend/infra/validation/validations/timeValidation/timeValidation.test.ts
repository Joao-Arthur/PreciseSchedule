import { assertEquals } from "std/testing/asserts.ts";
import { timeValidation } from "./timeValidation.ts";
import { TimeValidationError } from "./TimeValidationError.ts";

const v = { v: "time" } as const;

Deno.test("timeValidation valid", () => {
    assertEquals(timeValidation(v, "10:00"), undefined);
    assertEquals(timeValidation(v, "23:59"), undefined);
});

Deno.test("timeValidation null", () => {
    assertEquals(timeValidation(v, undefined), new TimeValidationError());
    assertEquals(timeValidation(v, null), new TimeValidationError());
});

Deno.test("timeValidation invalid", () => {
    assertEquals(timeValidation(v, 1), new TimeValidationError());
    assertEquals(timeValidation(v, ""), new TimeValidationError());
    assertEquals(timeValidation(v, true), new TimeValidationError());
    assertEquals(timeValidation(v, []), new TimeValidationError());
    assertEquals(timeValidation(v, {}), new TimeValidationError());
    assertEquals(timeValidation(v, new Date()), new TimeValidationError());
});