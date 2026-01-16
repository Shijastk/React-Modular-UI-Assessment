import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Card } from './Card';

export const Profile = ({ user }) => {
    const { getStyle, theme } = useTheme();

    return (
        <section className="max-w-3xl mx-auto py-12">
            <Card padding="lg" shadow="md">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-black mb-2" style={{ color: theme.textPrimary }}>
                            {user.name}
                        </h2>
                        <p className="text-lg font-medium" style={{ color: getStyle('accent').backgroundColor }}>
                            {user.role}
                        </p>
                    </div>
                </div>

                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: theme.textSecondary }}>
                        About
                    </h3>
                    <p className="leading-relaxed text-lg" style={{ color: theme.textPrimary }}>
                        {user.bio}
                    </p>
                </div>

                <div
                    className="grid grid-cols-3 gap-8 py-8 border-t border-b"
                    style={{ borderColor: theme.border }}
                >
                    {user.stats.map((stat, i) => (
                        <div key={i} className="text-center md:text-left">
                            <div className="text-3xl font-black mb-1" style={{ color: theme.textPrimary }}>
                                {stat.value}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.textSecondary }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </section>
    );
};
