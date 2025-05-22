var express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
const jeopardy = require('./jeopardy');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET all teams
app.get("/cards", async function(req, res) {
    const allCards = await jeopardy.getCardsWithCategory();    
    res.send(allCards);
});

// GET all teams
app.get("/teams", async function(req, res) {
    const allTeams = await jeopardy.getTeams();
    res.send(allTeams);
});

// GET a specific team
app.get("/teams/:id", async function(req, res) {
    const team = await jeopardy.getTeamById(req.params.id);
    res.send(team);
});

// POST a new team
app.post("/teams", async function(req, res) {
    const name = req.body.name;
    const notes = req.body.notes;
    await jeopardy.addTeam(name, notes);
    res.send({ "message": "Team added successfully" });
});

// PATCH to update team score
app.patch("/teams/:id/score", async function(req, res) {
    const id = req.params.id;
    const points = req.body.points;
    await jeopardy.updateTeamScore(id, points);
    res.send({ "message": "Score updated successfully" });
});

// PATCH to update card status
app.patch("/cards/:id/answered", async function(req, res) {
  const id = req.params.id;
  await jeopardy.handleMarkAnswered(id);
  res.send({ message: "Card marked as answered" });
});

// DELETE a team
app.delete("/teams/:id", async function(req, res) {
    await jeopardy.deleteTeam(req.params.id);
    res.send({ "message": "Team deleted successfully" });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server Started!");
});