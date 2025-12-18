import { recipes } from '@/lib/recipes';
import { notFound } from 'next/navigation';
import RecipeDetailClient from '@/components/RecipeDetailClient';

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    return notFound();
  }

  return <RecipeDetailClient recipe={recipe} />;
}
