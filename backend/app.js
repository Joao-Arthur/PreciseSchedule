require("ts-node/register");
process.chdir(__dirname);

let sails;
let rc;

try {
  sails = require("sails");
  rc = require("sails/accessible/rc");
} catch (err) {
  console.error(
    "Encountered an error when attempting to load project:",
    err.stack
  );
  return;
}

sails.lift(rc("sails"));
