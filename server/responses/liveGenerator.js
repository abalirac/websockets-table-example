const teams = require("./teams");

// Create inital scores

const scores = [
  {
    id: 1,
    games: [
      {
        teams: [
          { id: 1, score: 1 },
          { id: 2, score: 0 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 1, score: 0 },
        { id: 2, score: 0 },
      ],
    },
  },
  {
    id: 2,
    games: [
      {
        teams: [
          { id: 3, score: 10 },
          { id: 4, score: 12 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 3, score: 0 },
        { id: 4, score: 0 },
      ],
    },
  },
  {
    id: 3,
    games: [
      {
        teams: [
          { id: 5, score: 16 },
          { id: 6, score: 0 },
        ],
      },
      {
        teams: [
          { id: 5, score: 3 },
          { id: 6, score: 0 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 5, score: 1 },
        { id: 6, score: 0 },
      ],
    },
  },
  {
    id: 4,
    games: [
      {
        teams: [
          { id: 7, score: 16 },
          { id: 8, score: 0 },
        ],
      },
      {
        teams: [
          { id: 7, score: 16 },
          { id: 8, score: 0 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 7, score: 2 },
        { id: 8, score: 0 },
      ],
    },
  },
  {
    id: 5,
    games: [],
    series: {
      teams: [
        { id: 9, score: 0 },
        { id: 10, score: 0 },
      ],
    },
  },
  {
    id: 6,
    games: [
      {
        teams: [
          { id: 11, score: 12 },
          { id: 12, score: 0 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 11, score: 0 },
        { id: 12, score: 0 },
      ],
    },
  },
  {
    id: 7,
    games: [
      {
        teams: [
          { id: 13, score: 0 },
          { id: 14, score: 0 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 13, score: 0 },
        { id: 14, score: 0 },
      ],
    },
  },
  {
    id: 8,
    games: [
      {
        teams: [
          { id: 15, score: 0 },
          { id: 16, score: 16 },
        ],
      },
      {
        teams: [
          { id: 15, score: 0 },
          { id: 16, score: 16 },
        ],
      },
      {
        teams: [
          { id: 15, score: 0 },
          { id: 16, score: 17 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 15, score: 0 },
        { id: 16, score: 2 },
      ],
    },
  },
  {
    id: 9,
    games: [
      {
        teams: [
          { id: 17, score: 1 },
          { id: 18, score: 0 },
        ],
      },
    ],
    series: {
      teams: [
        { id: 17, score: 0 },
        { id: 18, score: 0 },
      ],
    },
  },
];

module.exports = (seriesIncrement, gameIncrement) => {
  return scores.map(({ id, games, series }) => ({
    id,
    games: games.map(({ teams: gameTeams }) => ({
      teams: gameTeams.map(({ score }) => ({ score: score + gameIncrement })),
    })),
    series: {
      teams: series.teams.map(({ score }) => ({
        score: score + seriesIncrement,
      })),
    },
  }));
};
