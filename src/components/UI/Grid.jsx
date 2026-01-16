import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Card } from './Card';

export const Grid = ({ items, title }) => {
    const { theme } = useTheme();

    return (
        <section className="py-12">
            {title && (
                <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: theme.textPrimary }}>
                    {title}
                </h2>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <Card key={item.id} hover accent padding="md">
                        <Card.Header>
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Header>

                        {item.description && (
                            <Card.Description className="mb-4">
                                {item.description}
                            </Card.Description>
                        )}

                        <Card.Footer className="flex items-center justify-between">
                            {item.price && (
                                <span className="text-lg font-bold" style={{ color: theme.textPrimary }}>
                                    {item.price}
                                </span>
                            )}
                            <button
                                className="px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
                                style={{ color: theme.primaryColor }}
                            >
                                Add to Cart &rarr;
                            </button>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </section>
    );
};
