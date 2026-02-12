import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A comprehensive online shopping platform with advanced features like real-time inventory, payment gateway integration, and personalized recommendations.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
        },
        {
            title: 'Fitness Tracking App',
            description: 'Mobile app for tracking workouts, nutrition, and health metrics with AI-powered personalized workout plans and progress analytics.',
            tech: ['React Native', 'Firebase', 'TensorFlow'],
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop',
        },
        {
            title: 'Real Estate Portal',
            description: 'Property listing and management platform with virtual tours, advanced search filters, and integrated CRM for agents.',
            tech: ['Next.js', 'PostgreSQL', 'AWS'],
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        },
        {
            title: 'Food Delivery App',
            description: 'On-demand food delivery application with real-time tracking, multiple payment options, and restaurant management dashboard.',
            tech: ['React Native', 'Node.js', 'Socket.io'],
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
        },
        {
            title: 'Learning Management System',
            description: 'Comprehensive LMS with video streaming, interactive quizzes, progress tracking, and certification management.',
            tech: ['React', 'Django', 'PostgreSQL'],
            category: 'Web Development',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
        },
        {
            title: 'Banking Mobile App',
            description: 'Secure mobile banking solution with biometric authentication, instant transfers, and comprehensive financial analytics.',
            tech: ['Flutter', 'Spring Boot', 'MySQL'],
            category: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
        },
    ];

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Our Portfolio</h2>
                    <p className="section-subtitle">
                        Showcasing our best work and successful projects delivered to clients worldwide
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card overflow-hidden group"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span>View Details</span>
                                        <FaExternalLinkAlt className="text-sm" />
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a href="#contact" className="btn-primary inline-block">
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
