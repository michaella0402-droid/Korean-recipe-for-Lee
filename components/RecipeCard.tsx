'use client';

import { useLanguage } from './LanguageContext';
import { Recipe } from '@/lib/recipes';
import Image from 'next/image';
import Link from 'next/link';
import SpicinessMeter from './SpicinessMeter';
import StarRating from './StarRating';
import { Clock, Users } from 'lucide-react';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { language } = useLanguage();

  return (
    <Link href={`/recipe/${recipe.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title[language]}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-secondary uppercase tracking-wider">
          {recipe.stats.difficulty}
        </div>
        {recipe.tags && recipe.tags.includes('Quick < 15m') && (
           <div className="absolute top-3 left-3 bg-green-100/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-green-700 uppercase tracking-wider">
             ⚡ 15m
           </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-serif text-xl font-bold mb-1 text-secondary group-hover:text-primary transition-colors">
          {recipe.title[language]}
        </h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
          {recipe.description[language]}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{recipe.stats.time}m</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{recipe.stats.servings}</span>
            </div>
          </div>
          
          <div className="flex gap-3">
             <SpicinessMeter level={recipe.stats.spiciness} />
          </div>
        </div>
      </div>
    </Link>
  );
}
