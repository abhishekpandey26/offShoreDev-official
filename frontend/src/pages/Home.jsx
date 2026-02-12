import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <WhyUs />
            <Testimonials />
            <ContactForm />
        </div>
    );
};

export default Home;
