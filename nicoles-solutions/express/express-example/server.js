const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const foodRoutes = require("./routes.js");
app.use("/", foodRoutes);
const port = 8080;

//endpoints
app.get("/", (request, response) => {
  response.send("Hello World");
});
app.get("/lorem", (request, response) => {
  response.send(`
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `);
});
const aboutMe = {
  firstName: "Nicole",
  lastName: "Bush",
  profession: "Developer",
  languages: {
    programming: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],
    spoken: ["English", "Thai"],
  },
};
app.get("/about", (request, response) => {
  response.json(aboutMe);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
