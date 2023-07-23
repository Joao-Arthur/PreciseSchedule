import type { Schema } from "../../../validation/Schema.ts";
import type { UserUpdateModel } from "./model.ts";

export const userUpdateValidation: Schema<UserUpdateModel> = {
    firstName: [
        { v: "str" },
        { v: "strMinLen", min: 1 },
        { v: "strMaxLen", max: 256 },
    ],
    birthdate: [
        { v: "dt" },
        { v: "dtMin", min: "1970-01-01" },
    ],
    email: [
        { v: "email" },
        { v: "strMaxLen", max: 256 },
    ],
    username: [
        { v: "str" },
        { v: "strMinLen", min: 1 },
        { v: "strMaxLen", max: 32 },
    ],
    password: [
        { v: "str" },
        { v: "strMinLen", min: 8 },
        { v: "strMaxLen", max: 32 },
        { v: "strMinNum", min: 1 },
        { v: "strMinUpper", min: 1 },
        { v: "strMinLower", min: 1 },
        { v: "strMinSpecial", min: 1 },
    ],
};