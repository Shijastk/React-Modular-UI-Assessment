

export const appConfig = {
    // Theme system - supports light and dark modes
    // All color values propagate through the entire app via Context
    themes: {
        light: {
            primaryColor: '#3b82f6',      
            secondaryColor: '#1e293b',    
            accentColor: '#f59e0b',       
            borderRadius: '0.75rem',      
            fontFamily: 'sans-serif',
            // Light mode specifics
            backgroundColor: '#f9fafb',   
            cardBackground: '#ffffff',    
            textPrimary: '#111827',       
            textSecondary: '#6b7280',     
            border: '#e5e7eb',
            hover: '#f3f4f6',
        },
        dark: {
            primaryColor: '#60a5fa',      
            secondaryColor: '#1e40af',
            accentColor: '#fbbf24',       
            borderRadius: '0.75rem',
            fontFamily: 'sans-serif',
            // Dark mode specifics
            backgroundColor: '#111827',   
            cardBackground: '#1f2937',    
            textPrimary: '#f9fafb',       
            textSecondary: '#9ca3af',     
            border: '#374151',
            hover: '#374151',
        },
    },

    // Top navigation links
    navigation: [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'Profile', path: '/profile' },
    ],

    // Page configurations
    // Each page is an array of sections that get resolved to components
    pages: {
        '/': {
            title: 'Welcome Home',
            path: '/',
            sections: [
                {
                    id: 'home-hero',
                    type: 'HERO',  // maps to Hero component via ComponentResolver
                    props: {
                        title: 'Modular Design',
                        subtitle: 'Everything you see on this page is rendered via a JSON configuration file.',
                        ctaText: 'View Products',
                        ctaLink: '/products',
                    },
                },
                {
                    id: 'home-features',
                    type: 'FEATURES',  // maps to Features component
                    props: {
                        title: 'Why Config-Driven?',
                        items: [
                            { title: 'Zero Code Bloat', description: 'Add new sections without touching JSX logic.' },
                            { title: 'Instant Theme Sync', description: 'Update branding across the entire app in one place.' },
                            { title: 'Type Safe', description: 'Fully integrated with TypeScript for developer confidence.' },
                        ],
                    },
                },
            ],
        },

        '/products': {
            title: 'Our Collection',
            path: '/products',
            sections: [
                {
                    id: 'product-grid',
                    type: 'GRID',
                    props: {
                        items: [
                            { id: 1, name: 'Minimalist Watch', price: '$120', description: 'Timeless design for modern wrists.' },
                            { id: 2, name: 'Leather Satchel', price: '$250', description: 'Handcrafted from premium cowhide.' },
                            { id: 3, name: 'Noise-Canceling Headphones', price: '$350', description: 'Immersive sound for focused work.' },
                            { id: 4, name: 'Smart Home Hub', price: '$180', description: 'One device to control them all.' },
                        ],
                    },
                },
            ],
        },

        '/profile': {
            title: 'User Profile',
            path: '/profile',
            sections: [
                {
                    id: 'user-profile-card',
                    type: 'PROFILE',
                    props: {
                        user: {
                            name: 'Alex Rivera',
                            role: 'Senior Product Designer',
                            bio: 'Passionate about modular architectures and scalable design systems.',
                            stats: [
                                { label: 'Projects', value: '42' },
                                { label: 'Followers', value: '12.5k' },
                                { label: 'Awards', value: '7' },
                            ],
                        },
                    },
                },
                {
                    id: 'profile-activity',
                    type: 'LIST',
                    props: {
                        title: 'Recent Activity',
                        items: [
                            { label: 'Updated Home Config', date: '2 hours ago' },
                            { label: 'Refactored Resolver Logic', date: '5 hours ago' },
                            { label: 'Added TypeScript Definitions', date: '1 day ago' },
                        ],
                    },
                },
            ],
        },
        
    },
};
