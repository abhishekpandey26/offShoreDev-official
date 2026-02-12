import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = '917905587609'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to discuss a project with Offshore Dev Labs.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-white text-3xl" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chat with us!
            </span>
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </a>
    );
};

export default WhatsAppButton;
