import React from 'react';

type Props = {
    onStart: () => void;
};

export default function Landing({ onStart }: Props) {
    return (
        <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
            <h1 className="title-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                推し活レベル診断
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                あなたの愛はどこまで深い？<br />
                5つの質問で、あなたの「推し活レベル」を判定します。
            </p>
            <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '4rem' }}>💖</span>
            </div>
            <button className="btn" onClick={onStart}>
                診断を始める
            </button>
        </div>
    );
}
