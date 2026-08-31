
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = ()=> {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-30">
      <div className="flex flex-col gap-3">
        {/* Phone */}
        <a
          href="tel:+"
          className="w-14 h-14 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:-translate-y-0.5"
          aria-label="Call us"
        >
          <Phone size={28} />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-green-600 transition-all hover:-translate-y-0.5"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
}

export default WhatsApp