import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import { useTheme } from '../hooks/useTheme';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export const Header = () => {
    const { navigation } = useConfig();
    const { getStyle, theme } = useTheme();
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header
            className="sticky top-0 z-50 backdrop-blur-md border-b shadow-sm"
            style={{
                backgroundColor: `${theme.cardBackground}f0`, // f0 = 94% opacity
                borderColor: theme.border,
            }}
        >
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo/Brand */}
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-lg"
                        style={{ backgroundColor: theme.primaryColor }}
                    >
                        M
                    </div>
                    <span className="text-xl font-black tracking-tight" style={{ color: theme.textPrimary }}>
                        MODULAR
                        <span style={{ color: theme.textSecondary }}>UI</span>
                    </span>
                </Link>

                {/* Desktop Navigation - hidden on mobile */}
                <ul className="hidden md:flex gap-1">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className="px-4 py-2 rounded-lg font-medium transition-all"
                                    style={isActive ? {
                                        color: theme.primaryColor,
                                        backgroundColor: `${theme.primaryColor}15` // 15 = ~8% opacity
                                    } : {
                                        color: theme.textSecondary,
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeSwitcher />
                </div>

                {/* Mobile Actions - only theme switcher + menu button */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeSwitcher />

                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-lg transition-all hover:bg-opacity-10"
                        style={{ color: theme.textPrimary }}
                        aria-label="Toggle mobile menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown - conditionally rendered */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden border-t"
                    style={{
                        backgroundColor: theme.cardBackground,
                        borderColor: theme.border,
                    }}
                >
                    <div className="px-6 py-4 space-y-2">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMobileMenu} // close menu on link click
                                    className="block px-4 py-3 rounded-lg font-medium transition-all"
                                    style={isActive ? {
                                        color: theme.primaryColor,
                                        backgroundColor: `${theme.primaryColor}15`
                                    } : {
                                        color: theme.textSecondary,
                                    }}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Mobile CTA button */}
                        <button
                            className="w-full px-6 py-3 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 shadow-sm mt-4"
                            style={getStyle('primary')}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};
