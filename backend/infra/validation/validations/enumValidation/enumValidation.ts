import type { EnumVal } from "@ps/domain/validation/Validation.ts";

import { EnumValidationError } from "./EnumValidationError.ts";

export function enumValidation(val: EnumVal, value: unknown): EnumValidationError | undefined {
    if (!val.values.includes(value)) {
        return new EnumValidationError(val.values);
    }
}
