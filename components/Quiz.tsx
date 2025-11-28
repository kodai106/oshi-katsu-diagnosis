import React, { useState } from 'react';
import { questions } from '@/lib/diagnosis-data';

type Props = {
    onFinish: (score: number) => void;
};

export default function Quiz({ onFinish }: Props) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleOptionClick = (score: number) => {
        const newScore = totalScore + score;
        if (currentQuestionIndex < questions.length - 1) {
            setTotalScore(newScore);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onFinish(newScore);
        }
    };

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
                {currentQuestion.text}
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
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
}
