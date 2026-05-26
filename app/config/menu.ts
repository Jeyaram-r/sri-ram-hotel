// import breakfast from "../images/breakfast.webp";
// import lunch from "../images/lunch.jpg"
// import dinner from "../images/dinner.jpg"
const breakfast = "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80";
const lunch = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80";
const dinner = "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&q=80";
export interface MealCategory {
  title: string;
  items: MenuItem[];
}
export interface MenuItem {
  name: string;
  price: number;
}
export interface MenuSection {
  mealType: string;
  mealTypeImg: {
    src: string;
  };
  categories: MealCategory[];
}

export const hotelMenu: MenuSection[] = [
  {
    mealType: "Breakfast",
    mealTypeImg: breakfast,
    categories: [
      {
        title: "Main Dish",
        items: [
          { name: "Idly", price: 7 },
          { name: "Dosa", price: 10 },
          { name: "Appam", price: 10 },
          {name:"Poori",price:10},
          { name: "Special Dosa", price: 20 },
          { name: "Egg Dosa", price: 30 },
        ],

      },
      {
        title: "Curry",
        items: [
          { name: "Kadala Curry", price: 15 },
          { name: "Kilangu Curry", price: 15 },

        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Omblete", price: 15 },
          { name: "Vadai", price: 10 },
        ],
      },
    ],
  },
  {
    mealType: "Lunch",
    mealTypeImg: lunch,
    categories: [
      {
        title: "Main Dish",
        items: [
          { name: "Poratta", price: 10 },
          { name: "Egg Briyani", price: 50 },
          { name: "Empty Briyani", price: 40 },
          { name: "Kothu Poratta", price: 70 },
        ],
      },
      {
        title: "Curry",
        items: [
          { name: "Egg Curry", price: 20 },
          { name: "Chicken Curry", price: 60 },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Omblete", price: 15 },
          { name: "Egg Fry", price: 40 },
          { name: "Chicken Fry", price: 70 },
        ],
      },
    ],
  },
  {
    mealType: "Dinner",
    mealTypeImg: dinner,
    categories: [
      {
        title: "Main Dish",
        items: [
          { name: "Idly", price: 7 },
          { name: "Dosa", price: 7 },
          { name: "Chappathi", price: 10 },
          { name: "Special Dosa", price: 20 },
          { name: "Egg Dosa", price: 30 },
          { name: "Poratta", price: 10 },
        ],
      },
      {
        title: "Curry",
        items: [
          { name: "Kuruma", price: 0 },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Omblete", price: 15 },
          { name: "Egg Fry", price: 40 },
        ],
      },
    ],
  },
];