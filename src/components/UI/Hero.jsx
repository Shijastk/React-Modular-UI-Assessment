import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Card } from './Card';

export const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
    const { getStyle, theme } = useTheme();

    return (
        <Card padding="lg" shadow="md" className="mb-12 text-center">
            <div className="max-w-4xl mx-auto py-8">
                <h1 className="text-4xl md:text-6xl font-black mb-6" style={{ color: theme.textPrimary }}>
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: theme.textSecondary }}>
                        {subtitle}
                    </p>
                )}
                {ctaText && ctaLink && (
                    <Link
                        to={ctaLink}
                        className="inline-block px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity shadow-md"
                        style={getStyle('accent')}
                    >
                        {ctaText}
                    </Link>
                )}
            </div>
        </Card>
    );
};
