import React from 'react';
import { Flame } from 'lucide-react';

export default function SpicinessMeter({ level }: { level: number }) {
  return (
    <div className="flex gap-1" title={`Spiciness: ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Flame
          key={i}
          size={16}
          className={`${
            i <= level ? 'fill-primary text-primary' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
