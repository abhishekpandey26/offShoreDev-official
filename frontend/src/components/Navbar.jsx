import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/#portfolio' },
        { name: 'Why Us', path: '/#why-us' },
        { name: 'Testimonials', path: '/#testimonials' },
        { name: 'Contact', path: '/#contact' },
    ];

    const handleNavClick = (path) => {
        if (path.startsWith('/#')) {
            const element = document.getElementById(path.substring(2));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">OD</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900">Offshore Dev Labs</span>
                            <span className="text-xs text-gray-600">Private Limited</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => handleNavClick(link.path)}
                                className={`text-gray-700 hover:text-primary font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-primary' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919876543210"
                            className="btn-primary flex items-center space-x-2"
                        >
                            <FaPhone className="text-sm" />
                            <span>Contact Us</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-gray-900 text-2xl focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col p-6 space-y-6 mt-16">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => handleNavClick(link.path)}
                                className={`text-gray-700 hover:text-primary font-medium transition-colors duration-300 text-lg ${location.pathname === link.path ? 'text-primary' : ''
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+919876543210"
                            className="btn-primary flex items-center justify-center space-x-2"
                        >
                            <FaPhone className="text-sm" />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 -z-10"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
