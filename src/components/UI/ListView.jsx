import React from 'react';
import { Card } from './Card';
import { useTheme } from '../../hooks/useTheme';

export const ListView = ({ title, items }) => {
    const { theme } = useTheme();

    return (
        <section className="py-12 max-w-4xl mx-auto">
            {title && (
                <h2 className="text-2xl font-bold mb-6" style={{ color: theme.textPrimary }}>
                    {title}
                </h2>
            )}
            <Card padding="none" shadow="md">
                <ul className="divide-y" style={{ borderColor: theme.border }}>
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className="p-5 transition-colors flex justify-between items-center"
                            style={{
                                ':hover': { backgroundColor: theme.hover }
                            }}
                        >
                            <span className="font-medium" style={{ color: theme.textPrimary }}>
                                {item.label}
                            </span>
                            {item.date && (
                                <span className="text-sm" style={{ color: theme.textSecondary }}>
                                    {item.date}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </Card>
        </section>
    );
};
