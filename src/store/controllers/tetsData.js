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
      displayShortName: "",
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
    shirtUrl:
      "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
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
    M: [...rowArray].splice(2, 4),
    F: [...rowArray].splice(0, 2),
    S: [...rowArray].splice(0, 4),
  },
};

export const teamObject2 = {
  meta: {
    name: "Bella Ciao",
    budgetTotal: 100,
    budgetRemaining: 5,
    pointsTotal: 219,
    pointsGameweek: 32,
  },
  players: {
    G: [rowArray[4]],
    D: [...rowArray].splice(3, 5),
    M: [...rowArray].splice(0, 3),
    F: [...rowArray].splice(0, 2),
    S: [...rowArray].splice(0, 4),
  },
};

export const fixturesObject = {
  meta: {
    gameweek: 37,
    // deadlineUtcDateEpoch: 1654764436689, // test passed date
    deadlineUtcDateEpoch: 1655060400000,
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
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
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
      dateUtcEpoch: 1646582400000,
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
      dateUtcEpoch: 1646582400000,
      hasScore: false,
      home: {
        teamId: 7,

        iconUrl: "images/teams/3.png",

        threeLetterCode: "BOU",
        score: null,
      },
      away: {
        teamId: 19,

        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",

        threeLetterCode: "ARS",
        score: null,
      },
    },
  ],
};
export const fixturesObjectMax = {
  meta: {
    gameweek: 36,
    // deadlineUtcDateEpoch: 1654764436689, // test passed date
    deadlineUtcDateEpoch: 1655060400000,
  },
  fixtures: [
    {
      id: 343,
      dateUtcEpoch: 1651932000000,
      hasScore: true,
      home: {
        teamId: 3,
        threeLetterCode: "BRE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon3.png",
        score: 2,
      },
      away: {
        teamId: 16,
        threeLetterCode: "SOU",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon16.png",
        score: 3,
      },
    },
    {
      id: 344,
      dateUtcEpoch: 1651932000000,
      hasScore: true,
      home: {
        teamId: 5,
        threeLetterCode: "BUR",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon5.png",
        score: 0,
      },
      away: {
        teamId: 2,
        threeLetterCode: "AVL",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon2.png",
        score: 0,
      },
    },
    {
      id: 345,
      dateUtcEpoch: 1651932000000,
      hasScore: true,
      home: {
        teamId: 6,
        threeLetterCode: "CHE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon6.png",
        score: 5,
      },
      away: {
        teamId: 20,
        threeLetterCode: "WOL",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon20.png",
        score: 1,
      },
    },
    {
      id: 346,
      dateUtcEpoch: 1651932000000,
      hasScore: false,
      home: {
        teamId: 7,
        threeLetterCode: "CRY",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon7.png",
        score: null,
      },
      away: {
        teamId: 18,
        threeLetterCode: "WAT",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon18.png",
        score: null,
      },
    },
    {
      id: 347,
      dateUtcEpoch: 1651941000000,
      hasScore: false,
      home: {
        teamId: 4,
        threeLetterCode: "BHA",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon4.png",
        score: null,
      },
      away: {
        teamId: 13,
        threeLetterCode: "MUN",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon13.png",
        score: null,
      },
    },
    {
      id: 348,
      dateUtcEpoch: 1651949100000,
      hasScore: false,
      home: {
        teamId: 11,
        threeLetterCode: "LIV",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon11.png",
        score: null,
      },
      away: {
        teamId: 17,
        threeLetterCode: "TOT",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
        score: null,
      },
    },
    {
      id: 349,
      dateUtcEpoch: 1652014800000,
      hasScore: false,
      home: {
        teamId: 1,
        threeLetterCode: "ARS",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon1.png",
        score: null,
      },
      away: {
        teamId: 10,
        threeLetterCode: "LEE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon10.png",
        score: null,
      },
    },
    {
      id: 350,
      dateUtcEpoch: 1652014800000,
      hasScore: false,
      home: {
        teamId: 9,
        threeLetterCode: "LEI",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon9.png",
        score: null,
      },
      away: {
        teamId: 8,
        threeLetterCode: "EVE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon8.png",
        score: null,
      },
    },
    {
      id: 351,
      dateUtcEpoch: 1652014800000,
      hasScore: false,
      home: {
        teamId: 15,
        threeLetterCode: "NOR",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon15.png",
        score: null,
      },
      away: {
        teamId: 19,
        threeLetterCode: "WHU",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon19.png",
        score: null,
      },
    },
    {
      id: 352,
      dateUtcEpoch: 1652023800000,
      hasScore: false,
      home: {
        teamId: 12,
        threeLetterCode: "MCI",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon12.png",
        score: null,
      },
      away: {
        teamId: 14,
        threeLetterCode: "NEW",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon14.png",
        score: null,
      },
    },
    {
      id: 353,
      dateUtcEpoch: 1652209200000,
      hasScore: false,
      home: {
        teamId: 2,
        threeLetterCode: "AVL",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon2.png",
        score: null,
      },
      away: {
        teamId: 11,
        threeLetterCode: "LIV",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon11.png",
        score: null,
      },
    },
    {
      id: 354,
      dateUtcEpoch: 1652293800000,
      hasScore: false,
      home: {
        teamId: 10,
        threeLetterCode: "LEE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon10.png",
        score: null,
      },
      away: {
        teamId: 6,
        threeLetterCode: "CHE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon6.png",
        score: null,
      },
    },
    {
      id: 355,
      dateUtcEpoch: 1652294700000,
      hasScore: false,
      home: {
        teamId: 9,
        threeLetterCode: "LEI",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon9.png",
        score: null,
      },
      away: {
        teamId: 15,
        threeLetterCode: "NOR",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon15.png",
        score: null,
      },
    },
    {
      id: 356,
      dateUtcEpoch: 1652294700000,
      hasScore: false,
      home: {
        teamId: 18,
        threeLetterCode: "WAT",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon18.png",
        score: null,
      },
      away: {
        teamId: 8,
        threeLetterCode: "EVE",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon8.png",
        score: null,
      },
    },
    {
      id: 357,
      dateUtcEpoch: 1652296500000,
      hasScore: false,
      home: {
        teamId: 20,
        threeLetterCode: "WOL",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon20.png",
        score: null,
      },
      away: {
        teamId: 12,
        threeLetterCode: "MCI",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon12.png",
        score: null,
      },
    },
    {
      id: 358,
      dateUtcEpoch: 1652381100000,
      hasScore: false,
      home: {
        teamId: 17,
        threeLetterCode: "TOT",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
        score: null,
      },
      away: {
        teamId: 1,
        threeLetterCode: "ARS",
        iconUrl:
          "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon1.png",
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
      teamIconUrl:
        "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
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
      teamIconUrl:
        "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
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
      name: "Gabriels goals",
      amount: 12,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/2.png",
      playerId: 198,
      name: "Heung-Min Son",
      amount: 14,
    },
  ],

  assists: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/3.png",
      playerId: 114,
      name: "Chiquinho assists",
      amount: 14,
    },
    {
      teamId: 11,
      teamIconUrl:
        "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
      playerId: 198,
      name: "Emiliano Buendía",
      amount: 13,
    },
  ],

  points: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/5.png",
      playerId: 114,
      name: "Heung-Min Son points",
      amount: 139,
    },
    {
      teamId: 11,
      teamIconUrl: "images/teams/6.png",
      playerId: 198,
      name: "Raheem Sterling",
      amount: 131,
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

  conceded: [
    {
      teamId: 17,
      teamIconUrl: "images/teams/3.png",
      playerId: 114,
      name: "Chiquinho",
      amount: 4,
    },
    {
      teamId: 11,
      teamIconUrl:
        "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",
      playerId: 198,
      name: "Emiliano Buendía",
      amount: 3,
    },
  ],

  cleansheets: [
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
          letter: "1",
        },
        {
          teamId: 2,

          hexColor: "00943E",

          letter: "2",
        },
      ],
    },
    {
      teamId: 4,

      teamIconUrl:
        "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",

      name: "Crystal Palace FC",
      form: [
        {
          teamId: 5,

          hexColor: "00943E",
          letter: "1",
        },
        {
          teamId: 19,

          hexColor: "F2C94C",

          letter: "2",
        },

        {
          teamId: 22,

          hexColor: "A50C0C",

          letter: "3",
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
          letter: "1",
        },
        {
          teamId: 19,

          hexColor: "F2C94C",

          letter: "2",
        },
        {
          teamId: 22,

          hexColor: "A50C0C",

          letter: "3",
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

      teamIconUrl:
        "https://cuppy-team-assets-v1.fra1.digitaloceanspaces.com/icon17.png",

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
