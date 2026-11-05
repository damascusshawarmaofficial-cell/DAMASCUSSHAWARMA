import chickenShawarmaRice from "../assets/food/plates/cr.webp";
import chickenShawarmafries from "../assets/food/Menu/cof.png";
import chickenShawarmaVeggies from "../assets/food/Menu/cov.png";
import beefshawarmaonrice from "../assets/food/Menu/bor.png";
import beefshawarmaonfries from "../assets/food/Menu/cof.png";
import beefshawarmaonveggies from "../assets/food/Menu/cov.png";
import kebabonrice from "../assets/food/Menu/kebab.png";
import falafelriceveggies from "../assets/food/Menu/for.png";
import falafelonveggies from "../assets/food/Menu/fov.png";
import chickenwrap from "../assets/food/Menu/cwrap.png";
import chickenmandi from "../assets/food/Menu/cmr.png";
import beefwrap from "../assets/food/Menu/bwrap.png";
import falafelwrap from "../assets/food/Menu/falafel.png";
import wraponfries from "../assets/food/Menu/wof.png";
import poutine from "../assets/food/Menu/cpoutine.png";
import tabouli from "../assets/food/Menu/tobuli.png";
import fattoush from "../assets/food/Menu/fatoush.png";
import kooba from "../assets/food/Menu/kooba.png";
import turkeycheesepie from "../assets/food/Menu/turkey.png";
import familywrap from "../assets/food/Menu/familywrap.png";
import falafelonrice from "../assets/food/Menu/falafel family.png";
import fetaCheesePie from "../assets/food/Menu/feta.png";
import baklava from "../assets/food/Menu/baklava.png";
import shortbread from "../assets/food/Menu/sb.png";
import pittaBread from "../assets/food/Menu/pitta.png";
import flatBread from "../assets/food/Menu/bread.png";
import friesLarge from "../assets/food/Menu/fries.png";
import hummus from "../assets/food/Menu/hummus.png";
import garlicSauce from "../assets/food/Menu/garlic.png";
import groundBeefPie from "../assets/food/Menu/gb.png";
import sidepoutine from "../assets/food/Menu/poutine.png";
import rice from "../assets/food/Menu/rice.png";
import thereejars from "../assets/food/Menu/threejars.png";
import sidefalafel from "../assets/food/Menu/sfalafel.png";
import grapeLeaves from "../assets/food/Menu/gl.png";
import basbousa from "../assets/food/Menu/bas.jpeg";
import dateCookies from "../assets/food/Menu/date.jpeg";
import mixedPickles from "../assets/food/Menu/mp.png";
import chickenonricefamily from "../assets/food/Menu/corf.jpeg";
import chickenmandifamily from "../assets/food/Menu/cmf.png";
import kebabonricefamily from "../assets/food/Menu/kebabfamily.png";
import spinachpie from "../assets/food/Menu/sp.png";

