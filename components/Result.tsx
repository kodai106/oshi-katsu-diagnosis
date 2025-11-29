import React, { useEffect, useState } from 'react';
import { getResult, Dimension } from '@/lib/diagnosis-data';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

type Props = {
    score: number;
    dimensionScores: Record<Dimension, number>;
    oshiName: string;
    onRetry: () => void;
};

export default function Result({ score, dimensionScores, oshiName, onRetry }: Props) {
    const result = getResult(score, dimensionScores);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const shareText = `【${oshiName}】への愛の深さは…\n${result.level} ${result.title}（${result.type}）でした！\n\n${result.description}\n#推し活レベル診断`;
    const shareUrl = "https://oshi-katsu-diagnosis.vercel.app";

    const handleShare = (platform: 'twitter' | 'line') => {
        if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        } else {
            window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
        }
    };

    const chartData = [
        { subject: '時間', A: dimensionScores.time, fullMark: 100 },
        { subject: '財力', A: dimensionScores.money, fullMark: 150 },
        { subject: '行動', A: dimensionScores.action, fullMark: 200 },
        { subject: '布教', A: dimensionScores.evangelism, fullMark: 100 },
        { subject: 'メンタル', A: dimensionScores.mental, fullMark: 200 },
    ];

    return (
        <div className="glass-card fade-in" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <div style={{ marginBottom: '2rem' }}>
                <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                    {oshiName}への愛のカタチ
                </p>
                <h2 style={{ fontSize: '3rem', margin: 0, color: result.color, textShadow: `0 0 20px ${result.color}40` }}>
                    {result.level}
                </h2>
                <h3 className="title-gradient" style={{ fontSize: '2rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                    {result.title}
                </h3>
                <div style={{
                    display: 'inline-block',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    marginBottom: '1.5rem',
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                }}>
                    タイプ：{result.type}
                </div>

                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    {result.description}
                    <br />
                    <span style={{ fontSize: '0.9rem', color: '#cbd5e1', marginTop: '0.5rem', display: 'block' }}>
                        {result.typeDescription}
                    </span>
                </p>
            </div>

            <div style={{ width: '100%', height: '300px', marginBottom: '2rem' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                        <PolarGrid stroke="rgba(255,255,255,0.2)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: 'white', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={false} axisLine={false} />
                        <Radar
                            name="My Love"
                            dataKey="A"
                            stroke={result.color}
                            fill={result.color}
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
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
