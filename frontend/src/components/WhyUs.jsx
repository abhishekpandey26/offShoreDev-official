import { FaClock, FaHeadset, FaRocket, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';

const WhyUs = () => {
    const reasons = [
        {
            icon: FaHeadset,
            title: '24/7 Support',
            description: 'Round-the-clock support to ensure your project runs smoothly at all times.',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: FaClock,
            title: 'On-Time Delivery',
            description: 'We respect deadlines and deliver projects on time, every time.',
            color: 'from-green-500 to-green-600',
        },
        {
            icon: FaRocket,
            title: 'Agile Approach',
            description: 'Flexible and iterative development process for faster time-to-market.',
            color: 'from-purple-500 to-purple-600',
        },
        {
            icon: FaShieldAlt,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security and reliability in every solution we build.',
            color: 'from-red-500 to-red-600',
        },
        {
            icon: FaUsers,
            title: 'Expert Team',
            description: 'Highly skilled developers with expertise in latest technologies.',
            color: 'from-orange-500 to-orange-600',
        },
        {
            icon: FaChartLine,
            title: 'Scalable Solutions',
            description: 'Build for growth with scalable architecture and best practices.',
            color: 'from-cyan-500 to-cyan-600',
        },
    ];

    return (
        <section id="why-us" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We combine technical expertise with business acumen to deliver exceptional results
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                                <reason.icon className="text-white text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <a href="#contact" className="bg-white text-primary hover:bg-gray-100 font-bold px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                        Let's Work Together
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
