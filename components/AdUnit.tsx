import React, { useEffect } from 'react';

type AdUnitProps = {
    slot: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    responsive?: boolean;
};

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export default function AdUnit({ slot, format = 'auto', responsive = true }: AdUnitProps) {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense error:', err);
        }
    }, []);

    return (
        <div style={{ margin: '2rem 0', textAlign: 'center', overflow: 'hidden' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // REPLACE THIS WITH YOUR ID
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? "true" : "false"}
            />
            <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.5rem' }}>
                スポンサーリンク
            </p>
        </div>
    );
}
