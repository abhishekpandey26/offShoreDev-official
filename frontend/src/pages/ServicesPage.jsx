import { useEffect } from 'react';
import { FaCode, FaMobileAlt, FaReact, FaPaintBrush, FaCogs, FaCheckCircle, FaRocket } from 'react-icons/fa';

const ServicesPage = () => {
    useEffect(() => {
        // Scroll to section if hash is present
        if (window.location.hash) {
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    const services = [
        {
            id: 'web',
            icon: FaCode,
            title: 'Web Development',
            description: 'Build powerful, scalable web applications with modern technologies',
            color: 'from-blue-500 to-blue-600',
            features: [
                'Custom Web Applications',
                'E-Commerce Solutions',
                'Content Management Systems',
                'Progressive Web Apps (PWA)',
                'API Development & Integration',
                'Database Design & Optimization',
            ],
            technologies: ['React', 'Next.js', 'Node.js', 'Django', 'Laravel', 'MongoDB', 'PostgreSQL'],
            benefits: [
                'Responsive and mobile-first design',
                'SEO optimized for better visibility',
                'Fast loading times and performance',
                'Secure and scalable architecture',
            ],
        },
        {
            id: 'android',
            icon: FaMobileAlt,
            title: 'Android App Development',
            description: 'Native Android applications with exceptional user experience',
            color: 'from-green-500 to-green-600',
            features: [
                'Native Android Development',
                'Material Design Implementation',
                'Google Play Store Deployment',
                'Push Notifications',
                'Offline Functionality',
                'Third-party API Integration',
            ],
            technologies: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'Room Database', 'Retrofit'],
            benefits: [
                'Native performance and smooth UI',
                'Access to all device features',
                'Optimized battery consumption',
                'Regular updates and maintenance',
            ],
        },
        {
            id: 'react-native',
            icon: FaReact,
            title: 'React Native App Development',
            description: 'Cross-platform mobile apps for iOS and Android with single codebase',
            color: 'from-cyan-500 to-cyan-600',
            features: [
                'Cross-Platform Development',
                'Code Reusability (iOS & Android)',
                'Hot Reload for Faster Development',
                'Native Module Integration',
                'App Store & Play Store Deployment',
                'Real-time Updates',
            ],
            technologies: ['React Native', 'Expo', 'Redux', 'TypeScript', 'Firebase', 'AsyncStorage'],
            benefits: [
                'Faster development and lower costs',
                'Consistent UI across platforms',
                'Easy maintenance and updates',
                'Large community and ecosystem',
            ],
        },
        {
            id: 'uiux',
            icon: FaPaintBrush,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive designs that users love',
            color: 'from-purple-500 to-purple-600',
            features: [
                'User Research & Analysis',
                'Wireframing & Prototyping',
                'Visual Design',
                'Interaction Design',
                'Usability Testing',
                'Design Systems',
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Zeplin'],
            benefits: [
                'Improved user satisfaction',
                'Higher conversion rates',
                'Reduced development costs',
                'Brand consistency',
            ],
        },
        {
            id: 'custom',
            icon: FaCogs,
            title: 'Custom Software Solutions',
            description: 'Tailored software solutions for your unique business needs',
            color: 'from-orange-500 to-orange-600',
            features: [
                'Enterprise Software Development',
                'CRM & ERP Solutions',
                'Business Process Automation',
                'Legacy System Modernization',
                'Cloud Migration',
                'DevOps & CI/CD',
            ],
            technologies: ['Microservices', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'Jenkins', 'Git'],
            benefits: [
                'Customized to your workflow',
                'Scalable and flexible',
                'Integration with existing systems',
                'Ongoing support and updates',
            ],
        },
    ];

    return (
        <div className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary via-blue-600 to-secondary text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                            Comprehensive digital solutions to transform your business and drive growth
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Detail Sections */}
            {services.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="container mx-auto px-4">
                        <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Content */}
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                                    <service.icon className="text-white text-3xl" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h3>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start space-x-3">
                                                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <a href="#contact-section" className="btn-primary inline-block">
                                    Get Started
                                </a>
                            </div>

                            {/* Info Cards */}
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                {/* Technologies */}
                                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                        <FaRocket className="text-primary mr-3" />
                                        Technologies We Use
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {service.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className={`bg-gradient-to-br ${service.color} text-white rounded-2xl shadow-xl p-8`}>
                                    <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start space-x-3">
                                                <FaCheckCircle className="mt-1 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Contact CTA Section */}
            <section id="contact-section" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Let's discuss how we can help you achieve your business goals with our expert services
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/#contact" className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                            Contact Us Now
                        </a>
                        <a href="tel:+917905587609" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                            Call Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
