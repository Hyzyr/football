const fdrArray = [
  [
    {
      opponentId: 7,
      displayShortName: "avl",
      difficulty: 4,
      difficultyHexCode: "FF4E4E",
    },
    {
      opponentId: 17,
      displayShortName: "MCI",
      difficulty: 2,
      difficultyHexCode: "00D95A",
    },
  ],
  [
    {
      opponentId: 2,
      displayShortName: "CRY",
      difficulty: 2,
      difficultyHexCode: "00D95A",
    },
  ],
  [
    {
      opponentId: 19,
      displayShortName: "TOT",
      difficulty: 3,
      difficultyHexCode: "EB5757",
    },
  ],
  [
    {
      opponentId: 3,
      displayShortName: "BRE",
      difficulty: 5,
      difficultyHexCode: "A50C0C",
    },
  ],
  [
    {
      opponentId: 9,
      displayShortName: "mun",
      difficulty: 5,
      difficultyHexCode: "A50C0C",
    },
  ],
];
const rowArray = [
  {
    name: "Alexander-Arnold",
    playerId: 154,
    teamId: 7,
    shirtUrl: "images/uniforms/football-uniform-7.png",
    fdr: fdrArray,
  },
  {
    name: "Stones",
    playerId: 15,
    teamId: 17,
    shirtUrl: "images/uniforms/football-uniform-1.png",
    fdr: fdrArray,
  },
  {
    name: "Alexander-Arnold",
    playerId: 154,
    teamId: 7,
    shirtUrl: "images/uniforms/football-uniform-5.png",
    fdr: fdrArray,
  },
  {
    name: "Stones",
    playerId: 15,
    teamId: 17,
    shirtUrl: "images/uniforms/football-uniform-6.png",
    fdr: fdrArray,
  },
  {
    name: "Stones",
    playerId: 15,
    teamId: 17,
    shirtUrl: "images/uniforms/football-uniform-4.png",
    fdr: fdrArray,
  },
];

export const teamObject = {
  meta: {
    name: "Bella Ciao",
    budgetTotal: 100,
    budgetRemaining: 5,
    pointsTotal: 219,
    pointsGameweek: 32,
  },
  players: {
    G: [
      {
        name: "Martinez",
        playerId: 521,
        teamId: 13,
        shirtUrl: "images/uniforms/football-uniform-0.png",
        fdr: [
          [
            {
              opponentId: 7,
              displayShortName: "avl",
              difficulty: 4,
              difficultyHexCode: "FF4E4E",
            },
          ],
          [
            {
              opponentId: 2,
              displayShortName: "CRY",
              difficulty: 2,
              difficultyHexCode: "00D95A",
            },
          ],
          [
            {
              opponentId: 9,
              displayShortName: "MUN",
              difficulty: 3,
              difficultyHexCode: "EB5757",
            },
          ],
          [
            {
              opponentId: 0,
              displayShortName: "TOT",
              difficulty: 0,
              difficultyHexCode: "635D5D",
            },
          ],
          [
            {
              opponentId: 78,
              displayShortName: "sou",
              difficulty: 5,
              difficultyHexCode: "A50C0C",
            },
          ],
        ],
      },
    ],
    D: rowArray,
    M: [...rowArray].splice(2,4),
    F: [...rowArray].splice(0,2),
    S: [...rowArray].splice(0,4),
  },
};

export const fixturesObject = {
  meta: {
    gameweek: 37,
    deadlineUtcDateEpoch: 1654589307449,
  },
  fixtures: [
    {
      dateUtcEpoch: 1646479800000,
      hasScore: true,
      home: {
        teamId: 7,
        threeLetterCode: "BOU",
        iconUrl: "images/teams/1.png",
        score: 2,
      },
      away: {
        teamId: 19,
        threeLetterCode: "ARS",
        iconUrl: "images/teams/2.png",
        score: 1,
      },
    },
    {
      dateUtcEpoch: 1646487000000,
      hasScore: true,
      home: {
        teamId: 17,
        threeLetterCode: "CHE",
        iconUrl: "images/teams/3.png",
        score: 0,
      },
      away: {
        teamId: 5,
        threeLetterCode: "LIV",
        iconUrl: "images/teams/4.png",
        score: 0,
      },
    },
    {
      dateUtcEpoch: 1646487000000,
      hasScore: true,
      home: {
        teamId: 2,
        threeLetterCode: "EVE",
        iconUrl: "images/teams/5.png",
        score: 1,
      },
      away: {
        teamId: 6,
        threeLetterCode: "MCI",
        iconUrl: "images/teams/6.png",
        score: 3,
      },
    },
    {
      dateUtcEpoch: 1646494200000,
      hasScore: false,
      home: {
        teamId: 15,
        threeLetterCode: "MUN",
        iconUrl: "images/teams/7.png",
        score: null,
      },
      away: {
        teamId: 1,
        threeLetterCode: "ATM",
        iconUrl: "images/teams/8.png",
        score: null,
      },
    },
    {
      dateUtcEpoch: 1646496000000,
      hasScore: false,
      home: {
        teamId: 7,

        iconUrl: "images/teams/3.png",

        threeLetterCode: "BOU",
        score: null,
      },
      away: {
        teamId: 19,

        iconUrl: "images/teams/4.png",

        threeLetterCode: "ARS",
        score: null,
      },
    },
  ],
};

