import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/#about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/#portfolio' },
    ];

    const services = [
        { name: 'Web Development', path: '/services#web' },
        { name: 'Android App Development', path: '/services#android' },
        { name: 'React Native Development', path: '/services#react-native' },
        { name: 'UI/UX Design', path: '/services#uiux' },
    ];

    const socialLinks = [
        { icon: FaFacebookF, url: 'https://facebook.com', label: 'Facebook' },
        { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
        { icon: FaLinkedinIn, url: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    ];

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                {/* <span className="text-white font-bold text-xl">OD</span> */}
                            <img src='/logo.png'/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold">Offshore Dev Labs</span>
                                <span className="text-xs text-gray-400">Private Limited</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Leading software and app development agency delivering innovative digital solutions worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-sm" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        to={service.path}
                                        className="text-gray-400 hover:text-primary transition-colors duration-300"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-400">
                                    123 Tech Park, Sector 5<br />
                                    Bangalore, Karnataka 560001<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-primary flex-shrink-0" />
                                <a
                                    href="mailto:info@offshoredevlabs.com"
                                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                                >
                                    info@offshoredevlabs.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <FaPhone className="text-primary flex-shrink-0" />
                                <a
                                    href="tel:+917905587609"
                                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                                >
                                    +91 79055 87609
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Offshore Dev Labs Private Limited. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
