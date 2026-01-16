import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider } from './context/ConfigContext';
import { Layout } from './components/Layout';
import { ComponentResolver } from './components/ComponentResolver';
import { usePageConfig } from './hooks/usePageConfig';

// A dynamic page component that renders sections based on the current route
const DynamicPage = () => {
    const location = useLocation();
    const pageConfig = usePageConfig(location.pathname);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    if (!pageConfig) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h1 className="text-6xl font-black text-gray-200 mb-4">404</h1>
                <p className="text-xl text-gray-500 mb-8">Page Not Found in Config</p>
                <a href="/" className="text-blue-500 font-bold hover:underline">Back to Home</a>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in duration-500">
            {pageConfig.sections.map((section) => (
                <ComponentResolver key={section.id} section={section} />
            ))}
        </div>
    );
};

const AppContent = () => {
    return (
        <Layout>
            <Routes>
                <Route path="*" element={<DynamicPage />} />
            </Routes>
        </Layout>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <ConfigProvider>
                <AppContent />
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;
