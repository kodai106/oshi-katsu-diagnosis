import React, { useEffect, useState } from 'react';
import { getResult } from '@/lib/diagnosis-data';

type Props = {
    score: number;
    onRetry: () => void;
};

export default function Result({ score, onRetry }: Props) {
    const result = getResult(score);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const shareText = `私の推し活レベルは【${result.level} ${result.title}】でした！\n${result.description}\n#推し活レベル診断`;
    const shareUrl = "https://oshi-katsu-diagnosis.vercel.app"; // Placeholder URL

    const handleShare = (platform: 'twitter' | 'line') => {
        if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        } else {
            window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
        }
    };

    return (
        <div className="glass-card fade-in" style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>診断結果</p>
                <h2 style={{ fontSize: '3rem', margin: 0, color: result.color, textShadow: `0 0 20px ${result.color}40` }}>
                    {result.level}
                </h2>
                <h3 className="title-gradient" style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                    {result.title}
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    {result.description}
                </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
                <button
                    className="btn"
                    style={{ background: '#1DA1F2', width: 'auto', padding: '0.8rem 1.5rem' }}
                    onClick={() => handleShare('twitter')}
                >
                    Xでシェア
                </button>
                <button
                    className="btn"
                    style={{ background: '#06C755', width: 'auto', padding: '0.8rem 1.5rem' }}
                    onClick={() => handleShare('line')}
                >
                    LINEで送る
                </button>
            </div>

            <button
                className="btn"
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}
                onClick={onRetry}
            >
                もう一度診断する
            </button>
        </div>
    );
}
