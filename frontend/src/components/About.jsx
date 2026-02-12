import { FaCheckCircle, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            icon: FaCheckCircle,
            title: 'Quality First',
            description: 'We never compromise on quality and deliver excellence in every project.',
        },
        {
            icon: FaUsers,
            title: 'Client-Centric',
            description: 'Your success is our success. We work closely with you at every step.',
        },
        {
            icon: FaLightbulb,
            title: 'Innovation',
            description: 'We stay ahead with the latest technologies and innovative solutions.',
        },
        {
            icon: FaAward,
            title: 'Excellence',
            description: 'Award-winning team committed to delivering outstanding results.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="section-title text-left">About Offshore Dev Labs</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We are a leading software and app development agency with a passion for creating innovative digital solutions. With over 10 years of experience, we've helped businesses of all sizes transform their ideas into successful digital products.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our team of expert developers, designers, and strategists work together to deliver cutting-edge solutions that drive business growth and exceed expectations.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-xl">
                                <div className="text-4xl font-bold mb-2">10+</div>
                                <div className="text-blue-100">Years Experience</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl">
                                <div className="text-4xl font-bold mb-2">98%</div>
                                <div className="text-green-100">Client Satisfaction</div>
                            </div>
                        </div>

                        <a href="#contact" className="btn-primary inline-block">
                            Start Your Project
                        </a>
                    </div>

                    {/* Right Content - Values */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                                    <value.icon className="text-white text-xl" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
