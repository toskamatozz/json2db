const User = require('models/user');

const profiles = [
  {
    "_id": "5ed25aa22871d804c6afada8",
    "index": 0,
    "guid": "1cb5a24c-e210-4f60-9ba3-631d28b54c64",
    "isActive": true,
    "balance": "$2,509.09",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Rosalie Fox",
    "gender": "female",
    "company": "ZILLANET",
    "email": "rosaliefox@zillanet.com",
    "phone": "+1 (915) 452-3616",
    "address": "886 Macon Street, Bannock, Maryland, 7700",
    "about": "Est labore culpa ipsum commodo mollit laboris velit adipisicing fugiat. Reprehenderit cillum mollit aliquip enim reprehenderit duis adipisicing magna veniam in. Magna duis ad pariatur voluptate. Aliquip deserunt et excepteur sint duis dolore anim eu et consequat deserunt id. Laboris tempor voluptate sunt eiusmod voluptate cillum nulla. Veniam amet velit minim ea dolore irure minim. Proident ad velit sit labore eu nostrud exercitation occaecat laboris occaecat id elit ipsum.\r\n",
    "registered": "2018-07-20T05:15:24 -03:00",
    "latitude": -4.835545,
    "longitude": -15.882724,
    "tags": [
      "qui",
      "exercitation",
      "duis",
      "reprehenderit",
      "ad",
      "voluptate",
      "consequat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Nona Hess"
      },
      {
        "id": 1,
        "name": "Leblanc Carey"
      },
      {
        "id": 2,
        "name": "Vang Sanford"
      }
    ],
    "greeting": "Hello, Rosalie Fox! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5ed25aa26150a00be61daaa2",
    "index": 1,
    "guid": "4ab45746-8ace-48ee-b2f7-abaebe9cba85",
    "isActive": true,
    "balance": "$3,980.14",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Hicks Blevins",
    "gender": "male",
    "company": "ACCUPHARM",
    "email": "hicksblevins@accupharm.com",
    "phone": "+1 (942) 433-3738",
    "address": "107 Fiske Place, Marion, Utah, 7245",
    "about": "Et pariatur officia fugiat aliquip do incididunt aliqua incididunt. Lorem in sunt non elit dolore ullamco sint proident et tempor officia commodo. Proident cillum est eiusmod cupidatat eu. Deserunt in esse sint consequat proident enim. Velit fugiat anim consectetur proident.\r\n",
    "registered": "2014-04-23T04:09:29 -03:00",
    "latitude": 50.446773,
    "longitude": -81.684528,
    "tags": [
      "nulla",
      "minim",
      "ipsum",
      "exercitation",
      "dolor",
      "non",
      "elit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Puckett Woods"
      },
      {
        "id": 1,
        "name": "Felicia Hopper"
      },
      {
        "id": 2,
        "name": "Goodman Robinson"
      }
    ],
    "greeting": "Hello, Hicks Blevins! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5ed25aa2ac00a4e72f19a48b",
    "index": 2,
    "guid": "7d008394-5c1c-4ee3-8f8c-1ac4b9cd9389",
    "isActive": true,
    "balance": "$1,935.34",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": "Mai Vazquez",
    "gender": "female",
    "company": "MEDCOM",
    "email": "maivazquez@medcom.com",
    "phone": "+1 (831) 422-3379",
    "address": "619 Johnson Street, Stouchsburg, Vermont, 8358",
    "about": "Aliquip veniam labore culpa quis sint consectetur aute do deserunt qui. Enim anim ea aliquip proident ullamco eiusmod. Sint aliquip ut elit tempor sint incididunt. Excepteur aliquip esse commodo quis ullamco aliquip duis excepteur pariatur eiusmod aliquip et. Duis ex laborum do proident ullamco nisi do culpa laborum aute sit adipisicing.\r\n",
    "registered": "2018-08-27T03:29:06 -03:00",
    "latitude": 38.721078,
    "longitude": 95.055162,
    "tags": [
      "commodo",
      "nisi",
      "occaecat",
      "do",
      "ex",
      "dolore",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Alicia Griffin"
      },
      {
        "id": 1,
        "name": "Elvia Valencia"
      },
      {
        "id": 2,
        "name": "Daniels Abbott"
      }
    ],
    "greeting": "Hello, Mai Vazquez! You have 1 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5ed25aa23070afa129915f62",
    "index": 3,
    "guid": "40c4165b-086d-4e9b-8df4-f65e16a5c5fa",
    "isActive": false,
    "balance": "$1,844.16",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "brown",
    "name": "Morgan Glenn",
    "gender": "female",
    "company": "ZAPHIRE",
    "email": "morganglenn@zaphire.com",
    "phone": "+1 (957) 514-3072",
    "address": "840 Kansas Place, Shasta, Georgia, 9311",
    "about": "Id esse velit aliquip do nostrud fugiat consequat dolor proident voluptate enim. Minim in eu nulla quis. Enim dolore sint eu amet amet dolor veniam. Commodo ea consequat reprehenderit eu consequat mollit sit eu consequat nisi cupidatat aliqua. Minim voluptate anim deserunt elit cillum eu sint reprehenderit. Dolor voluptate et esse et id aute ut qui magna magna ut.\r\n",
    "registered": "2019-10-17T11:50:12 -03:00",
    "latitude": -78.198389,
    "longitude": 95.126032,
    "tags": [
      "dolore",
      "dolore",
      "enim",
      "proident",
      "aute",
      "veniam",
      "aliqua"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Munoz Gaines"
      },
      {
        "id": 1,
        "name": "Erma Copeland"
      },
      {
        "id": 2,
        "name": "Vicky Cook"
      }
    ],
    "greeting": "Hello, Morgan Glenn! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5ed25aa28b3f23f44e3a4b07",
    "index": 4,
    "guid": "ce95616f-bafe-4e8f-b430-93396892d205",
    "isActive": false,
    "balance": "$1,233.87",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Enid Eaton",
    "gender": "female",
    "company": "PETICULAR",
    "email": "enideaton@peticular.com",
    "phone": "+1 (833) 489-2939",
    "address": "496 Kingston Avenue, Virgie, Hawaii, 5040",
    "about": "Officia veniam eu velit anim deserunt sit Lorem excepteur. Adipisicing fugiat sint ullamco aliqua sint minim non nostrud aliquip ut. Sunt sint non sunt et id laborum ad irure tempor excepteur tempor. Magna excepteur elit nisi Lorem esse. Sint est non occaecat amet quis culpa incididunt officia.\r\n",
    "registered": "2019-09-25T07:25:29 -03:00",
    "latitude": 32.194716,
    "longitude": -120.690078,
    "tags": [
      "sint",
      "enim",
      "irure",
      "velit",
      "officia",
      "nulla",
      "commodo"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mathis Pate"
      },
      {
        "id": 1,
        "name": "Pena Paul"
      },
      {
        "id": 2,
        "name": "Miranda Maynard"
      }
    ],
    "greeting": "Hello, Enid Eaton! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5ed25aa2ec4622d3280ffffe",
    "index": 5,
    "guid": "a9f8a2a7-f17d-410e-ad9f-d1385eeee9f6",
    "isActive": false,
    "balance": "$2,461.87",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "brown",
    "name": "Ronda Tucker",
    "gender": "female",
    "company": "GEEKMOSIS",
    "email": "rondatucker@geekmosis.com",
    "phone": "+1 (852) 426-2530",
    "address": "752 Virginia Place, Hillsboro, Oklahoma, 5522",
    "about": "Lorem fugiat est dolore ad ipsum ipsum nulla eu. Anim aute nisi nostrud do est do. Dolore officia aute voluptate excepteur pariatur officia dolor elit. Aute commodo laborum velit consectetur excepteur officia eu mollit dolor laboris enim.\r\n",
    "registered": "2019-02-21T02:20:43 -02:00",
    "latitude": -2.012196,
    "longitude": -124.958257,
    "tags": [
      "nisi",
      "excepteur",
      "reprehenderit",
      "adipisicing",
      "in",
      "anim",
      "et"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Joni William"
      },
      {
        "id": 1,
        "name": "Colon Bradford"
      },
      {
        "id": 2,
        "name": "Hale Wilkins"
      }
    ],
    "greeting": "Hello, Ronda Tucker! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5ed25aa26f786b15033ae6f7",
    "index": 6,
    "guid": "5ea77cac-634b-4458-920f-1824d7a22c49",
    "isActive": true,
    "balance": "$2,583.80",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": "Osborne Conley",
    "gender": "male",
    "company": "GEOLOGIX",
    "email": "osborneconley@geologix.com",
    "phone": "+1 (934) 514-2662",
    "address": "661 Pitkin Avenue, Sunriver, Massachusetts, 9930",
    "about": "Minim ipsum duis incididunt enim sunt non mollit qui anim dolor ad incididunt qui duis. Qui voluptate occaecat ut do culpa consequat consequat amet dolore id ea fugiat ad. Dolor irure incididunt amet non Lorem commodo esse eu ullamco sit. Reprehenderit duis aute sit sit labore fugiat magna. Exercitation ea anim commodo ut. Aute et sit nisi occaecat deserunt ea culpa labore eiusmod excepteur cupidatat veniam id officia.\r\n",
    "registered": "2017-06-07T01:02:50 -03:00",
    "latitude": 37.731771,
    "longitude": -116.804879,
    "tags": [
      "voluptate",
      "dolor",
      "tempor",
      "eiusmod",
      "deserunt",
      "quis",
      "mollit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Holloway Dunlap"
      },
      {
        "id": 1,
        "name": "Benton Jacobs"
      },
      {
        "id": 2,
        "name": "Angie Hammond"
      }
    ],
    "greeting": "Hello, Osborne Conley! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  }
];

const save2db = () => {
  profiles.forEach(profile => User.create(profile))
};

module.exports.save2db = save2db;
