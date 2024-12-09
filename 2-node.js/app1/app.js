// ES Module : EcmaScript
// import express from 'express';

// CJS Module : CommonJS 前の書き方
const express = require('express');
const app = express();
const port = 3000;

// app.get('/',(_req, res) => {
//   res.send('Hello World!');
// })

app.use("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})