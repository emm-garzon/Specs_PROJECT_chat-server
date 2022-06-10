const express = require("express");
const app = express();

const {
  msgCreate,
  msgRead,
  msgUpdate,
  msgDelete,
} = require("./controllers/messages_controller.js");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const baseURL = "/api/messages";
app.post(baseURL, msgCreate);
app.get(baseURL, msgRead);
app.put(`${baseURL}/:id`, msgUpdate);
app.delete(`${baseURL}/:id`, msgDelete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server successfully running on port ${port}`);
});
