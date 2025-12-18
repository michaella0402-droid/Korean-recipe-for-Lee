'use client';

import { recipes } from '@/lib/recipes';
import RecipeCard from '@/components/RecipeCard';
import { useLanguage } from '@/components/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-16 space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-secondary">
          Lee Family Recipes
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {t(
            'A collection of our favorite Korean dishes, made simple for our German family.',
            'Eine Sammlung unserer koreanischen Lieblingsgerichte, einfach gemacht für unsere deutsche Familie.'
          )}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
