import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export const Card = ({
    children,
    className = '',
    hover = false,
    bordered = true,
    shadow = 'sm',
    padding = 'md',
    accent = false,
    onClick,
    ...props
}) => {
    const { getBorderRadius, theme } = useTheme();

    const paddingClasses = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };

    const shadowClasses = {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
    };

    const baseClasses = [
        shadowClasses[shadow],
        hover ? 'hover:shadow-md transition-all duration-300 cursor-pointer' : '',
        paddingClasses[padding],
        className,
    ].filter(Boolean).join(' ');

    const style = {
        ...getBorderRadius(),
        backgroundColor: theme.cardBackground,
        color: theme.textPrimary,
        borderColor: bordered ? theme.border : 'transparent',
        borderWidth: bordered ? '1px' : '0',
        borderStyle: 'solid',
        ...(accent ? { borderTop: `4px solid ${theme.primaryColor}` } : {}),
    };

    return (
        <div
            className={baseClasses}
            style={style}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

// Card Header Component
Card.Header = ({ children, className = '' }) => (
    <div className={`mb-4 ${className}`}>
        {children}
    </div>
);

// Card Title Component
Card.Title = ({ children, className = '' }) => {
    const { theme } = useTheme();
    return (
        <h3 className={`text-xl font-bold ${className}`} style={{ color: theme.textPrimary }}>
            {children}
        </h3>
    );
};

// Card Description Component
Card.Description = ({ children, className = '' }) => {
    const { theme } = useTheme();
    return (
        <p className={`leading-relaxed ${className}`} style={{ color: theme.textSecondary }}>
            {children}
        </p>
    );
};

// Card Footer Component
Card.Footer = ({ children, className = '' }) => {
    const { theme } = useTheme();
    return (
        <div className={`mt-6 pt-4 ${className}`} style={{ borderTop: `1px solid ${theme.border}` }}>
            {children}
        </div>
    );
};
