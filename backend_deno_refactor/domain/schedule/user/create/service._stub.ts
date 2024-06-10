import type { Result } from "../../../lang/result.ts";
import type { Session } from "../../../session/model.ts";
import type { UserCreateService } from "./service.ts";
import { buildOk } from "../../../lang/result.ts";

export class UserCreateServiceStub implements UserCreateService {
    constructor(private readonly session: Session) {}

    public create(): Promise<Result<Session>> {
        return Promise.resolve(buildOk(this.session));
    }
}
