/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Wrench, 
  Disc, 
  Battery, 
  Droplets, 
  Search, 
  Thermometer, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Star, 
  ChevronRight,
  Clock,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const PHONE_NUMBER = "+1 (404) 587-8596";
const TEL_LINK = "tel:+14045878596";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-brand-yellow w-10 h-10 rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-brand-navy" strokeWidth={3} />
          </div>
          <span className="text-white font-display font-black text-xl tracking-tighter uppercase leading-none">
            Kudi <span className="text-brand-yellow">Autos</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-white font-medium text-sm">
          <a href="#services" className="hover:text-brand-yellow transition-colors font-bold tracking-widest text-xs uppercase">SERVICES</a>
          <a href="#how-it-works" className="hover:text-brand-yellow transition-colors font-bold tracking-widest text-xs uppercase">HOW IT WORKS</a>
          <a href="#reviews" className="hover:text-brand-yellow transition-colors font-bold tracking-widest text-xs uppercase">REVIEWS</a>
          <div className="flex items-center gap-6 border-l border-white/10 pl-8 ml-4">
            <div className="text-right hidden lg:block">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Call or Text 24/7</p>
              <p className="text-brand-yellow font-black text-lg tabular-nums leading-none">{PHONE_NUMBER}</p>
            </div>
            <a href={TEL_LINK} className="btn-primary !py-2.5 !px-6 !text-sm shadow-none">Call Now</a>
          </div>
        </div>

        <a href={TEL_LINK} className="md:hidden flex items-center gap-2 bg-brand-yellow text-brand-navy px-4 py-2 rounded-md font-bold text-sm uppercase">
          <Phone className="w-4 h-4 fill-current" />
          <span>CALL NOW</span>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 z-[1] gradient-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-12 py-20 w-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5"
        >
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow font-bold text-[10px] uppercase tracking-widest">
              <MapPin className="w-3 h-3" />
              📍 Marietta & Cobb County
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-[10px] uppercase tracking-widest">
              <Star className="w-3 h-3 text-brand-yellow fill-current" />
              ⭐ 5.0 Google Rating
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] text-white mb-8 leading-[0.9] font-black uppercase italic tracking-tighter">
            Mobile Auto Repair <br /> & <span className="text-brand-yellow">Tyre Service.</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-10 max-w-lg leading-relaxed font-medium">
            Skip the shop. Our certified mechanics come to your home, office, or roadside. Same-day repairs in <span className="text-white font-bold italic underline decoration-brand-yellow underline-offset-8">Marietta</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a href={TEL_LINK} className="btn-primary text-lg !px-8 !py-5 flex items-center justify-center gap-3">
              Call for Emergency Service →
            </a>
            <a href="#book" className="btn-secondary !text-white border-white/20 !bg-white/5 backdrop-blur-sm text-lg flex items-center justify-center px-8 py-5">
              Book Online
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg opacity-90">
            <div className="border-l-2 border-brand-yellow pl-5">
              <p className="text-brand-yellow font-black text-3xl leading-none mb-1 tabular-nums">20min</p>
              <p className="text-white/60 text-[10px] uppercase font-black tracking-widest">Avg Response</p>
            </div>
            <div className="border-l-2 border-brand-yellow pl-5">
              <p className="text-brand-yellow font-black text-3xl leading-none mb-1 tabular-nums">ASE</p>
              <p className="text-white/60 text-[10px] uppercase font-black tracking-widest">Certified Pros</p>
            </div>
            <div className="border-l-2 border-brand-yellow pl-5">
              <p className="text-brand-yellow font-black text-3xl leading-none mb-1 tabular-nums">200+</p>
              <p className="text-white/60 text-[10px] uppercase font-black tracking-widest">5-Star Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const items = [
    { icon: Wrench, label: "ASE-Certified Mechanic" },
    { icon: MapPin, label: "We Come to You" },
    { icon: Clock, label: "Same-Day Service" },
    { icon: CreditCard, label: "Upfront Pricing" },
  ];

  return (
    <section className="bg-brand-dark py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start text-center md:text-left">
              <item.icon className="w-8 h-8 text-brand-yellow" strokeWidth={2.5} />
              <span className="text-white font-black uppercase tracking-[0.15em] text-[10px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    { 
      icon: Search, 
      name: "Engine Diagnostic", 
      desc: "Full vehicle scan and check engine light troubleshooting." 
    },
    { 
      icon: Wrench, 
      name: "Tune-up", 
      desc: "Spark plugs, filters, and performance optimization for your engine." 
    },
    { 
      icon: Disc, 
      name: "Suspension Inspection & Repairs", 
      desc: "Struts, shocks, and steering components serviced on-site." 
    },
    { 
      icon: Wrench, 
      name: "Tyre Repair & Replacement", 
      desc: "Flat repairs and new tyre fitting with mobile balancing." 
    },
    { 
      icon: Disc, 
      name: "Tyre Rotation", 
      desc: "Extend tyre life with regular rotation services at your door." 
    },
    { 
      icon: Disc, 
      name: "Brake Repair & Replacement", 
      desc: "Premium pads, rotors and calipers replaced in your driveway." 
    },
    { 
      icon: Thermometer, 
      name: "Coolant Leak Repair", 
      desc: "Radiator fixes, hose replacements, and coolant leak repairs." 
    },
    { 
      icon: Droplets, 
      name: "Oil Change & Air Filter Replacement", 
      desc: "Full synthetic oil changes and air filter replacements." 
    },
    { 
      icon: ShieldCheck, 
      name: "General Repair & Maintenance", 
      desc: "Scheduled maintenance to keep your vehicle in peak condition." 
    },
    { 
      icon: Phone, 
      name: "Roadside Assistance", 
      desc: "Locked out or broke down? We'll get you moving again quickly." 
    },
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 px-4">
          <h2 className="text-5xl md:text-7xl mb-6 uppercase">What We Fix — Right at Your Door</h2>
          <div className="w-24 h-2 bg-brand-yellow mx-auto mb-8" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Professional auto repair without the towing fees or waiting rooms. We bring the workshop to you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="p-10 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-brand-yellow/30 transition-all shadow-sm flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-8 text-brand-yellow group-hover:scale-110 transition-transform shadow-lg">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl mb-4 uppercase">{service.name}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                {service.desc}
              </p>
              <a href="#book" className="text-brand-navy font-black flex items-center gap-2 group-hover:text-brand-yellow transition-colors underline-offset-4 hover:underline uppercase tracking-widest text-xs">
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Call or Book Online", desc: "Tell us your car issue & location via phone or our simple form." },
    { title: "We Drive to You", desc: "Mechanic arrives with full kit at your home, work, or roadside." },
    { title: "Problem Solved", desc: "Pay only when you're satisfied. Back on the road in no time." },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl mb-24 text-center uppercase">Fixed in 3 Easy Steps</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-20 right-20 h-px bg-white/10" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-brand-yellow rounded-full flex items-center justify-center text-brand-navy text-4xl font-black mb-10 border-[8px] border-brand-navy shadow-2xl">
                {index + 1}
              </div>
              <h3 className="text-2xl mb-6 text-brand-yellow uppercase tracking-tight">{step.title}</h3>
              <p className="text-white/50 leading-relaxed px-6 font-medium">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a href={TEL_LINK} className="btn-primary px-16 py-6 text-2xl flex flex-col md:inline-flex items-center gap-1 group">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 fill-current" />
              <span>Ready? Call {PHONE_NUMBER}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const VideoShowcase = () => {
  return (
    <section id="gallery" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl mb-20 text-center uppercase">Our Fully-Equipped Mobile Workshop</h2>
        
        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white">
          <iframe 
            src="https://player.vimeo.com/video/1185147220?autoplay=1&muted=1&loop=1&background=1" 
            className="absolute inset-0 w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Kudi Autos Workshop Video"
          />
        </div>
        
        <p className="text-center text-gray-400 font-black uppercase tracking-[0.2em] mt-12 flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-brand-navy">
          <ShieldCheck className="w-6 h-6" />
          Everything we need — brought straight to your driveway.
        </p>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Jessica T.", location: "Marietta", text: "Kudi Autos literally saved my morning. Had a flat in my driveway and they were here and done before my lunch break. Professional and fast!" },
    { name: "Marcus L.", location: "Smyrna", text: "Best mechanic experience I've had. He diagnosed my check engine light and fixed the sensor right at my office. No towing needed." },
    { name: "David K.", location: "Kennesaw", text: "Upfront pricing and exactly as quoted. Loved not having to sit in a greasy waiting room for 3 hours. Will use them for every oil change now." },
  ];

  return (
    <section id="reviews" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl mb-8 uppercase">What Marietta Drivers Are Saying</h2>
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="flex text-brand-yellow">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-10 h-10 fill-brand-yellow" />)}
            </div>
            <span className="text-4xl font-black tabular-nums">5.0</span>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">Based on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div key={i} className="p-12 rounded-2xl bg-gray-50 border border-gray-100 italic relative overflow-hidden group">
              <div className="absolute -top-10 -right-4 text-[12rem] text-brand-yellow/10 font-bold leading-none select-none">"</div>
              <div className="flex text-brand-yellow mb-6">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-brand-yellow" />)}
              </div>
              <p className="text-gray-700 mb-10 relative z-10 leading-relaxed font-semibold text-lg">
                "{r.text}"
              </p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-yellow font-black text-xl shadow-lg">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-black text-brand-navy uppercase tracking-tight text-lg">{r.name}</div>
                  <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none">{r.location}, GA</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#" className="inline-flex items-center gap-4 text-brand-navy font-black border-b-4 border-brand-yellow hover:pb-2 transition-all uppercase tracking-widest text-sm">
            Read All Reviews on Google
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-32 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[120px] -ml-48 -mb-48" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl mb-6 uppercase">Book Your Mobile Mechanic</h2>
          <p className="text-brand-yellow font-black uppercase tracking-[0.2em] italic text-sm">
            "We'll confirm your slot within 15 minutes"
          </p>
        </div>

        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl text-brand-navy">
          {!submitted ? (
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-brand-yellow p-12 text-brand-navy flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-8 leading-tight">Instant Quotes & Fast Booking</h3>
                  <ul className="space-y-6">
                    {[
                      "Fixed Pricing — No Hidden Fees",
                      "Certified Master Mechanics",
                      "Work Guarantee on All Parts",
                      "Same-Day Slots Available"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-bold text-sm uppercase tracking-wide">
                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-12 pt-12 border-t border-brand-navy/10 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mb-2">Primary Contact</p>
                    <p className="text-2xl font-black tabular-nums leading-none tracking-tight">{PHONE_NUMBER}</p>
                  </div>
                  <div className="text-brand-navy/20 font-black text-2xl font-display opacity-50">ASE CERTIFIED</div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="lg:col-span-3 p-12 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Full Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 transition-all outline-none font-bold text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Phone Number</label>
                  <input required type="tel" className="w-full px-6 py-4 rounded bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 transition-all outline-none font-bold text-sm" placeholder="(770) 555-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Location / Zip Code</label>
                  <input required type="text" className="w-full px-6 py-4 rounded bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 transition-all outline-none font-bold text-sm" placeholder="Marietta, 30060" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Vehicle Details</label>
                  <input required type="text" className="w-full px-6 py-4 rounded bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 transition-all outline-none font-bold text-sm" placeholder="2020 Toyota Camry" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Service Needed</label>
                  <select required className="w-full px-6 py-4 rounded bg-gray-50 border border-gray-200 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 transition-all outline-none appearance-none font-bold text-sm">
                    <option value="tyre">Tyre Change / Repair</option>
                    <option value="brakes">Brake Service</option>
                    <option value="oil">Oil Change</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="other">Other Repair</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">Preferred Time</label>
                  <input required type="datetime-local" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-brand-yellow focus:ring-8 focus:ring-brand-yellow/10 transition-all outline-none font-bold" />
                </div>
                
                <div className="md:col-span-2 mt-6">
                  <button type="submit" className="btn-primary w-full text-xl py-6 flex items-center justify-center gap-4 uppercase tracking-[0.1em] font-black">
                    <Wrench className="w-6 h-6" />
                    <span>Request Appointment</span>
                  </button>
                  <p className="text-center text-[10px] font-bold text-gray-400 mt-8 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Encrypted & Secure · No Spam
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24 px-12"
            >
              <div className="w-28 h-28 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-600/10">
                <CheckCircle className="w-14 h-14" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black mb-4 uppercase tracking-tight">Request Received!</h3>
              <p className="text-gray-500 mb-12 text-xl max-w-lg mx-auto font-medium">
                Our lead technician is reviewing your schedule. We'll call you at your provided number within 15 minutes to confirm details.
              </p>
              <button onClick={() => setSubmitted(false)} className="text-brand-navy font-black uppercase tracking-[0.3em] text-xs border-b-2 border-brand-yellow pb-1 hover:border-brand-navy transition-all">
                Send another request
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const ServiceAreaMap = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl mb-10 uppercase tracking-tighter">Serving All of Cobb County</h2>
            <p className="text-2xl text-gray-400 mb-12 leading-relaxed font-semibold">
              Your driveway is our garage. We bring professional equipment to any location within 50 miles of Marietta.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {['Marietta', 'Smyrna', 'Kennesaw', 'Acworth', 'Powder Springs', 'Mableton', 'Austell', 'Vinings'].map(city => (
                <div key={city} className="flex items-center gap-4 text-brand-navy font-black uppercase tracking-widest text-[10px]">
                  <div className="w-3 h-3 bg-brand-yellow rounded-sm rotate-45" />
                  {city}, GA
                </div>
              ))}
            </div>
            
            <div className="mt-16 p-10 bg-brand-navy text-white rounded-[2rem] relative overflow-hidden group">
              <MapPin className="absolute -right-4 -bottom-4 w-40 h-40 text-white/5 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-xl font-bold italic leading-relaxed relative z-10 text-brand-yellow">
                Not sure if we cover your area? Call us — we'll let you know instantly if we can make it.
              </p>
            </div>
          </div>
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-gray-100 aspect-square">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105943.95758062823!2d-84.6062776366539!3d33.95191068694086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5104ca7e30777%3A0x6739f4f469950d99!2sMarietta%2C%20GA!5e0!3m2!1sen!2sus!4v1713456789012!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-[1.1] brightness-[0.95]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-32 pb-48 md:pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-20 relative z-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-brand-yellow p-1.5 rounded-xl">
              <Wrench className="w-8 h-8 text-brand-navy" strokeWidth={3} />
            </div>
            <span className="font-display font-black text-3xl tracking-tight uppercase">
              Kudi <span className="text-brand-yellow">Autos</span>
            </span>
          </div>
          <p className="text-white/30 font-medium leading-loose text-lg mb-10 max-w-sm italic">
            "Your driveway is our garage." Professional mobile mechanics bringing factory-grade tools to your doorstep since 2020.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-navy transition-all text-white/20 hover:-translate-y-1">
              <Star className="w-6 h-6 fill-current" />
            </a>
            {/* Social handles would go here */}
          </div>
        </div>
        
        <div className="md:col-span-4">
          <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-brand-yellow mb-16 underline underline-offset-[16px] decoration-brand-yellow/20">Contact Expertise</h4>
          <div className="space-y-10">
            <a href={TEL_LINK} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-navy group-hover:scale-110 transition-all shadow-xl">
                <Phone className="w-7 h-7 fill-current" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Emergency Service</p>
                <span className="font-black text-3xl tabular-nums tracking-tighter group-hover:text-brand-yellow transition-colors">{PHONE_NUMBER}</span>
              </div>
            </a>
            <a href="mailto:hello@kudiautos.com" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-[1.25rem] bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-navy group-hover:scale-110 transition-all text-white/40 group-hover:text-brand-navy">
                <Droplets className="w-7 h-7" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-1">Email Enquiries</p>
                <span className="text-xl font-black uppercase tracking-tight group-hover:text-brand-yellow transition-colors">hello@kudiautos.com</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-black uppercase tracking-[0.4em] text-[10px] text-brand-yellow mb-16 underline underline-offset-[16px] decoration-brand-yellow/20">Fast Links</h4>
          <ul className="space-y-6">
            {['Services', 'How It Works', 'Reviews', 'Book Now'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-white/40 hover:text-brand-yellow transition-all font-black uppercase tracking-[0.25em] text-[10px] flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 bg-brand-yellow scale-0 group-hover:scale-100 transition-transform rounded-full" />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/10 relative z-10">
        <p>© 2025 Kudi Autos & Mobile Tyres · Marietta, GA</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Floating Sticky Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-8 left-4 right-4 z-[100]">
        <motion.a 
          whileTap={{ scale: 0.95 }}
          href={TEL_LINK} 
          className="btn-primary w-full py-6 text-xl flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(245,166,35,0.3)] backdrop-blur-md rounded-2xl border-2 border-white/20"
        >
          <Phone className="w-7 h-7 fill-current" />
          <span className="font-black uppercase tracking-tight">CALL NOW: {PHONE_NUMBER}</span>
        </motion.a>
      </div>
    </footer>
  );
};

const FinalTrustBar = () => {
  const services = ["Brakes & Rotors", "Tyre Swaps", "Battery Install", "Oil Changes"];
  return (
    <div className="bg-white py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-12">
          {services.map((s) => (
            <div key={s} className="flex items-center gap-3 text-brand-navy">
              <CheckCircle className="w-5 h-5 text-brand-yellow" strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-tighter">{s}</span>
            </div>
          ))}
        </div>
        <div className="text-brand-navy/20 font-black text-3xl font-display uppercase tracking-widest hidden lg:block">
          ASE CERTIFIED
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---

export default function App() {
  return (
    <div className="antialiased selection:bg-brand-yellow selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <HowItWorks />
        <VideoShowcase />
        <Reviews />
        <BookingForm />
        <ServiceAreaMap />
        <FinalTrustBar />
      </main>
      <Footer />
    </div>
  );
}
