// const { Readable, Writable } = require("stream");
// const readable = new Readable({
//   read() {
//     console.log("data coming");
//   },
// });

// const writable = new Writable({
//   write(s) {
//     console.log("Writing " + s);
//   },
// });

// readable.on("data", (chunk) => {
//   writable.write(chunk);
// });
// readable.push("hello");
const fs = require("fs");
const { Readable, Transform } = require("stream");
const writable = fs.createWriteStream("output.txt");
const readable = new Readable({
  read() {},
});
const myTransform = new Transform({
  transform(chunk, encoding, callback) {
    // Transform the data here
    const transformedData = chunk.toString().toUpperCase();

    callback(null, transformedData);
  },
});
// readable.on("data", (chunk) => {
//   writable.write(chunk);
// });
// const writable = new Writable({
//   write: function (s) {
//     console.log(s);
//   },
// });
readable.push("Hello World");
readable.pipe(myTransform).pipe(writable);
