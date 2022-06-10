const express = require("express");
const app = express();
app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
