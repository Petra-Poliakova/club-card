import Images from "../contans/image";

const Products = [
  {
    id: 586,
    title: "Apple Jonaprince",
    img: Images.food.apple,
    description: "Winter variety. Sweet and juicy taste.",
    priceOld: 1.39,
    priceNew: 0.79,
    quantity: "1 kg", //-43%
  },
  {
    id: 325,
    title: "Lumberjack bread",
    img: Images.food.bread,
    description: "Artisan bread with yeast and seeds",
    priceOld: 1.75,
    priceNew: 1.11, //-36%
    quantity: "550 g",
  },
  {
    id: 987,
    title: "Chocholate croissant",
    img: Images.food.croissant,
    description: "Cake with chocolate filling",
    priceOld: 0.52,
    priceNew: 0.39, //-25%
    quantity: "95 g",
  },
  {
    id: 547,
    title: "Chocholate",
    img: Images.food.chocholate,
    description: "Dark and milk chocolate",
    priceOld: 1.39,
    priceNew: 0.99, //-28%
    quantity: "100 g",
  },
  {
    id: 823,
    title: "Multivitamin juice",
    img: Images.food.juice,
    description: "Juice with vitamin C content",
    priceOld: 1.79,
    priceNew: 1.29, //-27%
    quantity: "0.8 l",
  },
  {
    id: 594,
    title: "Yellow onion",
    img: Images.food.onion,
    description: "Slovak variety",
    priceOld: 4.39,
    priceNew: 2.99, // -31%
    quantity: "1kg",
  },
  {
    id: 278,
    title: "Edible potatoes",
    img: Images.food.potato,
    description: "Potatoes for consumption, washed late",
    priceOld: 4.29,
    priceNew: 2.79, // -34%
    quantity: "5 kg",
  },
  {
    id: 315,
    title: "Rice",
    img: Images.food.rice,
    description: "Round-grain husked rice",
    priceOld: 2.65,
    priceNew: 1.99, //-24%
    quantity: "1 kg",
  },
  {
    id: 446,
    title: "Spaghetti",
    img: Images.food.spaghetti,
    description: "Egg pasta - different types",
    priceOld: 1.5,
    priceNew: 0.99, //34%
    quantity: "400 g",
  },
  {
    id: 394,
    title: "Yogurt",
    img: Images.food.yogurt,
    description: "Natural Bio white yogurt",
    priceOld: 0.69,
    priceNew: 0.55, //-20%
    quantity: "180g",
  },
];

export default Products;
