import { useConfig } from '../context/ConfigContext';

export const usePageConfig = (path) => {
    const { pages } = useConfig();

    // Find matching page config or fallback to null if not found
    const config = pages[path] || null;

    return config;
};
