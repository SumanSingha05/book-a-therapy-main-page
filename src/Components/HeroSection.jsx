import { useState } from 'react';
import { MapPin, Check, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [location, setLocation] = useState('Toronto, ON');

  const handleChangeLocation = () => {
    const newLocation = prompt('Enter your city / province:', location);
    if (newLocation && newLocation.trim() !== '') {
      setLocation(newLocation.trim());
    }
  };

  return (
    <section 
      className="hero relative min-h-[90vh] flex flex-col items-center justify-center transition-colors duration-300 px-6 py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(rgba(10, 18, 36, 0.72), rgba(10, 18, 36, 0.88)), url("https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1600&auto=format&fit=crop") center/cover no-repeat',
        paddingTop: '160px'
      }}
    >
      {/* Decorative glows overlaying the photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#82b443] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Centered Content */}
      <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center text-center">
        {/* Centered Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/50 rounded-full px-5 py-2 mb-8 w-fit shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-green-300 text-xs md:text-sm font-semibold tracking-wide">Canada's Premier Massage Therapy Platform</span>
        </div>

        {/* Centered Headline */}
        <h1 
          className="font-bold text-white mb-6 leading-tight select-none"
          style={{ 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', 
            fontFamily: "'Fraunces', serif",
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
          }}
        >
          Professional Massage<br />
          <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent">
            Delivered Your Way
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-sm md:text-base text-gray-300 mb-10 max-w-2xl leading-relaxed select-none">
          Book verified massage therapists instantly. Choose <span className="text-green-300 font-semibold">home</span>, <span className="text-green-300 font-semibold">mobile</span>, or <span className="text-green-300 font-semibold">clinic</span>. Transparent pricing. Professional service. Complete wellness.
        </p>

        {/* Centered CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#portals" 
            className="bg-[#82b443] hover:bg-[#74a23b] text-white font-bold text-xs md:text-sm px-8 py-3 rounded-full transition-all shadow-md active:scale-95"
            style={{ borderRadius: '100px' }}
          >
            Book a Massage Now
          </a>
          <a 
            href="#about" 
            className="border border-white/30 hover:border-white text-white font-bold text-xs md:text-sm px-8 py-3 rounded-full transition-all backdrop-blur-sm shadow-sm"
            style={{ borderRadius: '100px' }}
          >
            Explore Services
          </a>
        </div>

        {/* Centered Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs md:text-sm text-gray-300 mb-14">
          <div className="flex items-center gap-2">
            <Check size={14} className="text-green-400" />
            <span>Verified Therapists</span>
          </div>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-green-400" />
            <span>Instant Booking</span>
          </div>
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <Check size={14} className="text-green-400" />
            <span>Transparent Pricing</span>
          </div>
        </div>
      </div>

      {/* Bottom Location Bar (Overlayed) */}
      <div 
        className="relative z-10 flex items-center justify-center gap-2 px-6 py-3.5 border transition-all duration-300 text-xs sm:text-sm select-none"
        style={{
          borderRadius: '100px',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          color: '#e2e8f0',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <MapPin size={15} className="text-green-400" />
        <span>Active Coverage:</span>
        <button className="font-bold text-white hover:text-green-300 transition-colors" onClick={handleChangeLocation}>{location}</button>
        <span className="opacity-40">•</span>
        <button className="font-bold text-green-300 hover:text-green-400 transition-colors" onClick={handleChangeLocation}>Change Location</button>
      </div>

      {/* Bounce scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce pointer-events-none opacity-40">
        <ChevronDown size={14} className="text-green-400" />
      </div>
    </section>
  );
}
