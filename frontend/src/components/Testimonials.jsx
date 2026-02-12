import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Sarah Johnson',
            position: 'CEO, TechStart Inc.',
            image: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
            text: 'Offshore Dev Labs transformed our vision into reality. Their expertise in web development and dedication to our project was outstanding. The team delivered beyond our expectations!',
        },
        {
            name: 'Michael Chen',
            position: 'Founder, FitLife App',
            image: 'https://i.pravatar.cc/150?img=13',
            rating: 5,
            text: 'Working with Offshore Dev Labs was a game-changer for our mobile app. Their React Native expertise and agile approach helped us launch faster than anticipated. Highly recommended!',
        },
        {
            name: 'Emily Rodriguez',
            position: 'CTO, EduLearn Platform',
            image: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            text: 'The team at Offshore Dev Labs is incredibly professional and talented. They built our learning management system with precision and provided excellent support throughout the project.',
        },
        {
            name: 'David Kumar',
            position: 'Director, ShopEasy',
            image: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            text: 'Our e-commerce platform needed a complete overhaul, and Offshore Dev Labs delivered exceptionally. Their attention to detail and technical prowess is unmatched.',
        },
        {
            name: 'Lisa Anderson',
            position: 'VP Product, FinTech Solutions',
            image: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text: 'Security and reliability were our top priorities, and Offshore Dev Labs exceeded all expectations. Their banking app solution is robust, secure, and user-friendly.',
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </div>

                {/* Testimonial Slider */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 text-primary/20">
                            <FaQuoteLeft className="text-6xl" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative z-10">
                            {/* Rating */}
                            <div className="flex justify-center mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                                "{testimonials[currentIndex].text}"
                            </p>

                            {/* Author */}
                            <div className="flex flex-col items-center">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-20 h-20 rounded-full mb-4 border-4 border-primary"
                                />
                                <h4 className="text-xl font-bold text-gray-900">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-primary hover:bg-secondary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* All Testimonials Grid (Optional - shows all at once) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 text-sm" />
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
