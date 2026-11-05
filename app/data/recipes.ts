export type Recipe = {
  id: number;
  title: string;
  cuisine: string;
  minutes: number;
  emoji: string;
  description: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    cuisine: "Italian",
    minutes: 25,
    emoji: "🍝",
    description: "Silky egg, pecorino and crispy guanciale tossed through hot pasta.",
    ingredients: ["200g spaghetti", "100g guanciale or pancetta", "2 whole eggs + 2 yolks", "50g pecorino romano", "Black pepper", "Salt"],
    steps: [
      "Boil the spaghetti in well-salted water until al dente.",
      "Fry the guanciale until golden and crisp, then turn off the heat.",
      "Whisk the eggs, yolks, pecorino and plenty of black pepper.",
      "Toss the hot pasta with the guanciale, splash in some pasta water, then stir in the egg mixture off the heat until creamy.",
    ],
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
    minutes: 45,
    emoji: "🍛",
    description: "Charred marinated chicken in a creamy, spiced tomato sauce.",
    ingredients: ["500g chicken thigh", "150g yogurt", "2 tbsp tikka masala paste", "1 onion", "400g chopped tomatoes", "100ml cream", "Garlic and ginger"],
    steps: [
      "Marinate the chicken in yogurt and half the spice paste for 20 minutes.",
      "Grill or pan-sear the chicken until charred, then set aside.",
      "Fry the onion, garlic and ginger, then add the remaining paste and tomatoes.",
      "Simmer for 15 minutes, stir in the cream and chicken, and cook until bubbling.",
    ],
  },
  {
    id: 3,
    title: "Veggie Tacos",
    cuisine: "Mexican",
    minutes: 20,
    emoji: "🌮",
    description: "Roasted peppers, black beans and lime crema in warm tortillas.",
    ingredients: ["8 small tortillas", "2 bell peppers", "1 can black beans", "1 avocado", "Sour cream", "2 limes", "Fresh coriander"],
    steps: [
      "Slice the peppers and roast them until soft and blistered.",
      "Warm the black beans with cumin and a pinch of salt.",
      "Mix the sour cream with lime juice to make the crema.",
      "Fill the warm tortillas with peppers, beans, avocado and crema, and top with coriander.",
    ],
  },
  {
    id: 4,
    title: "Miso Ramen",
    cuisine: "Japanese",
    minutes: 35,
    emoji: "🍜",
    description: "Rich miso broth with noodles, soft egg, corn and scallions.",
    ingredients: ["2 portions ramen noodles", "800ml chicken or veg stock", "3 tbsp white miso", "2 soft-boiled eggs", "Sweetcorn", "Spring onions", "Sesame oil"],
    steps: [
      "Heat the stock with garlic and ginger and simmer for 10 minutes.",
      "Whisk the miso into a ladle of hot stock, then stir it back into the pot.",
      "Cook the noodles separately and divide between bowls.",
      "Ladle over the broth and top with halved eggs, corn, spring onions and a drizzle of sesame oil.",
    ],
  },
  {
    id: 5,
    title: "Greek Salad",
    cuisine: "Greek",
    minutes: 10,
    emoji: "🥗",
    description: "Crisp cucumber, tomato, olives and feta with oregano dressing.",
    ingredients: ["4 ripe tomatoes", "1 cucumber", "1 red onion", "Kalamata olives", "200g feta", "Olive oil", "Dried oregano"],
    steps: [
      "Chop the tomatoes and cucumber into chunky pieces and slice the onion thinly.",
      "Combine in a bowl with the olives.",
      "Dress with olive oil, oregano and a pinch of salt.",
      "Top with a slab of feta and serve immediately.",
    ],
  },
  {
    id: 6,
    title: "Banana Pancakes",
    cuisine: "American",
    minutes: 15,
    emoji: "🥞",
    description: "Fluffy pancakes with caramelised banana and maple syrup.",
    ingredients: ["2 ripe bananas", "150g flour", "1 tsp baking powder", "1 egg", "200ml milk", "Butter", "Maple syrup"],
    steps: [
      "Mash one banana and whisk it with the egg and milk.",
      "Fold in the flour and baking powder until just combined.",
      "Cook ladlefuls in buttered pan until bubbles form, then flip.",
      "Slice the other banana, caramelise it in the pan, and serve over the pancakes with maple syrup.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => String(recipe.id) === id);
}
