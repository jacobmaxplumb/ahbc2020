const express = require("express");
const aboutMeRoutes = express.Router();

const aboutMe = {
  firstName: "Nicole",
  lastName: "Bush",
  profession: "Developer",
  languages: {
    programming: ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "SQL"],
    spoken: ["English", "Thai"],
  },
};

aboutMeRoutes.get("/", (request, response) => {
  response.send("Hello World");
});
aboutMeRoutes.get("/lorem", (request, response) => {
  response.send(`
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `);
});
aboutMeRoutes.get("/about", (request, response) => {
  response.json(aboutMe);
});

module.exports = aboutMeRoutes;
