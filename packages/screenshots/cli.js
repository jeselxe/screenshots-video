process.on("exit", function (code) {
  return console.log(`Process to exit with code ${code}`);
});
process.on("SIGPIPE", process.exit);
process.stdout.write("HW");
