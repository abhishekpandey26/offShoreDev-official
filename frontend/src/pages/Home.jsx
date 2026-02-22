import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Offshore Dev Labs | OffshoreDev - Expert Web & Mobile App Development Agency</title>
                <meta name="description" content="Offshore Dev Labs (OffshoreDevLabs) is a leading software and app development agency. Expert web development, Android apps, React Native, UI/UX design & custom software solutions. 500+ projects delivered." />
                <meta name="keywords" content="offshoredev, offshoredevlabs, offshore dev labs, offshoredevco, offshore dev, web development agency, mobile app development, android development, react native development, UI/UX design, custom software, software agency India" />
                <link rel="canonical" href="https://offshoredevco.in/" />
                <meta property="og:title" content="Offshore Dev Labs | OffshoreDev - Expert Web & Mobile App Development" />
                <meta property="og:description" content="Transform your ideas into digital reality with Offshore Dev Labs. 500+ projects delivered, 200+ happy clients." />
                <meta property="og:url" content="https://offshoredevco.in/" />
                <meta property="og:image" content="https://offshoredevco.in/og-image.svg" />
                <meta property="og:image:alt" content="Offshore Dev Labs - Expert Web & Mobile App Development" />
            </Helmet>
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
