'use client';

import { Recipe } from '@/lib/recipes';
import { useLanguage } from '@/components/LanguageContext';
import SpicinessMeter from '@/components/SpicinessMeter';
import StarRating from '@/components/StarRating';
import CookingTimer from '@/components/CookingTimer';
import IngredientChecklist from '@/components/IngredientChecklist';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, ChevronLeft, Printer, ChefHat } from 'lucide-react';

export default function RecipeDetailClient({ recipe }: { recipe: Recipe }) {
  const { language, t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="max-w-4xl mx-auto bg-white min-h-screen md:my-12 md:rounded-3xl md:shadow-xl overflow-hidden border-gray-100 border">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[500px] w-full">
        <Image
          src={recipe.image}
          alt={recipe.title[language]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start">
          <Link 
            href="/"
            className="bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition-colors no-print"
          >
            <ChevronLeft className="text-secondary" />
          </Link>
          <button 
            onClick={handlePrint}
            className="bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white transition-colors no-print text-secondary"
            title={t('Print Recipe', 'Rezept drucken')}
          >
            <Printer size={24} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
          <div className="flex gap-2 mb-3">
             <span className="bg-primary px-3 py-1 rounded-full text-sm font-bold shadow-sm">
               {recipe.stats.difficulty}
             </span>
             <span className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-sm font-bold">
               {recipe.title.ko}
             </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 shadow-sm">
            {recipe.title[language]}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl line-clamp-2">
            {recipe.description[language]}
          </p>
        </div>
      </div>

      <div className="p-6 md:p-10 grid md:grid-cols-[1fr,1.5fr] gap-12">
        {/* Left Column: Stats & Ingredients */}
        <div>
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-10 p-6 bg-cream rounded-2xl">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-gray-500">{t('Time', 'Zeit')}</span>
              <div className="flex items-center gap-2 font-bold text-lg text-secondary">
                <Clock size={20} className="text-primary" />
                {recipe.stats.time}m
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-gray-500">{t('Serves', 'Portionen')}</span>
              <div className="flex items-center gap-2 font-bold text-lg text-secondary">
                <Users size={20} className="text-primary" />
                {recipe.stats.servings}
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-gray-500">{t('Spiciness', 'Schärfe')}</span>
              <SpicinessMeter level={recipe.stats.spiciness} />
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-gray-500">{t('Kids', 'Kinder')}</span>
              <StarRating level={recipe.stats.kidRating} />
            </div>
          </div>

          {/* Nutrition Info */}
          {recipe.nutrition && (
            <div className="mb-10 p-6 border border-gray-100 rounded-2xl">
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">{t('Nutrition (per serving)', 'Nährwerte (pro Portion)')}</h3>
              <div className="grid grid-cols-2 gap-y-3 text-sm">
                <div className="flex justify-between pr-4 border-r border-gray-100">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-bold">{recipe.nutrition.calories}</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-bold">{recipe.nutrition.protein}</span>
                </div>
                <div className="flex justify-between pr-4 border-r border-gray-100">
                  <span className="text-gray-600">Carbs</span>
                  <span className="font-bold">{recipe.nutrition.carbs}</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span className="text-gray-600">Fat</span>
                  <span className="font-bold">{recipe.nutrition.fat}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {recipe.tags && recipe.tags.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              {recipe.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Ingredients */}
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-primary">●</span> 
              {t('Ingredients', 'Zutaten')}
            </h2>
            
            <IngredientChecklist 
              title={t('Main Ingredients', 'Hauptzutaten')} 
              items={recipe.ingredients.main} 
            />
            
            {recipe.ingredients.broth && (
              <IngredientChecklist 
                title={t('Sauce / Broth', 'Sauce / Brühe')} 
                items={recipe.ingredients.broth} 
              />
            )}
            
            {recipe.ingredients.optional && (
              <IngredientChecklist 
                title={t('Optional', 'Optional')} 
                items={recipe.ingredients.optional} 
              />
            )}
          </div>
        </div>

        {/* Right Column: Instructions */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-8 flex items-center gap-2 border-b pb-4">
            <ChefHat className="text-primary" />
            {t('Instructions', 'Zubereitung')}
          </h2>

          <div className="space-y-10">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-gray-100 pb-2">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-secondary">
                    {t('Step', 'Schritt')} {idx + 1}
                  </h3>
                  <CookingTimer initialMinutes={step.timeMinutes} />
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-3">
                  {step.description[language]}
                </p>

                {step.tip && (
                  <div className="bg-yellow-50 text-yellow-800 p-4 rounded-xl text-sm italic">
                    <span className="font-bold not-italic mr-2">💡 Tip:</span>
                    {step.tip[language]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
