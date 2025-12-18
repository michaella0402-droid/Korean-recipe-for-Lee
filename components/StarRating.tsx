import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ level }: { level: number }) {
  return (
    <div className="flex gap-1" title={`Kids Rating: ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i <= level ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
