import React from 'react';
import { Hero } from './UI/Hero';
import { Grid } from './UI/Grid';
import { Features } from './UI/Features';
import { Profile } from './UI/Profile';
import { ListView } from './UI/ListView';

const ComponentMap = {
    HERO: Hero,
    GRID: Grid,
    FEATURES: Features,
    PROFILE: Profile,
    LIST: ListView,
};

export const ComponentResolver = ({ section }) => {
    const Component = ComponentMap[section.type];

    if (!Component) {
        console.warn(`No component found for type: ${section.type}`);
        return <div className="p-4 bg-red-100 text-red-800">Error: Component type "{section.type}" not found.</div>;
    }

    return <Component {...section.props} />;
};
