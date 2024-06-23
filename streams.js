const fs = require("fs");
const readStream = fs.createReadStream("./docs/blog.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./docs/blog-2.txt", {
  encoding: "utf8",
});

//  on.('data' is for anytime we receive a data event
// readStream.on("data", (chunk) => {
//   console.log("--- NEW CHUNK ---");
//   console.log(chunk);
//   writeStream.write("\nNEW WRITE CHUNK\n");
//   writeStream.write(chunk);
// });

// writeStream.on("data", (chunk) => {
//   console.log("--- NEW CHUNK ---");
//   console.log(chunk);
// });

// piping

readStream.pipe(writeStream);
