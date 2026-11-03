export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  emoji: string;
  description: string;
};

export const recipes: Recipe[] = [
  { id: 1, title: "Spaghetti Carbonara", cuisine: "Italian", minutes: 25, emoji: "🍝", description: "Silky egg, pecorino and crispy guanciale tossed through hot pasta." },
  { id: 2, title: "Chicken Tikka Masala", cuisine: "Indian", minutes: 45, emoji: "🍛", description: "Charred marinated chicken in a creamy, spiced tomato sauce." },
  { id: 3, title: "Veggie Tacos", cuisine: "Mexican", minutes: 20, emoji: "🌮", description: "Roasted peppers, black beans and lime crema in warm tortillas." },
  { id: 4, title: "Miso Ramen", cuisine: "Japanese", minutes: 35, emoji: "🍜", description: "Rich miso broth with noodles, soft egg, corn and scallions." },
  { id: 5, title: "Greek Salad", cuisine: "Greek", minutes: 10, emoji: "🥗", description: "Crisp cucumber, tomato, olives and feta with oregano dressing." },
  { id: 6, title: "Banana Pancakes", cuisine: "American", minutes: 15, emoji: "🥞", description: "Fluffy pancakes with caramelised banana and maple syrup." },
];
