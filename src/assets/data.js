export const user = {
  _id: "64df3c064180b81adfe41d4b",
  firstName: "Remy",
  lastName: "Lebeau",
  email: "gambit@xmen.com",
  friends: [
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Scott",
      lastName: "Summers",
      email: "cyclops@xmen.com",
      friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T09:33:32.519Z",
      updatedAt: "2023-08-18T09:49:19.475Z",
      __v: 2,
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Jean",
      lastName: "Grey",
      email: "phoenix@xmen.com",
      friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
      views: [
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
      ],
      verified: true,
      createdAt: "2023-08-18T09:27:12.064Z",
      updatedAt: "2023-08-21T06:46:26.798Z",
      __v: 8,
      location: "Westchester, NY",
      profession: "Telepath/telekinetic",
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Henry",
      lastName: "McCoy",
      email: "Beast@xmen.com",
      friends: ["64df3c064180b81adfe41d4b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T10:04:59.677Z",
      updatedAt: "2023-08-18T10:09:20.006Z",
      __v: 1,
    },
  ],
  views: [
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
  ],
  verified: true,
  createdAt: "2023-08-18T09:38:14.179Z",
  updatedAt: "2023-08-21T06:46:18.258Z",
  profileUrl:
    "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
  token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
};

export const friends = [
  {
    _id: "64df3aec4180b81adfe41d32",
    firstName: "Robert",
    lastName: "Drake",
    email: "iceman@xmen.com",
    profileUrl:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
  },
  {
    _id: "64df39704180b81adfe41d0b",
    firstName: "Warren",
    lastName: "Worthington III",
    email: "angel@xmen.com",
    location: "Manhattan, NY",
    profession: "Member of the X-Men",
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    firstName: "Charles",
    lastName: "Xavier",
    email: "prox_x@xmen.com",
  },
];

export const posts = [
  {
    _id: "64e2fe620d7868ecff1a6a86",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Erik",
      lastName: "Lensherr",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
      location: "New York, USA",
    },
    description: "Hello everyone, this is a new video. check it out. thank you.  And now I will keep on typing to make a very, very, very, very, very long post so I can test some of the functionality when there is a post that is too long because someone is longwinded, or perhaps just had too much caffeine.  I don't know!  But it certainly must be one or the other because if it was both that would be CRAZY.  CRAZY I TELL YOU!",
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692597858/SOCIALMEDIA/hdahstpztt1fvobc13st.png",
    likes: [],
    comments: [],
    createdAt: "2023-08-21T06:04:18.297Z",
    updatedAt: "2023-08-21T06:04:18.297Z",
    __v: 0,
  },
  {
    _id: "64e1cdd64baffca670364c8c",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Raven",
      lastName: "Darkholme",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
      location: "Mumbai, India",
    },
    description:
      "I'm a lumberjack and that's ok",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-20T08:24:54.330Z",
    updatedAt: "2023-08-21T03:23:24.809Z",
    __v: 0,
  },
  {
    _id: "64df437e4a4c0d47b536a002",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Victor",
      lastName: "Creed",
    },
    description:
      "I sleep all night and I work all day",
    likes: ["64df424b4a4c0d47b5369f65"],
    comments: ["64e2d1c977e497bd3a0bf67b"],
    createdAt: "2023-08-18T10:10:06.969Z",
    updatedAt: "2023-08-21T02:54:01.806Z",
    __v: 0,
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874458/samples/imagecon-group.jpg",
  },
  {
    _id: "64df43714a4c0d47b5369fef",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Wanda",
      lastName: "Maximoff",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
    },
    description:
      "Dum dum dum dum dum clothing",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T10:09:53.009Z",
    updatedAt: "2023-08-21T03:35:18.541Z",
    __v: 0,
  },
  {
    _id: "64df42dc4a4c0d47b5369f8a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Pietro",
      lastName: "Maximoff",
    },
    description:
      "And hang around in bars",
    likes: ["64df424b4a4c0d47b5369f65"],
    comments: [],
    createdAt: "2023-08-18T10:07:24.023Z",
    updatedAt: "2023-08-18T10:11:00.348Z",
    __v: 0,
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874457/samples/ecommerce/leather-bag-gray.jpg",
  },
  {
    _id: "64df42b04a4c0d47b5369f77",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Cain",
      lastName: "Marko",
    },
    description:
      "I wish I'd dum dum dum dum",
    likes: [],
    comments: [],
    createdAt: "2023-08-18T10:06:40.339Z",
    updatedAt: "2023-08-18T10:06:40.339Z",
    __v: 0,
  },
  {
    _id: "64df41114a4c0d47b5369f02",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Sebastian",
      lastName: "Shaw",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    description:
      "Dum dum DUM DA DA",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T09:59:45.876Z",
    updatedAt: "2023-08-18T10:01:35.333Z",
    __v: 0,
  },
  {
    _id: "64df3ef86c2bd953c7b43193",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Emma",
      lastName: "Frost",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874454/samples/people/boy-snow-hoodie.jpg",
    },
    description:
      "It's got red eyes.  Yes.  AND FANGS!!",
    likes: [
      "64df3aec4180b81adfe41d32",
      "64df424b4a4c0d47b5369f65",
      "64df39704180b81adfe41d0b",
    ],
    comments: [
      "64df41304a4c0d47b5369f0d",
      "64df41b14a4c0d47b5369f4d",
      "64df43e04a4c0d47b536a02a",
    ],
    createdAt: "2023-08-18T09:50:48.398Z",
    updatedAt: "2023-08-21T03:36:36.745Z",
    __v: 0,
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874455/samples/animals/three-dogs.jpg",
  },
  {
    _id: "64df3ed06c2bd953c7b43172",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "John ",
      lastName: "Smith",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
      location: "Mumbai, India",
    },
    description:
      "I've joined the Ministry of Silly Walks",
    likes: ["64df39704180b81adfe41d0b"],
    comments: ["64e2dc8577e497bd3a0bf843"],
    createdAt: "2023-08-18T09:50:08.431Z",
    updatedAt: "2023-08-21T03:44:36.962Z",
    __v: 0,
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
  },
];

export const requests = [
  {
    _id: "64df3aec4180b81adfe41d32",
    requestFrom: friends[0],
  },
  {
    _id: "64df39704180b81adfe41d0b",
    requestFrom: friends[1],
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    requestFrom: friends[2],
  },
];

export const suggestions = [
  {
    _id: "64df3aec4180b81adfe41d32",
    ...friends[0],
  },
  {
    _id: "64df39704180b81adfe41d0b",
    ...friends[1],
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    ...friends[2],
  },
];
