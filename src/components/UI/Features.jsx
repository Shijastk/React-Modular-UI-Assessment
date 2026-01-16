import React from 'react';
import { Card } from './Card';
import { useTheme } from '../../hooks/useTheme';

export const Features = ({ title, items }) => {
    const { theme } = useTheme();

    return (
        <section
            className="py-16 -mx-6 px-6"
            style={{ backgroundColor: theme.hover }}
        >
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.textPrimary }}>
                {title}
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, i) => (
                    <Card key={i} accent shadow="md" padding="lg" hover>
                        <Card.Title className="mb-4">{item.title}</Card.Title>
                        <Card.Description>{item.description}</Card.Description>
                    </Card>
                ))}
            </div>
        </section>
    );
};
