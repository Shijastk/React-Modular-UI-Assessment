import React, { createContext, useContext, useState, useEffect } from 'react';
import { appConfig } from '../config/appConfig';

const ConfigContext = createContext(undefined);

export const ConfigProvider = ({ children }) => {
    // Get initial theme from localStorage or default to 'light'
    const [currentTheme, setCurrentTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    // Save theme to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('theme', currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const theme = appConfig.themes[currentTheme];

    return (
        <ConfigContext.Provider value={{
            config: appConfig,
            theme,
            currentTheme,
            toggleTheme,
        }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within a ConfigProvider');
    }
    return context.config;
};

export const useThemeContext = () => {
    const context = useContext(ConfigContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ConfigProvider');
    }
    return {
        theme: context.theme,
        currentTheme: context.currentTheme,
        toggleTheme: context.toggleTheme,
    };
};
