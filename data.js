import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "mike",
      email: "mike@example.com",
      password: bcrypt.hashSync("asd45ert34"),
      isAdmin: true,
    },
    {
      name: "kanka32",
      email: "kanka32@example.com",
      password: bcrypt.hashSync("asd45ert34"),
      isAdmin: false,
    },
    {
      name: "lover64",
      email: "lover64@example.com",
      password: bcrypt.hashSync("asd45ert34"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "iPhone 9",
      slug: "iphone-9",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      ],
      price: 549,
      stock: 94,
      brand: "Apple",
      reviews: [
        {
          name: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          name: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          name: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
      description: "An apple mobile which is nothing like apple",
      discountPercentage: 12.96,
    },
    {
      name: "iPhone X",
      slug: "iphone-x",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      ],
      price: 899,
      stock: 34,
      brand: "Apple",
      reviews: [
        {
          name: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          name: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          name: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      discountPercentage: 17.94,
    },
    {
      name: "Samsung Universe 9",
      slug: "samsung-universe-9",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      images: ["https://dummyjson.com/image/i/products/3/1.jpg"],
      price: 1249,
      stock: 36,
      brand: "Samsung",
      reviews: [
        {
          name: "lover64",
          rating: 1,
          comment:
            "Esse quis mollit officia quis ex est nisi non anim fugiat. Occaecat commodo consequat mollit mollit velit. Consequat magna nisi id non occaecat anim magna.\nIrure officia quis ullamco sunt non voluptate nulla. Proident ullamco non consequat do ipsum veniam et ea. Qui pariatur sunt non ullamco enim nulla laboris adipisicing dolor laboris qui incididunt deserunt.",
        },
        {
          name: "kanka32",
          rating: 3,
          comment:
            "Aliquip dolore enim reprehenderit non nostrud consequat sit duis commodo ex aliqua eu sunt tempor. Sit ullamco deserunt est eu commodo amet excepteur quis esse adipisicing excepteur. Et laborum duis aliqua enim aute amet amet dolore adipisicing incididunt.",
        },
        {
          name: "mike",
          rating: 3,
          comment:
            "Irure nostrud eiusmod non ea. Et aliquip duis nostrud enim eiusmod culpa sunt irure exercitation. Reprehenderit et mollit pariatur ipsum minim pariatur.\nSint et aute sint incididunt nisi irure ullamco nulla aute labore.",
        },
      ],
      averageRating: 0,
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      discountPercentage: 15.46,
    },
  ],
};
export default data;
