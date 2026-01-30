import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AlertTriangle, Moon, Sun, Monitor, ShieldCheck, LogOut } from 'lucide-react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BioAuth from './pages/BioAuth';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { user, isBioVerified } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (!isBioVerified) {
        return <Navigate to="/authenticate" replace />;
    }

    return children;
};

// Navbar Component
const Navbar = ({ toggleTheme, theme }) => {
    const { user, logout } = useAuth();

    return (
        <nav style={{
            borderBottom: '1px solid hsl(var(--color-text-main) / 0.1)',
            padding: '1rem 0',
            marginBottom: '2rem'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <ShieldCheck color="hsl(var(--color-primary))" size={28} />
                    <span>Deepfake<span style={{ color: 'hsl(var(--color-primary))' }}>Hunter</span></span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button onClick={toggleTheme} className="btn-outline" style={{ padding: '0.5rem', border: 'none' }}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    {user && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{user.firstName}</span>
                            <button onClick={logout} className="btn-outline" style={{ padding: '0.5rem', fontSize: '0.8rem' }}>
                                <LogOut size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

// Main Layout
const Layout = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.body.className = newTheme === 'dark' ? '' : 'light-mode';
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <footer style={{ textAlign: 'center', padding: '2rem', opacity: 0.5, fontSize: '0.875rem' }}>
                &copy; 2024 AI Detector Pro. Secure & Private.
            </footer>
        </div>
    );
};

function App() {
    return (
        <AuthProvider>
            <Router basename="/https-github.com-deepfake-hunter">
                <Layout>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/authenticate" element={<BioAuth />} />
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

export default App;