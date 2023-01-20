import express from "express";
import fs from "fs";
const app = express();

app.post("/video_main", (req, res, next) => {
  console.log(req);
  const video_stream = fs.createWriteStream("vde.mp4");
  req.pipe(video_stream);
  //save the video stream to vde.mp4
});

app.use("*", function (req, res, next) {
  return res.status(404).json({
    status: "FAILURE",
    message: "Not found",
  });
});

app.listen("3000");
// server listening on http://localhost:3000/
