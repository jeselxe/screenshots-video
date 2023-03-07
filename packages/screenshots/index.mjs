import yargs from "yargs";
import inquirer from "inquirer";
import main from "./src/main.mjs";
import config from "@screenshots/config";

main(new Date(config.dates.start));

// const argv = yargs(process.argv)
//   .scriptName("screenshots")
//   .usage("$0 <cmd> [args]")
//   .command("--date [<d>]", "Gen Screenshots", {
//     date: {
//       alias: "d",
//       type: "string",
//     },
//   })
//   .option("d", {
//     alias: "date",
//     description: "Fecha inicial",
//   })
//   .string("d")
//   .option("f", {
//     alias: "force",
//     description: "Don't ask for confirmation",
//     default: false,
//   })
//   .boolean("f")
//   .option("v", {
//     alias: "verbose",
//     description: "Show logs",
//     default: false,
//   })
//   .boolean("v")
//   .help()
//   .alias("h", "help").argv;

// if (argv.d) {
//   const date = new Date(argv.d);
//   if (date) {
//     main(date, { force: argv.f, verbose: argv.v });
//   }
// } else {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "output",
//         message: "Fecha de inicio (YYYY-MM-DD):",
//         default: "2023-01-01",
//       },
//     ])
//     .then(({ output }) => {
//       main(new Date(output), { force: argv.f, verbose: argv.v });
//     });
// }
