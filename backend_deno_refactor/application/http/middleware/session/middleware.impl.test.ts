import { assertEquals } from "@std/assert/assert-equals";
import { InvalidSessionError } from "@ps/domain/session/invalid/error.ts";
import { maybeSessionStub, sessionStub } from "@ps/domain/session/model._stub.ts";
import { err, ok } from "../../../../domain/lang/result.ts";
import { httpRequestHeadersStub } from "../../request/model._stub.ts";
import { SessionMiddlewareImpl } from "./middleware.impl.ts";

Deno.test("SessionMiddlewareImpl", async () => {
    assertEquals(
        await new SessionMiddlewareImpl(
            new SessionFromRequestServiceStub(sessionStub),
            new ValidateUserSessionServiceStub(),
        ).handle(httpRequestHeadersStub),
        ok(undefined),
    );
    assertEquals(
        await new SessionMiddlewareImpl(
            new SessionFromRequestServiceStub(maybeSessionStub),
            new ValidateUserSessionServiceStub(),
        ).handle(httpRequestHeadersStub),
        err(new InvalidSessionError()),
    );
});
