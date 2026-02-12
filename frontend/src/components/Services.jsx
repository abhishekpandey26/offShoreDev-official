import { FaCode, FaMobileAlt, FaReact, FaPaintBrush, FaCogs, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: FaCode,
            title: 'Web Development',
            description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance.',
            color: 'from-blue-500 to-blue-600',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
        },
        {
            icon: FaMobileAlt,
            title: 'Android App Development',
            description: 'Native Android applications with intuitive UI/UX, delivering seamless user experiences on all devices.',
            color: 'from-green-500 to-green-600',
            features: ['Native Performance', 'Material Design', 'Play Store Ready'],
        },
        {
            icon: FaReact,
            title: 'React Native Development',
            description: 'Cross-platform mobile apps that work flawlessly on both iOS and Android with a single codebase.',
            color: 'from-cyan-500 to-cyan-600',
            features: ['Cross-Platform', 'Code Reusability', 'Native Feel'],
        },
        {
            icon: FaPaintBrush,
            title: 'UI/UX Design',
            description: 'Beautiful, user-centric designs that enhance engagement and provide exceptional user experiences.',
            color: 'from-purple-500 to-purple-600',
            features: ['User Research', 'Prototyping', 'Design Systems'],
        },
        {
            icon: FaCogs,
            title: 'Custom Software Solutions',
            description: 'Tailored software solutions designed to solve your unique business challenges and drive growth.',
            color: 'from-orange-500 to-orange-600',
            features: ['Scalable Architecture', 'API Integration', 'Cloud Solutions'],
        },
        {
            icon: FaRocket,
            title: 'Digital Transformation',
            description: 'Complete digital transformation services to modernize your business and stay ahead of competition.',
            color: 'from-pink-500 to-pink-600',
            features: ['Strategy Planning', 'Process Automation', 'Tech Consulting'],
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive digital solutions tailored to your business needs
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card p-8 group"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                <service.icon className="text-white text-2xl" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                to="/services"
                                className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300 group"
                            >
                                Learn More
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Link to="/services" className="btn-primary inline-block">
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;
