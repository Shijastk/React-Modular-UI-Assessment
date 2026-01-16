import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useTheme } from '../hooks/useTheme';

export const Layout = ({ children }) => {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: theme.backgroundColor }}>
            <Header />
            <main className="flex-grow w-full">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};