export type MenuPrice = {
  regular?: string;
  large?: string;
  price?: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: MenuPrice;
  featured?: boolean;
  vegetarian?: boolean;
  serves?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "plates",
    name: "Plates",
    shortName: "Plates",
    description:
      "Generous plates of authentic Syrian flavours, served with your choice of sides.",
    items: [
      {
        id: "chicken-shawarma-rice-veggies",
        name: "Chicken Shawarma on Rice & Veggies",
        description:
          "Marinated Syrian-style chicken on rice with fresh veggies.",
        price: {
          regular: "$14.49",
          large: "$16.99",
        },
        image: chickenShawarmaRice,
      },
      {
        id: "chicken-shawarma-fries",
        name: "Chicken Shawarma on Fries",
        description:
          "Marinated Syrian-style chicken served on fries with your choice of sauce.",
        price: {
          regular: "$14.49",
        },
        image: chickenShawarmafries,
      },
      {
        id: "chicken-shawarma-veggies",
        name: "Chicken Shawarma on Veggies",
        description:
          "Marinated Syrian-style chicken with veggies and your choice of sauce.",
        price: {
          regular: "$14.49",
          large: "$16.99",
        },
        image: chickenShawarmaVeggies,

      },
      {
        id: "chicken-mandi-rice",
        name: "Chicken Mandi on Rice",
        description:
          "Marinated chicken served on rice and grilled on low heat for a flavourful taste.",
        price: {
          regular: "$14.99",
        },
        image: chickenmandi,
      },
      {
        id: "beef-shawarma-rice-veggies",
        name: "Beef Shawarma on Rice & Veggies",
        description:
          "Marinated Syrian-style beef on rice with veggies.",
        price: {
          regular: "$15.49",
          large: "$17.99",
        },
        image: beefshawarmaonrice,
      },
      {
        id: "beef-shawarma-fries",
        name: "Beef Shawarma on Fries",
        description:
          "Marinated Syrian-style beef served on fries with your choice of sauce.",
        price: {
          regular: "$15.49",
        },
        image: beefshawarmaonfries,
      },
      {
        id: "beef-shawarma-veggies",
        name: "Beef Shawarma on Veggies",
        description:
          "Marinated Syrian-style beef with veggies and your choice of sauce.",
        price: {
          regular: "$15.49",
          large: "$17.99",
        },
        image: beefshawarmaonveggies,
      },
      {
        id: "beef-kebab-rice-veggies",
        name: "Beef Kebab on Rice & Veggies",
        description:
          "Marinated grilled skewered beef served with rice and veggies.",
        price: {
          regular: "$17.49",
        },
        image: kebabonrice,
      },
      {
        id: "falafel-rice-veggies",
        name: "Falafel on Rice & Veggies",
        description:
          "Freshly made chickpea mixture served with rice, veggies and sauce.",
        price: {
          regular: "$13.99",
        },
        image: falafelriceveggies,
        vegetarian: true,
      },
      {
        id: "falafel-veggies",
        name: "Falafel on Veggies",
        description:
          "Freshly made chickpea mixture served with veggies and sauce.",
        price: {
          regular: "$13.99",
        },
        image: falafelonveggies,
        vegetarian: true,
      },
      {
        id: "half-half-rice-veggies",
        name: "Half & Half on Rice & Veggies",
        description:
          "Half chicken and half beef served with rice, veggies and sauce.",
        price: {
          regular: "$17.99",
        },
        image: beefshawarmaonrice,
      },
      {
        id: "half-half-veggies",
        name: "Half & Half on Veggies",
        description:
          "Half chicken and half beef served with veggies and sauce.",
        price: {
          regular: "$17.99",
        },
        image: beefshawarmaonveggies,
      },
    ],
  },

  {
    id: "wraps",
    name: "Wraps",
    shortName: "Wraps",
    description:
      "Freshly wrapped Syrian-style shawarma with your choice of garlic sauce, hot sauce and veggies.",
    items: [
      {
        id: "chicken-shawarma-wrap",
        name: "Chicken Shawarma",
        description:
          "Chicken shawarma wrap with garlic sauce, hot sauce and veggies of your choice.",
        price: {
          regular: "$9.99",
          large: "$12.99",
        },
        image: chickenwrap,
      },
      {
        id: "beef-shawarma-wrap",
        name: "Beef Shawarma",
        description:
          "Beef shawarma wrap with garlic sauce, hot sauce and veggies of your choice.",
        price: {
          regular: "$10.99",
          large: "$13.99",
        },
        image: beefwrap,
      },
      {
        id: "falafel-wrap",
        name: "Falafel",
        description:
          "Falafel wrap with garlic sauce, hot sauce and veggies of your choice.",
        price: {
          regular: "$8.99",
          large: "$10.99",
        },
        image: falafelwrap,
        vegetarian: true,
      },
      {
        id: "half-half-wrap",
        name: "Half & Half",
        description:
          "A combination of chicken and beef with your choice of garlic sauce, hot sauce and veggies.",
        price: {
          large: "$13.99",
        },
        image: beefwrap,
      },
    ],
  },

  {
    id: "wrap-on-fries",
    name: "Wrap on Fries",
    shortName: "Wrap + Fries",
    description:
      "Arabic-style wraps served over a generous bed of fries.",
    items: [
      {
        id: "arabic-chicken-wrap-fries",
        name: "Arabic Chicken Wrap on Fries",
        description:
          "Shawarma chicken wrap slices served on fries.",
        price: {
          price: "$17.49",
        },
        image: wraponfries,
      },
      {
        id: "arabic-beef-wrap-fries",
        name: "Arabic Beef Wrap on Fries",
        description:
          "Arabic-style beef wrap slices served on fries.",
        price: {
          price: "$18.49",
        },
        image: wraponfries,
      },
    ],
  },

  {
    id: "poutine",
    name: "Poutine",
    shortName: "Poutine",
    description:
      "A Damascus twist on a Canadian classic.",
    items: [
      {
        id: "chicken-shawarma-poutine",
        name: "Chicken Shawarma Poutine",
        description:
          "Marinated Syrian-style chicken on fries with gravy and cheese curds.",
        price: {
          price: "$15.49",
        },
        image: poutine,
      },
      {
        id: "beef-shawarma-poutine",
        name: "Beef Shawarma Poutine",
        description:
          "Marinated Syrian-style shawarma on fries with gravy and cheese curds.",
        price: {
          price: "$16.49",
        },
        image: poutine,
      },
    ],
  },

  {
    id: "salads",
    name: "Salads",
    shortName: "Salads",
    description:
      "Fresh Mediterranean-inspired salads prepared to order.",
    items: [
      {
        id: "tabouli-salad",
        name: "Tabouli Salad",
        description:
          "A fresh Syrian-style parsley and bulgur salad.",
        price: {
          price: "$7.99",
        },
        image: tabouli,
        vegetarian: true,
      },
      {
        id: "fattoush-salad",
        name: "Fattoush Salad",
        description:
          "Fresh vegetables and herbs with traditional Middle Eastern flavours.",
        price: {
          price: "$9.99",
        },
        image: fattoush,
        vegetarian: true,
      },
    ],
  },
    {
    id: "family-meals",
    name: "Family Meals",
    shortName: "Family",
    description:
      "Family-sized trays made for sharing. Perfect for groups and gatherings.",
    items: [
      {
        id: "family-chicken-wrap-platter",
        name: "Chicken Shawarma Wrap Platter with Fries",
        description:
          "Family-sized tray of marinated Syrian-style chicken wrap with fries.",
        price: {
          price: "$57.99",
        },
        image: familywrap,
        serves: "Serves 5",
      },
      {
        id: "family-chicken-rice",
        name: "Chicken Shawarma on Rice",
        description:
          "Family-sized tray of marinated Syrian-style chicken on rice.",
        price: {
          price: "$57.99",
        },
        serves: "Serves 5",
        image: chickenonricefamily,
      },
      {
        id: "family-chicken-mandi",
        name: "Chicken Mandi on Rice",
        description:
          "Five chicken legs served on rice.",
        price: {
          price: "$64.99",
        },
        serves: "Serves 5",
        image: chickenmandifamily,
      },
      {
        id: "family-falafel-veggies",
        name: "Falafel on Veggies",
        description:
          "Family-sized tray of freshly made chickpea mixture served with veggies and sauce.",
        price: {
          price: "$39.99",
        },
        image: falafelonrice,
        serves: "Serves 4",
        vegetarian: true,
      },
      {
        id: "family-falafel-wrap",
        name: "Falafel Wrap Platter with Fries",
        description:
          "Family-sized tray of freshly made chickpea mixture wrap with fries.",
        price: {
          price: "$52.99",
        },
        image: familywrap,
        serves: "Serves 5",
        vegetarian: true,
      },
      {
        id: "family-beef-kebab-rice",
        name: "Beef Kebab on Rice",
        description:
          "Family-sized tray of marinated grilled skewered beef with rice.",
        price: {
          price: "$59.99",
        },
        serves: "Serves 5",
        image: kebabonricefamily,
      },
      {
        id: "family-beef-wrap-platter",
        name: "Beef Shawarma Wrap Platter with Fries",
        description:
          "Family-sized tray of marinated Syrian-style beef shawarma wrap with fries.",
        price: {
          price: "$62.99",
        },
        image: familywrap,
        serves: "Serves 5",
      },
      {
        id: "family-beef-rice",
        name: "Beef Shawarma on Rice",
        description:
          "Family-sized tray of marinated Syrian-style beef on rice.",
        price: {
          price: "$62.99",
        },
        serves: "Serves 5",
        image: chickenonricefamily,
      },
    ],
  },

  {
    id: "fatair",
    name: "Fatair",
    shortName: "Fatair",
    description:
      "Traditional Syrian-style savoury pastries, freshly prepared.",
    items: [
      {
        id: "spinach-pie",
        name: "Spinach Pie",
        description:
          "Traditional savoury spinach pastry.",
        price: {
          price: "$2.99",
        },
        vegetarian: true,
        image: spinachpie,
      },
      {
        id: "ground-beef-pie",
        name: "Ground Beef Pie",
        description:
          "Traditional savoury pastry filled with seasoned ground beef.",
        price: {
          price: "$2.99",
        },
        image: groundBeefPie,
      },
      {
        id: "feta-cheese-pie",
        name: "Feta Cheese Pie",
        description:
          "Savoury pastry filled with feta cheese.",
        price: {
          price: "$2.99",
        },
        vegetarian: true,
        image: fetaCheesePie,
      },
      {
        id: "turkey-cheese-pie",
        name: "Turkey & Cheese Pie",
        description:
          "Savoury pastry filled with turkey and cheese.",
        price: {
          price: "$2.99",
        },
        image: turkeycheesepie,
      },
    ],
  },

  {
    id: "desserts",
    name: "Desserts",
    shortName: "Desserts",
    description:
      "Finish your meal with traditional Syrian-inspired sweets.",
    items: [
      {
        id: "baklava",
        name: "Baklava",
        description:
          "Traditional Middle Eastern pastry dessert.",
        price: {
          regular: "$5.99",
          large: "$9.99",
        },
        image: baklava,
        vegetarian: true,
      },
      {
        id: "shortbread",
        name: "Shortbread",
        description:
          "Traditional Syrian wheat flour biscuits.",
        price: {
          large: "$9.99",
        },
        vegetarian: true,
        image: shortbread,
      },
      {
        id: "date-cookies",
        name: "Date Cookies",
        description:
          "Syrian-style date cookies dessert.",
        price: {
          large: "$9.99",
        },
        vegetarian: true,
        image: dateCookies,
      },
      {
        id: "basbousa",
        name: "Basbousa",
        description:
          "Sweet syrup-soaked semolina cake.",
        price: {
          large: "$9.99",
        },
        image: basbousa,
        vegetarian: true,
      },
    ],
  },
    {
    id: "sides",
    name: "Sides",
    shortName: "Sides",
    description:
      "Add something extra to make your meal complete.",
    items: [
      {
        id: "kooba",
        name: "Kooba",
        description:
          "Traditional Syrian-style savoury side.",
        price: {
          price: "$1.99",
        },
        image: kooba,
      },
      {
        id: "pita-bread",
        name: "Pita Bread",
        description: "2 pieces.",
        price: {
          price: "$2.99",
        },
        image: pittaBread,
        vegetarian: true,
      },
      {
        id: "flat-bread",
        name: "Flat Bread",
        description: "3 pieces.",
        price: {
          price: "$3.99",
        },
        vegetarian: true,
        image: flatBread,
      },
      {
        id: "fries-large",
        name: "Fries",
        description: "Large serving.",
        price: {
          regular: "$3.99",
          large: "$6.99",
        },
        vegetarian: true,
        image: friesLarge,
      },
      {
        id: "hummus",
        name: "Hummus",
        description:
          "Creamy chickpea and tahini dip.",
        price: {
          price: "$6.99",
        },
        vegetarian: true,
        image: hummus,
      },
      {
        id: "garlic-sauce",
        name: "Garlic Sauce",
        description:
          "Creamy Damascus-style garlic sauce.",
        price: {
          price: "$6.99",
        },
        vegetarian: true,
        image: garlicSauce,
      },
      {
        id: "mixed-pickles",
        name: "Mixed Pickles",
        description:
          "A selection of Middle Eastern-style pickled vegetables.",
        price: {
          price: "$3.99",
        },
        vegetarian: true,
        image: mixedPickles,
      },
      {
        id: "sliced-pickles",
        name: "Homemade Sliced Pickles/Pickled Peppers/Pickled Turnip",
        description:
          "Fresh homemade sliced pickles.",
        price: {
          price: "$9.99",
        },
        vegetarian: true,
        image: thereejars,
      },
      // {
      //   id: "pickled-peppers",
      //   name: "Homemade Pickled Peppers",
      //   description: "Homemade pickled peppers.",
      //   price: {
      //     price: "$9.99",
      //   },
      //   vegetarian: true,
      // },
      // {
      //   id: "pickled-turnip",
      //   name: "Homemade Pickled Turnip",
      //   description: "Traditional pickled turnip.",
      //   price: {
      //     price: "$9.99",
      //   },
      //   vegetarian: true,
      // },
      {
        id: "stuffed-grape-leaves",
        name: "Stuffed Grape Leaves",
        description: "12 pieces.",
        price: {
          price: "$9.99",
        },
        vegetarian: true,
        image: grapeLeaves,
      },
      {
        id: "seasoned-rice",
        name: "Seasoned Rice",
        description:
          "Fragrant seasoned rice.",
        price: {
          regular: "$3.99",
          large: "$6.99",
        },
        vegetarian: true,
        image: rice,
      },
      {
        id: "falafel-six",
        name: "Falafel",
        description: "6 pieces.",
        price: {
          price: "$5.99",
        },
        vegetarian: true,
        image: sidefalafel,
      },
      {
        id: "side-poutine",
        name: "Poutine",
        description:
          "Classic poutine with fries, gravy and cheese curds.",
        price: {
          price: "$8.99",
        },
        image: sidepoutine,
      },
    ],
  },

  {
    id: "drinks",
    name: "Drinks",
    shortName: "Drinks",
    description:
      "Something refreshing to go with your meal.",
    items: [
      {
        id: "water",
        name: "Water",
        description: "Bottled water.",
        price: {
          price: "$1.49",
        },
      },
      {
        id: "pop",
        name: "Pop",
        description: "Refreshing soft drink.",
        price: {
          price: "$1.99",
        },
      },
      {
        id: "bottled-juice",
        name: "Bottled Juice",
        description: "Assorted bottled juice.",
        price: {
          price: "$3.49",
        },
      },
      {
        id: "gatorade",
        name: "Gatorade",
        description: "Refreshing sports drink.",
        price: {
          price: "$2.49",
        },
      },
      {
        id: "yogurt-drink",
        name: "Yogurt Drink",
        description: "Traditional refreshing yogurt drink.",
        price: {
          price: "$3.99",
        },
      },
    ],
  },
];

export const featuredItems = menuCategories
  .flatMap((category) => category.items)
  .filter((item) => item.featured);