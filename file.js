const fs = require("fs");

// reading files
// fs.readFile("./global.js", (err, data) => {
//   if (err) return console.log(err, "error");
//   console.log(data.toString(), "data");
// });
lo
// writing files
// fs.writeFile("./global.js", "hello world", (err) => {
//   console.log("file written");
// });
// //  creates a file if file doesnt exist
// fs.writeFile("./global-created.js", "hello world", (err) => {
//   console.log("file written 2");
// });

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) return console.log(err);
    console.log("folder created successfully");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) return console.log(err);
    console.log("folder deleted successfully");
  });
}
// deleting files

// fs.unLink() //this is the function to delete files
