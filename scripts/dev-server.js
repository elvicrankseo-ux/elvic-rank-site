// Local preview tooling only: the preview launcher spawns this script from
// outside the project directory, so process.cwd() would otherwise resolve
// to the wrong path (breaking anything relying on cwd, e.g. next/og reading
// from /public). Chdir into the project root before starting Next.
process.chdir(__dirname + "/..");
require("next/dist/bin/next");
