'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function IngredientChecklist({ 
  items, 
  title 
}: { 
  items: { name: { en: string; de: string }; amount: string; substitute?: string; isLactoseFreeSubstitute?: boolean }[], 
  title: string 
}) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const { language, t } = useLanguage();

  const toggleItem = (index: number) => {
    const next = new Set(checkedItems);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setCheckedItems(next);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => {
          const isChecked = checkedItems.has(idx);
          return (
            <li 
              key={idx} 
              className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer transition-all ${
                isChecked ? 'bg-gray-50 opacity-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => toggleItem(idx)}
            >
              <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                isChecked ? 'bg-primary border-primary' : 'border-gray-300 bg-white'
              }`}>
                {isChecked && <Check size={12} className="text-white" />}
              </div>
              <div className="flex-1 text-sm leading-relaxed">
                <span className={`font-medium ${isChecked ? 'line-through' : ''}`}>
                  {item.name[language]}
                </span>
                <span className="text-gray-500 mx-2">•</span>
                <span className="text-secondary font-semibold">{item.amount}</span>
                
                {(item.substitute || item.isLactoseFreeSubstitute) && (
                  <div className="text-xs text-accent mt-0.5 font-medium">
                    {item.isLactoseFreeSubstitute && (
                      <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded mr-2">
                        🥛 {t('Lactose Free Option', 'Laktosefrei')}
                      </span>
                    )}
                    {item.substitute && (
                      <span>💡 {t('Sub:', 'Ersatz:')} {item.substitute}</span>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
