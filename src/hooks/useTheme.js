// Custom hook for managing theme state and styles
// Returns theme values + helper functions for styling
import { useThemeContext } from '../context/ConfigContext';

export const useTheme = () => {
    const { theme, currentTheme, toggleTheme } = useThemeContext();

    // Generate CSS custom properties for the theme
    // Could apply these to :root but keeping it simple for now
    const themeStyles = {
        '--primary-color': theme.primaryColor,
        '--secondary-color': theme.secondaryColor,
        '--accent-color': theme.accentColor,
        '--border-radius': theme.borderRadius,
        '--font-family': theme.fontFamily,
        '--bg-color': theme.backgroundColor,
        '--card-bg': theme.cardBackground,
        '--text-primary': theme.textPrimary,
        '--text-secondary': theme.textSecondary,
        '--border-color': theme.border,
    };

    // Helper to get common style combinations
    // Saves us from repeating backgroundColor + color everywhere
    const getStyle = (type) => {
        switch (type) {
            case 'primary':
                return { backgroundColor: theme.primaryColor, color: '#fff' };
            case 'secondary':
                return { backgroundColor: theme.secondaryColor, color: '#fff' };
            case 'accent':
                return { backgroundColor: theme.accentColor, color: '#fff' };
            case 'bg':
                return {
                    backgroundColor: theme.cardBackground,
                    borderRadius: theme.borderRadius,
                    color: theme.textPrimary,
                };
            default:
                return {};
        }
    };

    // Just returns border radius - used a lot so made it a helper
    const getBorderRadius = () => ({ borderRadius: theme.borderRadius });

    return {
        theme,
        themeStyles,
        getStyle,
        getBorderRadius,
        currentTheme,
        toggleTheme,
        isDark: currentTheme === 'dark', // convenience flag
    };
};
