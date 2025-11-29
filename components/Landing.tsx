import React, { useState } from 'react';

type Props = {
    onStart: (name: string, color: string) => void;
};

const COLORS = [
    { name: 'Red', value: '#ef4444' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Black', value: '#1e293b' },
    { name: 'White', value: '#f8fafc' },
];

export default function Landing({ onStart }: Props) {
    const [name, setName] = useState('');
    const [color, setColor] = useState(COLORS[4].value); // Default Purple

    return (
        <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
            <h1 className="title-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                推し活レベル診断
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                あなたの愛はどこまで深い？<br />
                5つの質問で、あなたの「推し活レベル」を判定します。
            </p>

            <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    推しの名前
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="例: 推しメン太郎"
                    style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(0,0,0,0.2)',
                        color: 'white',
                        fontSize: '1.1rem',
                        marginBottom: '1.5rem'
                    }}
                />

                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    推しのイメージカラー
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {COLORS.map((c) => (
                        <button
                            key={c.name}
                            onClick={() => setColor(c.value)}
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: c.value,
                                border: color === c.value ? '3px solid white' : '2px solid transparent',
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                transform: color === c.value ? 'scale(1.2)' : 'scale(1)',
                            }}
                            title={c.name}
                        />
                    ))}
                </div>
            </div>

            <button
                className="btn"
                onClick={() => onStart(name || '推し', color)}
                disabled={!name}
                style={{ opacity: name ? 1 : 0.5, cursor: name ? 'pointer' : 'not-allowed' }}
            >
                診断を始める
            </button>
        </div>
    );
}
