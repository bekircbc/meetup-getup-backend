import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      userName: "mike",
      firstName: "Mike",
      lastName: "Smith",
      email: "mike@example.com",
      password: bcrypt.hashSync("asd45ert34"),
      isAdmin: true,
      userFavorites: [],
    },
    {
      name: "kanka32",
      email: "kanka32@example.com",
      password: bcrypt.hashSync("asd45ert34"),
      isAdmin: false,
      userFavorites: [],
    },
    {
      name: "lover64",
      email: "lover64@example.com",
      password: bcrypt.hashSync("asd45ert34"),
      isAdmin: true,
      userFavorites: [],
    },
  ],
  meetups: [
    {
      title: "Paris",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/800px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      ],
      adress: "Meetupstreet5, 12345 Meetup City",
      category: "Meetup",
      description:
        "This is an amazing meetup which you definitely should not miss.",
      reviews: [
        {
          userName: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          userName: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          userName: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
    },
    {
      title: "Amsterdam",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Buildings_in_Amsterdam_IMG_5153.jpg/800px-Buildings_in_Amsterdam_IMG_5153.jpg",
      ],
      adress: "Meetupstreet5, 12345 Meetup City",
      description:
        "This is an amazing meetup which you definitely should not miss.",
      reviews: [
        {
          userName: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          userName: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          userName: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
    },
    {
      title: "Düsseldorf",
      images: ["https://picsum.photos/520/460"],
      adress: "Meetupstreet5, 12345 Meetup City",
      description:
        "This is an amazing meetup which you definitely should not miss.",
      reviews: [
        {
          userName: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          userName: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          userName: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
    },
    {
      title: "Berlin",
      imageUrl: "https://picsum.photos/521/461",
      adress: "Meetupstreet5, 12345 Meetup City",
      description:
        "This is an amazing meetup which you definitely should not miss.",
      reviews: [
        {
          userName: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          userName: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          userName: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
    },
    {
      title: "Dresden",
      images: ["https://picsum.photos/522/462"],
      adress: "Meetupstreet5, 12345 Meetup City",
      description:
        "This is an amazing meetup which you definitely should not miss.",
      reviews: [
        {
          userName: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          userName: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          userName: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
    },
  ],
};

export default data;
