import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';    

export const ThemeSwitcher = () => {
    const { toggleTheme, isDark, theme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all hover:scale-110"
            style={{
                backgroundColor: theme.hover,
                color: theme.textPrimary,
            }}
            aria-label="Toggle theme"
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? (
                <Sun />
            ) : (
                // Moon icon for dark mode
                <Moon />
            )}
        </button>
    );
};
