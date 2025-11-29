'use client';

import { useState, useEffect } from 'react';
import Landing from '@/components/Landing';
import Quiz from '@/components/Quiz';
import Result from '@/components/Result';
import { Dimension } from '@/lib/diagnosis-data';

export default function Home() {
  const [phase, setPhase] = useState<'landing' | 'quiz' | 'result'>('landing');
  const [score, setScore] = useState(0);
  const [dimensionScores, setDimensionScores] = useState<Record<Dimension, number>>({
    time: 0, money: 0, action: 0, evangelism: 0, mental: 0
  });

  const [oshiName, setOshiName] = useState('');
  const [oshiColor, setOshiColor] = useState('');

  const startDiagnosis = (name: string, color: string) => {
    setOshiName(name);
    setOshiColor(color);
    setPhase('quiz');
    setScore(0);
    setDimensionScores({ time: 0, money: 0, action: 0, evangelism: 0, mental: 0 });
  };

  const finishQuiz = (finalScore: number, scores: Record<Dimension, number>) => {
    setScore(finalScore);
    setDimensionScores(scores);
    setPhase('result');
  };

  const retryDiagnosis = () => {
    setPhase('landing');
    setScore(0);
  };

  // Apply theme color
  useEffect(() => {
    if (oshiColor) {
      document.documentElement.style.setProperty('--primary', oshiColor);
      document.documentElement.style.setProperty('--primary-glow', `${oshiColor}80`);
    }
  }, [oshiColor]);

  return (
    <main className="container">
      {phase === 'landing' && <Landing onStart={startDiagnosis} />}
      {phase === 'quiz' && <Quiz onFinish={finishQuiz} oshiName={oshiName} />}
      {phase === 'result' && (
        <Result
          score={score}
          dimensionScores={dimensionScores}
          oshiName={oshiName}
          onRetry={retryDiagnosis}
        />
      )}
    </main>
  );
}
