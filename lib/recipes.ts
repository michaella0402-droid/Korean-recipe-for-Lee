export type Language = 'en' | 'de';

export interface Recipe {
  id: string;
  title: {
    ko: string;
    en: string;
    de: string;
  };
  description: {
    en: string;
    de: string;
  };
  image: string;
  stats: {
    spiciness: 1 | 2 | 3 | 4 | 5;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    kidRating: 1 | 2 | 3 | 4 | 5;
    time: number; // minutes
    servings: number;
  };
  nutrition: {
    calories: number; // kcal
    protein: string;
    carbs: string;
    fat: string;
  };
  tags?: string[];
  ingredients: {
    main: { name: { en: string; de: string }; amount: string; isLactoseFreeSubstitute?: boolean }[];
    broth?: { name: { en: string; de: string }; amount: string }[];
    optional?: { name: { en: string; de: string }; amount: string; substitute?: string }[];
  };
  steps: {
    description: { en: string; de: string };
    timeMinutes: number;
    tip?: { en: string; de: string };
  }[];
}

export const recipes: Recipe[] = [
  // 1. Bulgogi (Medium)
  {
    id: 'bulgogi',
    title: { ko: '소불고기', en: 'Beef Bulgogi', de: 'Rindfleisch Bulgogi' },
    description: {
      en: 'Classic Korean marinated beef BBQ. Sweet, savory, and perfect for kids.',
      de: 'Klassisches koreanisches mariniertes Rindfleisch-BBQ. Süß, herzhaft und perfekt für Kinder.',
    },
    image: 'https://images.unsplash.com/photo-1626509673432-d8510a271701?q=80&w=1200&auto=format&fit=crop',
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 5, time: 40, servings: 4 },
    nutrition: { calories: 450, protein: '35g', carbs: '15g', fat: '20g' },
    tags: ['Meal Kit Friendly', 'Kids Favorite'],
    ingredients: {
      main: [
        { name: { en: 'Thinly sliced beef', de: 'Dünn geschnittenes Rindfleisch' }, amount: '600g' },
        { name: { en: 'Onion', de: 'Zwiebel' }, amount: '1 ea' },
        { name: { en: 'Carrot', de: 'Karotte' }, amount: '1/2 ea' },
      ],
      broth: [
        { name: { en: 'Soy Sauce', de: 'Sojasauce' }, amount: '6 Tbsp' },
        { name: { en: 'Sugar', de: 'Zucker' }, amount: '3 Tbsp' },
        { name: { en: 'Minced Garlic', de: 'Gehackter Knoblauch' }, amount: '1 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Mix sauce ingredients.', de: 'Saucenzutaten mischen.' }, timeMinutes: 5 },
      { description: { en: 'Marinate beef and vegetables.', de: 'Fleisch und Gemüse marinieren.' }, timeMinutes: 30 },
      { description: { en: 'Stir fry until cooked.', de: 'Anbraten bis gar.' }, timeMinutes: 10 },
    ],
  },
  // 2. Kimchi Jjigae (Medium)
  {
    id: 'kimchi-jjigae',
    title: { ko: '김치찌개', en: 'Kimchi Stew', de: 'Kimchi-Eintopf' },
    description: {
      en: 'Spicy, hearty stew made with fermented kimchi and pork belly.',
      de: 'Würziger, herzhafter Eintopf mit fermentiertem Kimchi und Schweinebauch.',
    },
    image: 'https://images.unsplash.com/photo-1583225214464-9296bd0790fa?q=80&w=1200&auto=format&fit=crop',
    stats: { spiciness: 4, difficulty: 'Medium', kidRating: 2, time: 30, servings: 4 },
    nutrition: { calories: 350, protein: '20g', carbs: '10g', fat: '25g' },
    tags: ['Spicy', 'Winter'],
    ingredients: {
      main: [
        { name: { en: 'Aged Kimchi', de: 'Gereiftes Kimchi' }, amount: '500g' },
        { name: { en: 'Pork Belly', de: 'Schweinebauch' }, amount: '300g' },
        { name: { en: 'Tofu', de: 'Tofu' }, amount: '1 block' },
      ],
      broth: [
        { name: { en: 'Kimchi Juice', de: 'Kimchisaft' }, amount: '1/2 cup' },
        { name: { en: 'Water', de: 'Wasser' }, amount: '3 cups' },
      ],
    },
    steps: [
      { description: { en: 'Fry pork and kimchi.', de: 'Schweinefleisch und Kimchi anbraten.' }, timeMinutes: 5 },
      { description: { en: 'Add liquids and boil.', de: 'Flüssigkeiten hinzufügen und kochen.' }, timeMinutes: 15 },
      { description: { en: 'Add tofu and finish.', de: 'Tofu hinzufügen und fertigstellen.' }, timeMinutes: 5 },
    ],
  },
  // 3. Japchae (Medium) - Kids Favorite
  {
    id: 'japchae',
    title: { ko: '잡채', en: 'Japchae (Glass Noodles)', de: 'Japchae (Glasnudeln)' },
    description: {
      en: 'Sweet and savory stir-fried glass noodles with vegetables and beef.',
      de: 'Süß-herzhafte gebratene Glasnudeln mit Gemüse und Rindfleisch.',
    },
    image: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=1200&auto=format&fit=crop',
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 5, time: 45, servings: 4 },
    nutrition: { calories: 380, protein: '12g', carbs: '65g', fat: '8g' },
    tags: ['Kids Favorite', 'Party Food'],
    ingredients: {
      main: [
        { name: { en: 'Glass Noodles (Dangmyeon)', de: 'Glasnudeln' }, amount: '300g' },
        { name: { en: 'Spinach', de: 'Spinat' }, amount: '1 bunch' },
        { name: { en: 'Carrot', de: 'Karotte' }, amount: '1/2 ea' },
        { name: { en: 'Beef strips', de: 'Rindfleischstreifen' }, amount: '100g' },
      ],
      broth: [
        { name: { en: 'Soy Sauce', de: 'Sojasauce' }, amount: '5 Tbsp' },
        { name: { en: 'Sugar', de: 'Zucker' }, amount: '2 Tbsp' },
        { name: { en: 'Sesame Oil', de: 'Sesamöl' }, amount: '2 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Boil noodles for 6 mins and rinse.', de: 'Nudeln 6 Min kochen und abspülen.' }, timeMinutes: 10 },
      { description: { en: 'Stir fry vegetables and meat separately.', de: 'Gemüse und Fleisch separat anbraten.' }, timeMinutes: 15 },
      { description: { en: 'Mix everything with sauce.', de: 'Alles mit der Sauce vermischen.' }, timeMinutes: 5 },
    ],
  },
  // 4. Bibimbap (Easy) - Healthy
  {
    id: 'bibimbap',
    title: { ko: '비빔밥', en: 'Bibimbap', de: 'Bibimbap' },
    description: {
      en: 'Mixed rice with assorted vegetables, meat, and gochujang sauce.',
      de: 'Gemischter Reis mit verschiedenem Gemüse, Fleisch und Gochujang-Sauce.',
    },
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?q=80&w=1200&auto=format&fit=crop',
    stats: { spiciness: 2, difficulty: 'Easy', kidRating: 4, time: 20, servings: 2 },
    nutrition: { calories: 550, protein: '25g', carbs: '80g', fat: '15g' },
    tags: ['Diet', 'Vegetable Heavy'],
    ingredients: {
      main: [
        { name: { en: 'Steamed Rice', de: 'Gekochter Reis' }, amount: '2 bowls' },
        { name: { en: 'Bean Sprouts', de: 'Sojasprossen' }, amount: '100g' },
        { name: { en: 'Spinach', de: 'Spinat' }, amount: '100g' },
        { name: { en: 'Fried Egg', de: 'Spiegelei' }, amount: '2 ea' },
      ],
      broth: [
        { name: { en: 'Gochujang (Red Pepper Paste)', de: 'Gochujang (Chilipaste)' }, amount: '2 Tbsp' },
        { name: { en: 'Sesame Oil', de: 'Sesamöl' }, amount: '1 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Blanch spinach and bean sprouts.', de: 'Spinat und Sojasprossen blanchieren.' }, timeMinutes: 10 },
      { description: { en: 'Fry egg sunny side up.', de: 'Spiegelei braten.' }, timeMinutes: 5 },
      { description: { en: 'Put rice in bowl, top with veggies and egg.', de: 'Reis in Schüssel geben, mit Gemüse und Ei belegen.' }, timeMinutes: 5 },
    ],
  },
  // 5. Gyeran-mari (Easy) - Quick < 15min
  {
    id: 'gyeran-mari',
    title: { ko: '계란말이', en: 'Rolled Omelette', de: 'Gerolltes Omelett' },
    description: {
      en: 'Soft, fluffy rolled egg omelette with vegetables. A popular side dish.',
      de: 'Weiches, fluffiges gerolltes Ei-Omelett mit Gemüse. Eine beliebte Beilage.',
    },
    image: 'https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=1200&auto=format&fit=crop',
    stats: { spiciness: 1, difficulty: 'Easy', kidRating: 5, time: 10, servings: 2 },
    nutrition: { calories: 150, protein: '12g', carbs: '2g', fat: '10g' },
    tags: ['Quick < 15m', 'Kids Favorite', 'Side Dish'],
    ingredients: {
      main: [
        { name: { en: 'Eggs', de: 'Eier' }, amount: '4 ea' },
        { name: { en: 'Minced Carrot', de: 'Gehackte Karotte' }, amount: '1 Tbsp' },
        { name: { en: 'Minced Green Onion', de: 'Gehackte Frühlingszwiebel' }, amount: '1 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Whisk eggs with salt and veggies.', de: 'Eier mit Salz und Gemüse verquirlen.' }, timeMinutes: 2 },
      { description: { en: 'Pour thin layer in pan, roll, repeat.', de: 'Dünne Schicht in Pfanne geben, rollen, wiederholen.' }, timeMinutes: 8 },
    ],
  },
  // 6. Tteokbokki (Easy) - Meal Kit Friendly
  {
    id: 'tteokbokki',
    title: { ko: '떡볶이', en: 'Tteokbokki (Spicy Rice Cakes)', de: 'Tteokbokki (Scharfe Reiskuchen)' },
    description: {
      en: 'Chewy rice cakes in a sweet and spicy chili sauce.',
      de: 'Zähe Reiskuchen in einer süß-scharfen Chilisauce.',
    },
    image: 'https://images.unsplash.com/photo-1583224964978-2257b9607036?q=80&w=1200&auto=format&fit=crop',
    stats: { spiciness: 3, difficulty: 'Easy', kidRating: 4, time: 20, servings: 2 },
    nutrition: { calories: 600, protein: '10g', carbs: '120g', fat: '5g' },
    tags: ['Meal Kit Friendly', 'Street Food'],
    ingredients: {
      main: [
        { name: { en: 'Rice Cakes', de: 'Reiskuchen' }, amount: '300g' },
        { name: { en: 'Fish Cake', de: 'Fischkuchen' }, amount: '2 sheets' },
        { name: { en: 'Green Onion', de: 'Frühlingszwiebel' }, amount: '1 stalk' },
      ],
      broth: [
        { name: { en: 'Gochujang', de: 'Gochujang' }, amount: '2 Tbsp' },
        { name: { en: 'Sugar', de: 'Zucker' }, amount: '2 Tbsp' },
        { name: { en: 'Water', de: 'Wasser' }, amount: '2 cups' },
      ],
    },
    steps: [
      { description: { en: 'Boil water with sauce ingredients.', de: 'Wasser mit Saucenzutaten kochen.' }, timeMinutes: 5 },
      { description: { en: 'Add rice cakes and fish cakes. Simmer.', de: 'Reiskuchen und Fischkuchen hinzufügen. Köcheln lassen.' }, timeMinutes: 10 },
      { description: { en: 'Add green onions and serve.', de: 'Frühlingszwiebeln hinzufügen und servieren.' }, timeMinutes: 2 },
    ],
  },
  // 7. Samgyetang (Hard) - Healthy/Muscle
  {
    id: 'samgyetang',
    title: { ko: '삼계탕', en: 'Ginseng Chicken Soup', de: 'Ginseng-Hühnersuppe' },
    description: {
      en: 'Whole young chicken filled with rice, ginseng, and dates. Summer energy food.',
      de: 'Ganzes junges Huhn gefüllt mit Reis, Ginseng und Datteln. Sommer-Energie-Essen.',
    },
    image: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Hard', kidRating: 3, time: 90, servings: 2 },
    nutrition: { calories: 700, protein: '60g', carbs: '30g', fat: '25g' },
    tags: ['Healthy', 'Muscle Gain'],
    ingredients: {
      main: [
        { name: { en: 'Small Whole Chicken', de: 'Kleines ganzes Huhn' }, amount: '2 ea' },
        { name: { en: 'Glutinous Rice', de: 'Klebreis' }, amount: '1/2 cup' },
        { name: { en: 'Ginseng Root', de: 'Ginsengwurzel' }, amount: '2 ea' },
        { name: { en: 'Garlic', de: 'Knoblauch' }, amount: '10 cloves' },
      ],
    },
    steps: [
      { description: { en: 'Stuff chicken with rice, ginseng, garlic.', de: 'Huhn mit Reis, Ginseng, Knoblauch füllen.' }, timeMinutes: 15 },
      { description: { en: 'Boil in water for 1 hour until tender.', de: 'In Wasser 1 Stunde kochen bis zart.' }, timeMinutes: 60 },
      { description: { en: 'Skim fat and serve with salt.', de: 'Fett abschöpfen und mit Salz servieren.' }, timeMinutes: 5 },
    ],
  },
  // 8. Galbi-jjim (Hard) - Special
  {
    id: 'galbi-jjim',
    title: { ko: '갈비찜', en: 'Braised Short Ribs', de: 'Geschmorte Rippchen' },
    description: {
      en: 'Tender beef short ribs braised in a sweet soy glaze with vegetables.',
      de: 'Zarte Rinderrippchen geschmort in einer süßen Sojaglasur mit Gemüse.',
    },
    image: 'https://images.unsplash.com/photo-1606213651356-cb250b445855?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Hard', kidRating: 5, time: 120, servings: 4 },
    nutrition: { calories: 650, protein: '40g', carbs: '25g', fat: '40g' },
    tags: ['Party Food', 'Special Occasion'],
    ingredients: {
      main: [
        { name: { en: 'Beef Short Ribs', de: 'Rinderrippchen' }, amount: '1kg' },
        { name: { en: 'Radish', de: 'Rettich' }, amount: '200g' },
        { name: { en: 'Carrot', de: 'Karotte' }, amount: '1 ea' },
      ],
      broth: [
        { name: { en: 'Soy Sauce', de: 'Sojasauce' }, amount: '1/2 cup' },
        { name: { en: 'Sugar', de: 'Zucker' }, amount: '1/4 cup' },
        { name: { en: 'Pear/Apple Puree', de: 'Birnen-/Apfelmus' }, amount: '1/2 cup' },
      ],
    },
    steps: [
      { description: { en: 'Soak ribs to remove blood.', de: 'Rippchen einweichen, um Blut zu entfernen.' }, timeMinutes: 30 },
      { description: { en: 'Parboil ribs for 5 mins.', de: 'Rippchen 5 Min vorkochen.' }, timeMinutes: 10 },
      { description: { en: 'Simmer with sauce and veggies for 1 hour.', de: 'Mit Sauce und Gemüse 1 Stunde köcheln.' }, timeMinutes: 60 },
    ],
  },
  // 9. Doenjang Jjigae (Medium) - Healthy
  {
    id: 'doenjang-jjigae',
    title: { ko: '된장찌개', en: 'Soybean Paste Stew', de: 'Sojabohnenpasten-Eintopf' },
    description: {
      en: 'Savory stew made with soybean paste, tofu, and vegetables.',
      de: 'Herzhafter Eintopf mit Sojabohnenpaste, Tofu und Gemüse.',
    },
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 2, difficulty: 'Medium', kidRating: 3, time: 25, servings: 4 },
    nutrition: { calories: 200, protein: '15g', carbs: '15g', fat: '8g' },
    tags: ['Healthy', 'Staple'],
    ingredients: {
      main: [
        { name: { en: 'Tofu', de: 'Tofu' }, amount: '1/2 block' },
        { name: { en: 'Zucchini', de: 'Zucchini' }, amount: '1/2 ea' },
        { name: { en: 'Potato', de: 'Kartoffel' }, amount: '1 ea' },
      ],
      broth: [
        { name: { en: 'Doenjang (Soybean Paste)', de: 'Doenjang (Sojapaste)' }, amount: '3 Tbsp' },
        { name: { en: 'Dried Anchovies', de: 'Getrocknete Sardellen' }, amount: '10 ea' },
      ],
    },
    steps: [
      { description: { en: 'Make broth with anchovies.', de: 'Brühe mit Sardellen kochen.' }, timeMinutes: 10 },
      { description: { en: 'Dissolve paste and add veggies.', de: 'Paste auflösen und Gemüse hinzufügen.' }, timeMinutes: 10 },
      { description: { en: 'Add tofu and boil.', de: 'Tofu hinzufügen und kochen.' }, timeMinutes: 5 },
    ],
  },
  // 10. Haemul Pajeon (Medium)
  {
    id: 'pajeon',
    title: { ko: '해물파전', en: 'Seafood Pancake', de: 'Meeresfrüchte-Pfannkuchen' },
    description: {
      en: 'Crispy savory pancake with green onions and mixed seafood.',
      de: 'Knuspriger herzhafter Pfannkuchen mit Frühlingszwiebeln und Meeresfrüchten.',
    },
    image: 'https://images.unsplash.com/photo-1625860638524-76505f93278c?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 4, time: 30, servings: 2 },
    nutrition: { calories: 400, protein: '20g', carbs: '45g', fat: '18g' },
    tags: ['Rainy Day Food', 'Side Dish'],
    ingredients: {
      main: [
        { name: { en: 'Green Onions', de: 'Frühlingszwiebeln' }, amount: '1 bunch' },
        { name: { en: 'Seafood Mix', de: 'Meeresfrüchtemischung' }, amount: '1 cup' },
        { name: { en: 'Flour/Pancake Mix', de: 'Mehl/Pfannkuchenmischung' }, amount: '1 cup' },
      ],
    },
    steps: [
      { description: { en: 'Mix batter with water.', de: 'Teig mit Wasser mischen.' }, timeMinutes: 5 },
      { description: { en: 'Place onions in pan, pour batter.', de: 'Zwiebeln in Pfanne legen, Teig darüber gießen.' }, timeMinutes: 5 },
      { description: { en: 'Add seafood, flip when crispy.', de: 'Meeresfrüchte hinzufügen, wenden wenn knusprig.' }, timeMinutes: 10 },
    ],
  },
  // 11. Jajangmyeon (Medium) - Chinese-Korean
  {
    id: 'jajangmyeon',
    title: { ko: '짜장면', en: 'Jajangmyeon', de: 'Jajangmyeon' },
    description: {
      en: 'Noodles in a black bean sauce. The most popular delivery food in Korea.',
      de: 'Nudeln in einer schwarzen Bohnensauce. Das beliebteste Lieferessen in Korea.',
    },
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 5, time: 30, servings: 2 },
    nutrition: { calories: 700, protein: '20g', carbs: '110g', fat: '20g' },
    tags: ['Chinese-Korean', 'Kids Favorite'],
    ingredients: {
      main: [
        { name: { en: 'Chunjang (Black Bean Paste)', de: 'Chunjang (Schwarze Bohnenpaste)' }, amount: '4 Tbsp' },
        { name: { en: 'Pork', de: 'Schweinefleisch' }, amount: '200g' },
        { name: { en: 'Onion', de: 'Zwiebel' }, amount: '2 ea' },
        { name: { en: 'Fresh Noodles', de: 'Frische Nudeln' }, amount: '2 servings' },
      ],
    },
    steps: [
      { description: { en: 'Fry paste in oil.', de: 'Paste in Öl anbraten.' }, timeMinutes: 5 },
      { description: { en: 'Stir fry meat and veggies.', de: 'Fleisch und Gemüse anbraten.' }, timeMinutes: 10 },
      { description: { en: 'Add fried paste and water/starch.', de: 'Gebratene Paste und Wasser/Stärke hinzufügen.' }, timeMinutes: 10 },
      { description: { en: 'Serve over boiled noodles.', de: 'Über gekochte Nudeln servieren.' }, timeMinutes: 5 },
    ],
  },
  // 12. Tangsuyuk (Hard) - Chinese-Korean
  {
    id: 'tangsuyuk',
    title: { ko: '탕수육', en: 'Sweet and Sour Pork', de: 'Süß-saures Schweinefleisch' },
    description: {
      en: 'Crispy deep-fried pork with a sweet and tangy fruit sauce.',
      de: 'Knusprig frittiertes Schweinefleisch mit einer süß-sauren Fruchtsauce.',
    },
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Hard', kidRating: 5, time: 50, servings: 4 },
    nutrition: { calories: 600, protein: '25g', carbs: '60g', fat: '35g' },
    tags: ['Chinese-Korean', 'Deep Fried'],
    ingredients: {
      main: [
        { name: { en: 'Pork Tenderloin', de: 'Schweinefilet' }, amount: '500g' },
        { name: { en: 'Potato Starch', de: 'Kartoffelstärke' }, amount: '1 cup' },
        { name: { en: 'Oil', de: 'Öl' }, amount: '1L' },
      ],
      broth: [
        { name: { en: 'Sugar', de: 'Zucker' }, amount: '1/2 cup' },
        { name: { en: 'Vinegar', de: 'Essig' }, amount: '1/3 cup' },
        { name: { en: 'Soy Sauce', de: 'Sojasauce' }, amount: '2 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Batter pork with wet starch.', de: 'Schweinefleisch mit nasser Stärke panieren.' }, timeMinutes: 10 },
      { description: { en: 'Deep fry twice for crispiness.', de: 'Zweimal frittieren für Knusprigkeit.' }, timeMinutes: 20 },
      { description: { en: 'Boil sauce ingredients until thick.', de: 'Saucenzutaten kochen bis dickflüssig.' }, timeMinutes: 10 },
    ],
  },
  // 13. Donkatsu (Medium) - Japanese-Korean
  {
    id: 'donkatsu',
    title: { ko: '돈까스', en: 'Pork Cutlet (Donkatsu)', de: 'Schnitzel (Donkatsu)' },
    description: {
      en: 'Korean-style breaded pork cutlet. Similar to Schnitzel but with special sauce.',
      de: 'Paniertes Schweinekotelett nach koreanischer Art. Ähnlich wie Schnitzel, aber mit spezieller Sauce.',
    },
    image: 'https://images.unsplash.com/photo-1606509653303-12503254556f?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 5, time: 40, servings: 2 },
    nutrition: { calories: 700, protein: '30g', carbs: '50g', fat: '45g' },
    tags: ['Japanese-Korean', 'Kids Favorite'],
    ingredients: {
      main: [
        { name: { en: 'Pork Loin', de: 'Schweinerücken' }, amount: '2 slices' },
        { name: { en: 'Panko Breadcrumbs', de: 'Panko-Paniermehl' }, amount: '2 cups' },
        { name: { en: 'Flour & Egg', de: 'Mehl & Ei' }, amount: 'as needed' },
      ],
    },
    steps: [
      { description: { en: 'Pound pork thin.', de: 'Schweinefleisch dünn klopfen.' }, timeMinutes: 10 },
      { description: { en: 'Coat with flour, egg, panko.', de: 'Mit Mehl, Ei, Panko panieren.' }, timeMinutes: 5 },
      { description: { en: 'Fry until golden brown.', de: 'Goldbraun braten.' }, timeMinutes: 10 },
    ],
  },
  // 14. Kimchi Fried Rice (Easy) - <15min
  {
    id: 'kimchi-bokkeumbap',
    title: { ko: '김치볶음밥', en: 'Kimchi Fried Rice', de: 'Kimchi-Bratreis' },
    description: {
      en: 'Quick and spicy fried rice with kimchi. A comfort food classic.',
      de: 'Schneller und würziger Bratreis mit Kimchi. Ein Klassiker des Wohlfühlessens.',
    },
    image: 'https://images.unsplash.com/photo-1583224964978-2257b9607036?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 3, difficulty: 'Easy', kidRating: 3, time: 15, servings: 1 },
    nutrition: { calories: 500, protein: '15g', carbs: '80g', fat: '18g' },
    tags: ['Quick < 15m', 'Solo Meal'],
    ingredients: {
      main: [
        { name: { en: 'Kimchi', de: 'Kimchi' }, amount: '1 cup' },
        { name: { en: 'Rice', de: 'Reis' }, amount: '1 bowl' },
        { name: { en: 'Fried Egg', de: 'Spiegelei' }, amount: '1 ea' },
      ],
    },
    steps: [
      { description: { en: 'Stir fry chopped kimchi.', de: 'Gehacktes Kimchi anbraten.' }, timeMinutes: 5 },
      { description: { en: 'Add rice and mix well.', de: 'Reis hinzufügen und gut mischen.' }, timeMinutes: 5 },
      { description: { en: 'Top with fried egg.', de: 'Mit Spiegelei belegen.' }, timeMinutes: 3 },
    ],
  },
  // 15. Bossam (Medium) - Healthy
  {
    id: 'bossam',
    title: { ko: '보쌈', en: 'Boiled Pork Wraps', de: 'Gekochte Schweinefleisch-Wraps' },
    description: {
      en: 'Tender boiled pork belly served with crisp cabbage and radish salad.',
      de: 'Zarter gekochter Schweinebauch serviert mit knackigem Kohl und Rettichsalat.',
    },
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 3, time: 60, servings: 4 },
    nutrition: { calories: 600, protein: '45g', carbs: '10g', fat: '45g' },
    tags: ['Healthy', 'Party Food'],
    ingredients: {
      main: [
        { name: { en: 'Pork Belly block', de: 'Schweinebauch am Stück' }, amount: '1kg' },
        { name: { en: 'Onion, Garlic, Ginger', de: 'Zwiebel, Knoblauch, Ingwer' }, amount: 'for boiling' },
        { name: { en: 'Doenjang', de: 'Doenjang' }, amount: '2 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Boil water with spices.', de: 'Wasser mit Gewürzen kochen.' }, timeMinutes: 10 },
      { description: { en: 'Add meat and simmer for 50 mins.', de: 'Fleisch hinzufügen und 50 Min köcheln.' }, timeMinutes: 50 },
      { description: { en: 'Slice thin and serve with veggies.', de: 'Dünn schneiden und mit Gemüse servieren.' }, timeMinutes: 10 },
    ],
  },
  // 16. Gamjatang (Hard)
  {
    id: 'gamjatang',
    title: { ko: '감자탕', en: 'Pork Bone Soup', de: 'Schweineknochensuppe' },
    description: {
      en: 'Rich, spicy soup made with pork neck bones and potatoes.',
      de: 'Reiche, würzige Suppe aus Schweinenackenknochen und Kartoffeln.',
    },
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 4, difficulty: 'Hard', kidRating: 2, time: 120, servings: 4 },
    nutrition: { calories: 500, protein: '35g', carbs: '20g', fat: '30g' },
    tags: ['Spicy', 'Hearty'],
    ingredients: {
      main: [
        { name: { en: 'Pork Neck Bones', de: 'Schweinenackenknochen' }, amount: '1.5kg' },
        { name: { en: 'Potatoes', de: 'Kartoffeln' }, amount: '4 ea' },
        { name: { en: 'Napa Cabbage', de: 'Chinakohl' }, amount: '1 head' },
      ],
    },
    steps: [
      { description: { en: 'Soak bones to remove blood.', de: 'Knochen einweichen, um Blut zu entfernen.' }, timeMinutes: 60 },
      { description: { en: 'Boil bones for 1.5 hours.', de: 'Knochen 1,5 Stunden kochen.' }, timeMinutes: 90 },
      { description: { en: 'Add paste, potatoes, veggies.', de: 'Paste, Kartoffeln, Gemüse hinzufügen.' }, timeMinutes: 20 },
    ],
  },
  // 17. Sigumchi Namul (Easy) - <15min, Diet
  {
    id: 'sigumchi',
    title: { ko: '시금치나물', en: 'Spinach Side Dish', de: 'Spinat-Beilage' },
    description: {
      en: 'Blanched spinach seasoned with sesame oil and garlic. Classic banchan.',
      de: 'Blanchierter Spinat gewürzt mit Sesamöl und Knoblauch. Klassisches Banchan.',
    },
    image: 'https://images.unsplash.com/photo-1628717341663-0007b0ee2597?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Easy', kidRating: 4, time: 10, servings: 4 },
    nutrition: { calories: 40, protein: '3g', carbs: '2g', fat: '3g' },
    tags: ['Quick < 15m', 'Diet', 'Side Dish'],
    ingredients: {
      main: [
        { name: { en: 'Spinach', de: 'Spinat' }, amount: '1 bunch' },
        { name: { en: 'Sesame Oil', de: 'Sesamöl' }, amount: '1 Tbsp' },
        { name: { en: 'Garlic', de: 'Knoblauch' }, amount: '1 tsp' },
      ],
    },
    steps: [
      { description: { en: 'Blanch spinach in boiling water (30s).', de: 'Spinat in kochendem Wasser blanchieren (30s).' }, timeMinutes: 2 },
      { description: { en: 'Rinse in cold water and squeeze.', de: 'In kaltem Wasser abspülen und ausdrücken.' }, timeMinutes: 2 },
      { description: { en: 'Mix with seasonings.', de: 'Mit Gewürzen vermischen.' }, timeMinutes: 2 },
    ],
  },
  // 18. Bulgogi Burger (Medium) - Western Fusion
  {
    id: 'bulgogi-burger',
    title: { ko: '불고기 버거', en: 'Bulgogi Burger', de: 'Bulgogi-Burger' },
    description: {
      en: 'Fusion burger with marinated beef patty and sweet soy sauce.',
      de: 'Fusion-Burger mit mariniertem Rindfleisch-Patty und süßer Sojasauce.',
    },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 1, difficulty: 'Medium', kidRating: 5, time: 30, servings: 2 },
    nutrition: { calories: 600, protein: '30g', carbs: '50g', fat: '30g' },
    tags: ['Western Fusion', 'Kids Favorite'],
    ingredients: {
      main: [
        { name: { en: 'Ground Beef', de: 'Rinderhackfleisch' }, amount: '300g' },
        { name: { en: 'Burger Buns', de: 'Burgerbrötchen' }, amount: '2 ea' },
        { name: { en: 'Lettuce/Tomato', de: 'Salat/Tomate' }, amount: 'as needed' },
      ],
      broth: [
        { name: { en: 'Bulgogi Marinade', de: 'Bulgogi-Marinade' }, amount: '3 Tbsp' },
        { name: { en: 'Mayonnaise', de: 'Mayonnaise' }, amount: '1 Tbsp' },
      ],
    },
    steps: [
      { description: { en: 'Mix beef with marinade.', de: 'Rindfleisch mit Marinade mischen.' }, timeMinutes: 5 },
      { description: { en: 'Shape patties and grill.', de: 'Patties formen und grillen.' }, timeMinutes: 10 },
      { description: { en: 'Assemble burger.', de: 'Burger zusammenbauen.' }, timeMinutes: 5 },
    ],
  },
  // 19. Mak-guksu (Medium) - Summer Special
  {
    id: 'makguksu',
    title: { ko: '막국수', en: 'Buckwheat Noodles', de: 'Buchweizennudeln' },
    description: {
      en: 'Refreshing cold buckwheat noodles with spicy sauce and vegetables.',
      de: 'Erfrischende kalte Buchweizennudeln mit scharfer Sauce und Gemüse.',
    },
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 3, difficulty: 'Medium', kidRating: 2, time: 20, servings: 2 },
    nutrition: { calories: 450, protein: '12g', carbs: '80g', fat: '10g' },
    tags: ['Summer', 'Diet'],
    ingredients: {
      main: [
        { name: { en: 'Buckwheat Noodles', de: 'Buchweizennudeln' }, amount: '2 servings' },
        { name: { en: 'Cucumber', de: 'Gurke' }, amount: '1/2 ea' },
        { name: { en: 'Boiled Egg', de: 'Gekochtes Ei' }, amount: '1 ea' },
      ],
    },
    steps: [
      { description: { en: 'Boil noodles and rinse cold.', de: 'Nudeln kochen und kalt abspülen.' }, timeMinutes: 10 },
      { description: { en: 'Mix sauce ingredients.', de: 'Saucenzutaten mischen.' }, timeMinutes: 5 },
      { description: { en: 'Serve noodles with sauce and garnish.', de: 'Nudeln mit Sauce und Garnitur servieren.' }, timeMinutes: 5 },
    ],
  },
  // 20. Baechu Kimchi (Hard) - Essential
  {
    id: 'kimchi',
    title: { ko: '배추김치', en: 'Napa Cabbage Kimchi', de: 'Chinakohl-Kimchi' },
    description: {
      en: 'Traditional fermented cabbage. The soul of Korean cuisine.',
      de: 'Traditioneller fermentierter Kohl. Die Seele der koreanischen Küche.',
    },
    image: 'https://images.unsplash.com/photo-1583225214464-9296bd0790fa?q=80&w=1200&auto=format&fit=crop', // Placeholder
    stats: { spiciness: 3, difficulty: 'Hard', kidRating: 2, time: 180, servings: 20 },
    nutrition: { calories: 30, protein: '2g', carbs: '5g', fat: '0g' },
    tags: ['Essential', 'Fermented'],
    ingredients: {
      main: [
        { name: { en: 'Napa Cabbage', de: 'Chinakohl' }, amount: '3 heads' },
        { name: { en: 'Radish', de: 'Rettich' }, amount: '1 ea' },
        { name: { en: 'Coarse Salt', de: 'Grobes Salz' }, amount: '2 cups' },
      ],
      broth: [
        { name: { en: 'Gochugaru', de: 'Chiliflocken' }, amount: '2 cups' },
        { name: { en: 'Fish Sauce', de: 'Fischsauce' }, amount: '1 cup' },
        { name: { en: 'Garlic/Ginger', de: 'Knoblauch/Ingwer' }, amount: 'plenty' },
      ],
    },
    steps: [
      { description: { en: 'Salt cabbage for 6 hours.', de: 'Kohl 6 Stunden salzen.' }, timeMinutes: 60 },
      { description: { en: 'Make paste with spices.', de: 'Paste mit Gewürzen herstellen.' }, timeMinutes: 30 },
      { description: { en: 'Rub paste onto cabbage leaves.', de: 'Paste auf Kohlblätter reiben.' }, timeMinutes: 60 },
    ],
  },
];
