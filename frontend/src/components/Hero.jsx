import { FaRocket, FaCode, FaMobile } from 'react-icons/fa';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-secondary pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white animate-slide-in-left">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span className="text-sm font-semibold">🚀 Your Trusted Development Partner</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Transform Your Ideas Into
                            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                                Digital Reality
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                            Experts in Web, Mobile and Cross-Platform Solutions. We build scalable, innovative applications that drive business growth.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button onClick={scrollToContact} className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                Get Started Now
                            </button>
                            <a href="#portfolio" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                                View Our Work
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">500+</div>
                                <div className="text-blue-200 text-sm">Projects Delivered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">200+</div>
                                <div className="text-blue-200 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">50+</div>
                                <div className="text-blue-200 text-sm">Team Members</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Floating Cards */}
                    <div className="relative hidden lg:block animate-slide-in-right">
                        <div className="relative w-full h-[600px]">
                            {/* Card 1 */}
                            <div className="absolute top-0 right-0 w-64 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl animate-float">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                                    <FaCode className="text-white text-xl" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Web Development</h3>
                                <p className="text-blue-100 text-sm">Modern, responsive websites built with cutting-edge technologies</p>
                            </div>

                            {/* Card 2 */}
                            <div className="absolute top-40 left-0 w-64 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                                    <FaMobile className="text-white text-xl" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Mobile Apps</h3>
                                <p className="text-blue-100 text-sm">Native and cross-platform mobile solutions for iOS & Android</p>
                            </div>

                            {/* Card 3 */}
                            <div className="absolute bottom-0 right-10 w-64 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                                    <FaRocket className="text-white text-xl" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">Custom Solutions</h3>
                                <p className="text-blue-100 text-sm">Tailored software solutions to meet your unique business needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
