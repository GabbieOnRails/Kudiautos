import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Wrench, 
  Disc, 
  MapPin, 
  CheckCircle, 
  Star, 
  ChevronRight,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

const PRIMARY_PHONE = "+1 (404) 484-5270";
const SECONDARY_PHONE = "+1 (404) 587-8595";
const TEL_LINK_PRIMARY = "tel:+14044845270";
const TEL_LINK_SECONDARY = "tel:+14045878595";

const TireServices = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialProofImages = [
    "https://i.ibb.co/23FqF8s1/Whats-App-Image-2026-04-21-at-3-06-49-PM.jpg",
    "https://i.ibb.co/ybwN7BB/Whats-App-Image-2026-04-21-at-3-06-47-PM-3.jpg",
    "https://i.ibb.co/S7wYb5Gk/Whats-App-Image-2026-04-21-at-3-06-47-PM-1.jpg",
    "https://i.ibb.co/218F17DY/Whats-App-Image-2026-04-21-at-3-06-47-PM.jpg",
    "https://i.ibb.co/JR9bt6cy/Whats-App-Image-2026-04-21-at-3-06-46-PM-1.jpg",
    "https://i.ibb.co/Pzt5nQWv/Whats-App-Image-2026-04-21-at-3-06-46-PM.jpg",
    "https://i.ibb.co/7xHw0vsQ/Whats-App-Image-2026-04-21-at-3-06-44-PM-2.jpg",
    "https://i.ibb.co/TMhGrgm1/Whats-App-Image-2026-04-21-at-3-06-44-PM-1.jpg",
    "https://i.ibb.co/wfbQyzc/Whats-App-Image-2026-04-21-at-3-06-44-PM.jpg",
    "https://i.ibb.co/DfbrhTS3/Whats-App-Image-2026-04-21-at-3-06-42-PM.jpg",
    "https://i.ibb.co/sJbG3xQ1/Whats-App-Image-2026-04-21-at-2-59-13-PM.jpg",
    "https://i.ibb.co/VpvDymYd/Whats-App-Image-2026-04-21-at-2-59-12-PM.jpg"
  ];

  return (
    <div className="antialiased selection:bg-brand-yellow selection:text-brand-navy bg-white">
      {/* Dynamic Mobile Call Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-navy p-3 flex gap-2">
        <a href={TEL_LINK_PRIMARY} className="flex-1 bg-brand-yellow text-brand-navy py-4 rounded-xl flex items-center justify-center gap-2 font-black text-sm uppercase shadow-2xl">
          <Phone className="w-5 h-5 fill-current" />
          Call Primary
        </a>
        <a href={TEL_LINK_SECONDARY} className="flex-1 bg-white/10 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-black text-sm uppercase border border-white/10">
          Secondary
        </a>
      </div>

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-yellow w-10 h-10 rounded-lg flex items-center justify-center">
              <Disc className="w-6 h-6 text-brand-navy" strokeWidth={3} />
            </div>
            <span className="text-white font-display font-black text-xl tracking-tighter uppercase leading-none">
              Kudi <span className="text-brand-yellow">Tyres</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Emergency Dispatch</p>
              <p className="text-brand-yellow font-black text-lg tabular-nums leading-none">{PRIMARY_PHONE}</p>
            </div>
            <a href={TEL_LINK_PRIMARY} className="btn-primary !py-2.5 !px-6 !text-sm shadow-none">Request Help</a>
          </div>
        </div>
      </nav>

      {/* Hero Landing */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-30 animate-pulse-slow"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-3 mb-6">
                 <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow text-brand-navy font-black text-[10px] uppercase tracking-widest">
                  <Zap className="w-3 h-3 fill-current" />
                  Fastest in Marietta
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white font-bold text-[10px] uppercase tracking-widest border border-white/10">
                  <Clock className="w-3 h-3" />
                  Open Now 24/7
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl text-white font-black uppercase italic leading-[0.85] tracking-tighter mb-8 group">
                Mobile <span className="text-brand-yellow">Tire Repair</span> <br />
                At Your Door.
              </h1>
              <p className="text-xl text-white/70 font-medium leading-relaxed max-w-lg mb-12">
                Stuck with a flat? Don't tow it. We bring our fully-equipped mobile tire shop to your driveway, office, or roadside in <span className="text-white underline decoration-brand-yellow underline-offset-4">Marietta & Cobb County.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href={TEL_LINK_PRIMARY} className="btn-primary text-xl flex items-center justify-center gap-4 !py-6 !px-10 group relative overflow-hidden">
                  <Phone className="w-7 h-7 fill-current group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">Call Primary Now</span>
                </a>
                <a href={TEL_LINK_SECONDARY} className="btn-secondary !text-white border-white/20 !bg-white/5 backdrop-blur-md text-lg flex items-center justify-center px-10 py-6 hover:bg-white/10 transition-colors">
                  Secondary Line
                </a>
              </div>

              <div className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-brand-yellow font-black text-3xl leading-none mb-1">15-30m</span>
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Avg Arrival</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-brand-yellow font-black text-3xl leading-none mb-1">ASE</span>
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Certified Pros</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex flex-col">
                   <div className="flex text-brand-yellow mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-white/40 text-[10px] font-black uppercase tracking-widest italic">500+ Local Reviews</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-white/5 shadow-2xl skew-y-1">
                <img 
                  src={socialProofImages[0]} 
                  alt="Recent Tire Repair Service Marietta" 
                  className="w-full h-auto object-cover grayscale-0 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-brand-navy/90 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Recently Serviced in Marietta</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Grid */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">Real Work. <br /> Real Proof.</h2>
            <div className="w-24 h-2 bg-brand-yellow mb-8"></div>
            <p className="text-gray-500 font-medium text-lg max-w-xl italic">
              See our latest mobile tire rescues across Cobb County. From flat repairs on luxury cars to emergency roadside assistance.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {socialProofImages.map((img, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Tire Service Social Proof ${i}`} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-brand-yellow p-4 rounded-full text-brand-navy transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Star className="w-8 h-8 fill-current" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <a href={TEL_LINK_PRIMARY} className="inline-flex items-center gap-6 group">
                <div className="w-20 h-20 rounded-3xl bg-brand-navy flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-navy transition-all shadow-xl group-hover:scale-110">
                  <Phone className="w-10 h-10 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Need a rescue?</p>
                  <p className="text-4xl font-black tabular-nums tracking-tighter text-brand-navy group-hover:text-brand-yellow transition-colors">{PRIMARY_PHONE}</p>
                </div>
             </a>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none">Full Mobile <br /> Tire Shop.</h2>
              <p className="text-gray-500 font-semibold text-lg mb-12 max-w-md italic">
                We carry state-of-the-art tire changers and balancers in our vans. Professional service without the towing fee.
              </p>
              
              <div className="space-y-6">
                {[
                  "Mobile Tire Mounting & Balancing",
                  "Flat Repair & Patching",
                  "New Tire Sales & Installation",
                  "Tire Rotation & Pressure Checks",
                  "Roadside Flat Assistance",
                  "Wheel Balancing at Your Doorstep"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-brand-yellow/30 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-xs text-brand-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-[100px] group-hover:bg-brand-yellow/20 transition-colors animate-pulse-slow"></div>
              
              <ShieldCheck className="w-24 h-24 text-brand-yellow mb-10" />
              <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-8 leading-tight">Emergency? <br /> No Problem.</h3>
              <p className="text-white/60 font-medium text-lg leading-relaxed mb-12 italic">
                We prioritize roadside emergencies. If you're stuck on the highway or in a parking lot, call our primary dispatch directly.
              </p>
              
              <div className="space-y-8">
                <a href={TEL_LINK_PRIMARY} className="block group/link">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-yellow mb-2">Primary Emergency Line</p>
                  <div className="flex items-center justify-between border-b-2 border-white/10 pb-4 group-hover/link:border-brand-yellow transition-colors">
                    <span className="text-4xl font-black tabular-nums tracking-tighter">{PRIMARY_PHONE}</span>
                    <ArrowRight className="w-8 h-8 text-white/20 group-hover/link:text-brand-yellow transform translate-x-0 group-hover/link:translate-x-2 transition-all" />
                  </div>
                </a>
                <a href={TEL_LINK_SECONDARY} className="block group/link">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Secondary Service Line</p>
                   <div className="flex items-center justify-between border-b-2 border-white/10 pb-4 group-hover/link:border-white/30 transition-colors">
                    <span className="text-3xl font-black tabular-nums tracking-tighter text-white/60">{SECONDARY_PHONE}</span>
                    <ArrowRight className="w-6 h-6 text-white/10 transform translate-x-0 group-hover/link:translate-x-2 transition-all" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Location */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-brand-yellow rounded-[4rem] px-8 py-20 md:p-24 flex flex-col md:flex-row items-center gap-16 shadow-2xl relative overflow-hidden">
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-[100px]"></div>
            
            <div className="md:w-1/2 relative z-10 text-center md:text-left">
              <div className="bg-brand-navy text-white inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest mb-8">
                <MapPin className="w-4 h-4" />
                Marietta Area Service
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.85] text-brand-navy mb-8">Serving All <br /> Of Cobb County.</h2>
              <p className="text-brand-navy/60 font-semibold text-lg italic max-w-md">
                We're always on the move. From East Marietta to West Smyrna, our vans are ready to roll.
              </p>
            </div>

            <div className="md:w-1/2 grid grid-cols-2 gap-4 relative z-10">
              {['Marietta', 'Smyrna', 'Kennesaw', 'Acworth', 'Austell', 'Powder Springs'].map(city => (
                <div key={city} className="bg-brand-navy p-6 rounded-3xl text-white font-black uppercase tracking-widest text-[10px] flex items-center gap-3 border border-white/5 shadow-xl">
                  <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                  {city}, GA
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer focused on conversion */}
      <footer className="bg-brand-dark text-white py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="bg-brand-yellow p-2 rounded-xl">
              <Disc className="w-8 h-8 text-brand-navy" strokeWidth={3} />
            </div>
            <span className="font-display font-black text-4xl tracking-tighter uppercase">Kudi <span className="text-brand-yellow">Tyres</span></span>
          </div>
          <h4 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16">READY TO ROLL AGAIN?</h4>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
            <a href={TEL_LINK_PRIMARY} className="text-brand-yellow font-black text-5xl md:text-7xl tabular-nums tracking-tighter hover:scale-105 transition-transform block">
              {PRIMARY_PHONE}
            </a>
            <div className="w-4 h-4 bg-white/10 rounded-full hidden md:block"></div>
            <a href={TEL_LINK_SECONDARY} className="text-white/40 font-black text-3xl md:text-4xl tabular-nums tracking-tighter hover:text-white transition-colors block">
              {SECONDARY_PHONE}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
             <span>© 2025 Kudi Autos & Mobile Tyres</span>
             <span className="hidden md:inline">·</span>
             <span>Marietta, GA</span>
             <span className="hidden md:inline">·</span>
             <span>24/7 Dispatch</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TireServices;
