import React, { useState } from 'react';
import { questions, Dimension } from '@/lib/diagnosis-data';

type Props = {
    onFinish: (score: number, dimensionScores: Record<Dimension, number>) => void;
    oshiName: string;
};

export default function Quiz({ onFinish, oshiName }: Props) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [dimensionScores, setDimensionScores] = useState<Record<Dimension, number>>({
        time: 0, money: 0, action: 0, evangelism: 0, mental: 0
    });

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleOptionClick = (score: number) => {
        const newTotalScore = totalScore + score;
        const newDimensionScores = { ...dimensionScores };
        newDimensionScores[currentQuestion.dimension] += score;

        if (currentQuestionIndex < questions.length - 1) {
            setTotalScore(newTotalScore);
            setDimensionScores(newDimensionScores);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onFinish(newTotalScore, newDimensionScores);
        }
    };

    // Replace placeholder with Oshi Name if applicable
    const questionText = currentQuestion.text.replace('推し', oshiName || '推し');

    return (
        <div className="glass-card fade-in">
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s ease' }} />
                </div>
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', minHeight: '3.6rem' }}>
                {questionText}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {currentQuestion.options.map((option, index) => (
                    <button
                        key={index}
                        className="btn"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            textAlign: 'left',
                            padding: '1.2rem',
                            fontSize: '1rem',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                        onClick={() => handleOptionClick(option.score)}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    >
                        {option.text.replace('推し', oshiName || '推し')}
                    </button>
                ))}
            </div>
        </div>
    );
}
