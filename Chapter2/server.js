const express = require("express");
const app = express();
const PORT = 3000;

//HTTP VERBS && Routes(or paths)
app.get("/", (req, res) => {
  console.log("GET request received at /", req.method);
  res.sendStatus(200);
});
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
