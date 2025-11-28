'use client';

import { useState } from 'react';
import Landing from '@/components/Landing';
import Quiz from '@/components/Quiz';
import Result from '@/components/Result';

export default function Home() {
  const [phase, setPhase] = useState<'landing' | 'quiz' | 'result'>('landing');
  const [score, setScore] = useState(0);

  const startDiagnosis = () => {
    setPhase('quiz');
    setScore(0);
  };

  const finishQuiz = (finalScore: number) => {
    setScore(finalScore);
    setPhase('result');
  };

  const retryDiagnosis = () => {
    setPhase('landing');
    setScore(0);
  };

  return (
    <main className="container">
      {phase === 'landing' && <Landing onStart={startDiagnosis} />}
      {phase === 'quiz' && <Quiz onFinish={finishQuiz} />}
      {phase === 'result' && <Result score={score} onRetry={retryDiagnosis} />}
    </main>
  );
}
