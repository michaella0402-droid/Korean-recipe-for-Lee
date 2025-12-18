'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function CookingTimer({ initialMinutes = 0 }: { initialMinutes?: number }) {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(initialMinutes * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (initialMinutes === 0) return null;

  return (
    <div className="inline-flex items-center gap-2 bg-gray-100 rounded-lg p-1 pr-3 no-print">
      <div className="font-mono text-sm font-bold bg-white px-2 py-1 rounded border border-gray-200 min-w-[3.5rem] text-center">
        {formatTime(timeLeft)}
      </div>
      <button
        onClick={toggleTimer}
        className="p-1 hover:bg-white rounded-full transition-colors text-primary"
        title={isActive ? t('Pause', 'Pause') : t('Start', 'Start')}
      >
        {isActive ? <Pause size={14} /> : <Play size={14} />}
      </button>
      <button
        onClick={resetTimer}
        className="p-1 hover:bg-white rounded-full transition-colors text-gray-500"
        title={t('Reset', 'Zurücksetzen')}
      >
        <RotateCcw size={14} />
      </button>
    </div>
  );
}
