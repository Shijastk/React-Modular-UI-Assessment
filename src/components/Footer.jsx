import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
    const { theme } = useTheme();

    const footerLinks = {
        product: [
            { label: 'Features', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Documentation', href: '#' },
            { label: 'Changelog', href: '#' },
        ],
        company: [
            { label: 'About Us', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Contact', href: '#' },
        ],
        resources: [
            { label: 'Community', href: '#' },
            { label: 'Tutorials', href: '#' },
            { label: 'Support', href: '#' },
            { label: 'API', href: '#' },
        ],
        legal: [
            { label: 'Privacy Policy', href: '#' },
            { label: 'Terms of Service', href: '#' },
            { label: 'Cookie Policy', href: '#' },
            { label: 'Licenses', href: '#' },
        ],
    };

    return (
        <footer className="text-gray-400 mt-20" style={{ backgroundColor: theme.secondaryColor }}>
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Bottom Section */}
                <div
                    className=" flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderColor: theme.border }}
                >
                    <p className="text-sm" style={{ color: theme.textSecondary }}>
                        © 2024 ModularUI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#" className="transition-colors hover:text-white" style={{ color: theme.textSecondary }}>Privacy</a>
                        <a href="#" className="transition-colors hover:text-white" style={{ color: theme.textSecondary }}>Terms</a>
                        <a href="#" className="transition-colors hover:text-white" style={{ color: theme.textSecondary }}>Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
