require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
const port = process.env.PORT || 4000;

const pusher = new Pusher({
  appId: "989492",
  key: "81f8f49e7c94fa058d5c",
  secret: "76c1b0718cb9872138ac",
  cluster: 'mt1',
});

let games = [
  {
    "roomId": "1234",
    "players" : [
      "player1",
      "player2",
      "player3"
    ]
  }
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/paint', (req, res) => {
  pusher.trigger('painting', 'draw', req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get('/players/:roomId', (req, res) => {
  var roomId = req.params.roomId;
  var i;
  var players = {};
  for (i = 0; i < games.length; i++) {
    if(games[i].roomId === roomId) {
      players = games[i].players;
    }
  }
  console.log(players);
  res.json(players);
})

app.post('/players/:roomId/:username', (req, res) => {
  var roomId = req.params.roomId;
  var username = req.params.username;
  var i;
  for (i = 0; i < games.length; i++) {
    if(games[i].roomId === roomId) {
      games[i].players.push(username);
    }
  }
  console.log(username);
  res.end();
})

app.post('/games/:roomId', (req, res) => {
  var roomId = req.params.roomId;
  var newGame = {
    "roomId": roomId,
    "players":[]
  };
  games.push(newGame);
  console.log(newGame);
  res.end();
})