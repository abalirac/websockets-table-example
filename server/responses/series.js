const teams = require("./teams.json");
const tournaments = require("./tournaments.json");

const series = [
    {
        id: 1, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T14:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 2, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T12:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 3, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T10:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 4, 
        title: "DOTA",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T20:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 5, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T23:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 6, 
        title: "DOTA",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T12:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 7, 
        title: "LOL",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T18:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 8, 
        title: "DOTA",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T15:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    },
    {
        id: 9, 
        title: "CSGO",
        tournament: tournaments.shift(),
        startTime: "2020-09-22T15:00:00.000Z",
        teams: [teams.shift(), teams.shift()]
    }
]
module.exports = series;
