
import React from 'react';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaYoutube, 
  FaLinkedinIn 
} from 'react-icons/fa6';

export default function SocialLinks() {
  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com', 
      icon: FaFacebookF, 
      color: 'text-[#1877F2]' 
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com', 
      icon: FaInstagram, 
      color: 'text-[#E4405F]' 
    },
    { 
      name: 'X', 
      href: 'https://x.com', 
      icon: FaXTwitter, 
      color: 'text-[#000000] dark:text-white' 
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com', 
      icon: FaYoutube, 
      color: 'text-[#FF0000]' 
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com', 
      icon: FaLinkedinIn, 
      color: 'text-[#0A66C2]' 
    },
  ];

  return (
    <div className="absolute left-6 top-1/2 -translate-y-1/2 z-0 flex flex-col items-center gap-6">
      {/* Vertical line above icons */}
      <div className="w-[1px] h-16 bg-white/60 drop-shadow ml-10 relative z-50" />

      {/* Social Icons Stack */}
      <div className="flex flex-col gap-5 ml-10">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className={`text-3xl transition-all duration-300 hover:scale-125 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] ${item.color}`}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      <div className="w-[1px] h-12 bg-white/60 drop-shadow ml-10" />
    </div>
  );
}