export const topTransfersObject = {
  in: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/1.png",
      playerId: 520,
      name: "Edward Nketiah",
      amount: 159562,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/2.png",
      playerId: 198,
      name: "Wilfried Zaha",
      amount: 152666,
    },
    {
      teamId: 2,
      teamIconUrl: "images/teams/3.png",
      playerId: 61,
      name: "Richarlison",
      amount: 141646,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/4.png",
      playerId: 198,
      name: "Wilfried Zaha",
      amount: 152666,
    },
    {
      teamId: 17,
      teamIconUrl: "images/teams/5.png",
      playerId: 520,
      name: "Edward Nketiah",
      amount: 159562,
    },
  ],
  out: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/6.png",
      playerId: 114,
      name: "Emmanuel Dennis",
      amount: 213846,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/7.png",
      playerId: 198,
      name: "Mohamed Salah",
      amount: 166890,
    },
    {
      teamId: 2,
      teamIconUrl: "images/teams/8.png",
      playerId: 61,
      name: "Mason Mount",
      amount: 141646,
    },
    {
      teamId: 17,
      teamIconUrl: "images/teams/3.png",
      playerId: 114,
      name: "Emmanuel Dennis",
      amount: 213846,
    },
    {
      teamId: 2,
      teamIconUrl: "images/teams/4.png",
      playerId: 61,
      name: "Mason Mount",
      amount: 141646,
    },
  ],
};
export const topPlayersObject = {
  goals: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/1.png",
      playerId: 520,
      name: "Gabriel Jesus",
      amount: 5,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/2.png",
      playerId: 198,
      name: "Heung-Min Son",
      amount: 4,
    },
  ],

  assists: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/3.png",
      playerId: 114,
      name: "Chiquinho",
      amount: 4,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/4.png",
      playerId: 198,
      name: "Emiliano Buendía",
      amount: 3,
    },
  ],

  points: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/5.png",
      playerId: 114,
      name: "Heung-Min Son",
      amount: 39,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/6.png",
      playerId: 198,
      name: "Raheem Sterling",
      amount: 31,
    },
  ],
};

export const topTeamsObject = {
  goals: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/7.png",
      playerId: 520,
      name: "Gabriel Jesus",
      amount: 5,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/8.png",
      playerId: 198,
      name: "Heung-Min Son",
      amount: 4,
    },
  ],

  assists: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/3.png",
      playerId: 114,
      name: "Chiquinho",
      amount: 4,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/4.png",
      playerId: 198,
      name: "Emiliano Buendía",
      amount: 3,
    },
  ],

  points: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/1.png",
      playerId: 114,
      name: "Heung-Min Son",
      amount: 39,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/2.png",
      playerId: 198,
      name: "Raheem Sterling",
      amount: 31,
    },
  ],
};

export const topTeamsFormObject = {
  best: [
    {
      teamId: 18,
      teamIconUrl: "images/teams/3.png",
      name: "Manchester City",
      form: [
        {
          teamId: 14,
          hexColor: "00943E",
          letter: "W",
        },
        {
          teamId: 2,

          hexColor: "00943E",

          letter: "W",
        },
      ],
    },
    {
      teamId: 4,

      teamIconUrl: "images/teams/4.png",

      name: "Crystal Palace FC",
      form: [
        {
          teamId: 5,

          hexColor: "00943E",
          letter: "W",
        },
        {
          teamId: 19,

          hexColor: "F2C94C",

          letter: "D",
        },

        {
          teamId: 22,

          hexColor: "A50C0C",

          letter: "L",
        },
      ],
    },
  ],

  worst: [
    {
      teamId: 2,

      teamIconUrl: "images/teams/5.png",

      name: "Brentford",
      form: [
        {
          teamId: 14,

          hexColor: "A50C0C",
          letter: "L",
        },
        {
          teamId: 2,

          hexColor: "A50C0C",

          letter: "L",
        },
      ],
    },
    {
      teamId: 4,

      teamIconUrl: "images/teams/6.png",

      name: "Newcastle",
      form: [
        {
          teamId: 5,

          hexColor: "00943E",
          letter: "W",
        },
        {
          teamId: 19,

          hexColor: "F2C94C",

          letter: "D",
        },

        {
          teamId: 22,

          hexColor: "A50C0C",

          letter: "L",
        },
      ],
    },
  ],
};

export const topTeamsFdrObject = {
  best: [
    {
      teamId: 3,

      teamIconUrl: "images/teams/7.png",

      name: "Arsenal",
      fdr: [
        {
          teamId: 14,

          hexColor: "00943E",
          letter: "A",
        },
        {
          teamId: 2,

          hexColor: "00943E",

          letter: "A",
        },
      ],
    },
    {
      teamId: 4,

      teamIconUrl: "images/teams/8.png",

      name: "Crystal Palace FC",
      fdr: [
        {
          teamId: 5,

          hexColor: "00943E",
          letter: "W",
        },
        {
          teamId: 19,

          hexColor: "F2C94C",

          letter: "D",
        },
        {
          teamId: 22,

          hexColor: "A50C0C",

          letter: "L",
        },
      ],
    },
  ],

  worst: [
    {
      teamId: 2,

      teamIconUrl: "images/teams/3.png",

      name: "Brentford",
      fdr: [
        {
          teamId: 14,

          hexColor: "A50C0C",
          letter: "L",
        },
        {
          teamId: 2,

          hexColor: "A50C0C",

          letter: "L",
        },
      ],
    },
    {
      teamId: 4,

      teamIconUrl: "images/teams/4.png",

      name: "Newcastle",
      fdr: [
        {
          teamId: 5,

          hexColor: "00943E",
          letter: "W",
        },
        {
          teamId: 19,

          hexColor: "F2C94C",

          letter: "D",
        },

        {
          teamId: 22,

          hexColor: "A50C0C",

          letter: "L",
        },
      ],
    },
  ],
};
