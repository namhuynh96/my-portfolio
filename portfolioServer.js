const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join("my-portfolio-public", "build")));
app.use((req, res, next) => {
  res.sendFile(
    path.resolve(__dirname, "my-portfolio-public", "build", "index.html")
  );
});

const port = 10001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
