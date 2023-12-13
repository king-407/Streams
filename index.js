const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  try {
    if (req.url != "/") {
      res.end();
    }

    // res.writeHead(200, {
    //   "Content-Type": "video/mp4",
    //   "Accept-Ranges": "bytes",
    // });

    // const videoStream = fs.createReadStream("check.mp4");

    // // Pipe the video stream to the response
    // videoStream.pipe(res);

    // const file = fs.readFileSync("sample.txt");
    // res.end(file);   //the bad way

    // const file = fs.createReadStream("sample.txt");
    // file.pipe(res);

    // const file = fs.readFileSync("sample.txt");      // Copying contents of one file to another
    // fs.writeFileSync("output.txt", file);                   using a bad way//

    const file = fs.createReadStream("sample.txt");
    const writeFile = fs.createWriteStream("output.txt"); //Copyong big file to another good way
    file.on("data", (chunk) => {
      writeFile.write(chunk);
    });
    res.end();
  } catch (e) {
    console.log(e);
  }
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
