/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Sparkles, 
  CheckCircle2, 
  Instagram, 
  ChevronDown, 
  Menu, 
  X,
  Star,
  MessageCircle,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-separator" : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary">
            Blanc <span className="text-accent italic">I</span> Negre
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-text-polish hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+34938031206" 
            className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-black transition-all hover:-translate-y-0.5"
          >
            Pedir Cita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-separator p-8 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-primary"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/34938031206" 
              className="bg-primary text-white text-center py-4 rounded-2xl font-bold shadow-lg"
            >
              Cita por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, center = false }: { children: ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {subtitle && (
      <span className="text-accent font-bold tracking-widest text-xs uppercase mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
      {children}
    </h2>
  </div>
);

const serviceItems = [
  {
    title: "Corte de Autor",
    desc: "Personalizamos cada trazo según tus facciones y personalidad. Un estilo único para ti.",
    price: "Desde 25€"
  },
  {
    title: "Balayage & Color",
    desc: "Expertos en colorimetría. Degradados naturales y brillos vibrantes que respetan tu salud capilar.",
    price: "Desde 55€"
  },
  {
    title: "Tratamientos de Salud",
    desc: "Protocolos avanzados de hidratación, keratina y reconstrucción profunda del cabello.",
    price: "Desde 40€"
  },
  {
    title: "Styling & Eventos",
    desc: "Recogidos, ondas y peinados para ocasiones especiales que te harán brillar.",
    price: "Desde 30€"
  }
];

const benefits = [
  {
    icon: <Scissors className="w-10 h-10" />,
    title: "Técnica Vanguardista",
    desc: "Nos formamos constantemente en las últimas tendencias internacionales para traerte lo mejor a Igualada."
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Productos Premium",
    desc: "Trabajamos exclusivamente con marcas de alta gama que garantizan resultados espectaculares y cuidado real."
  },
  {
    icon: <CheckCircle2 className="w-10 h-10" />,
    title: "Asesoramiento Real",
    desc: "No solo cortamos. Analizamos tu estilo de vida y facciones para recomendarte lo que mejor te sienta."
  }
];

const testimonials = [
  {
    name: "Marta R.",
    text: "El mejor salón de Igualada sin duda. Llevaba tiempo buscando un peluquero que entendiera mi pelo rizado y aquí lo han clavado.",
    stars: 5,
    role: "Clienta habitual"
  },
  {
    name: "Jordi G.",
    text: "Trato profesional y detallista. El local tiene un estilo increíble y el corte de pelo es siempre perfecto.",
    stars: 5,
    role: "Cliente desde hace 2 años"
  },
  {
    name: "Laura S.",
    text: "Me hice un balayage y el resultado fue súper natural. Muy contenta con el trato y los consejos sobre el cuidado en casa.",
    stars: 4,
    role: "Clienta nueva"
  }
];

const faqs = [
  {
    q: "¿Es necesario pedir cita previa?",
    a: "Sí, trabajamos bajo cita previa para garantizar que cada cliente recibe el tiempo y la atención que merece sin esperas."
  },
  {
    q: "¿Qué marcas de productos utilizáis?",
    a: "Utilizamos marcas líderes de peluquería profesional que respetan el pH capilar y están libres de parabenos agresivos."
  },
  {
    q: "¿Hacéis servicios para novias a domicilio?",
    a: "Ofrecemos packs completos para novias en el salón y también estudios de movilidad para desplazamientos si se solicita con antelación."
  }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-polish text-text-polish selection:bg-accent/30">
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-2/3 h-full hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-bg-polish/80 to-bg-polish z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200" 
              alt="Peluquería sofisticada"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-[1px] bg-accent"></span>
                  <span className="text-accent font-bold uppercase tracking-widest text-xs font-sans">Peluquería en Igualada</span>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] tracking-tight mb-8">
                  Tu cabello, <br />
                  <span className="italic text-accent">nuestra pasión.</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-polish mb-10 leading-relaxed font-medium">
                  Ven a Blanc I Negre y descubre un espacio dedicado a resaltar tu belleza natural con las mejores técnicas y productos.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://wa.me/34938031206" 
                    className="bg-primary text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all inline-flex items-center gap-3"
                  >
                    <MessageCircle size={22} /> Pedir cita ahora
                  </a>
                  <a 
                    href="#servicios" 
                    className="bg-white text-primary px-10 py-5 rounded-2xl text-lg font-bold border border-separator shadow-sm hover:bg-separator transition-all"
                  >
                    Ver servicios
                  </a>
                </div>

                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-bg-polish overflow-hidden">
                        <img src={`https://picsum.photos/seed/hair${i}/100/100`} alt="Avatar" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold">
                    <span className="text-accent font-serif text-lg">+400</span> clientas felices este mes
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="servicios" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Lo que hacemos" center>Nuestras Especialidades</SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceItems.map((item, idx) => (
                <div 
                  key={item.title} 
                  className="reveal-on-scroll soft-card p-10 group hover:border-accent/40 transition-all"
                >
                  <div className="w-14 h-14 bg-bg-polish rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                    {idx === 0 && <Scissors size={28} />}
                    {idx === 1 && <Sparkles size={28} />}
                    {idx === 2 && <CheckCircle2 size={28} />}
                    {idx === 3 && <Clock size={28} />}
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-primary">{item.title}</h3>
                  <p className="text-muted-polish text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <p className="text-accent font-bold text-lg">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BENEFITS / PHILOSOPHY --- */}
        <section id="nosotros" className="py-24 md:py-32 bg-white rounded-[3rem] mx-4 md:mx-6 shadow-sm border border-separator/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <SectionHeading subtitle="Sobre nosotros" center>Mucho más que una peluquería</SectionHeading>
            <p className="text-xl text-muted-polish leading-relaxed mb-16 max-w-3xl mx-auto">
              En Blanc I Negre, creemos que tu cabello es tu mejor accesorio. Por eso, nos tomamos el tiempo necesario para escucharte y asesorarte.
            </p>
            
            <div className="grid md:grid-cols-3 gap-12">
              {benefits.map((b, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-bg-polish rounded-3xl flex items-center justify-center text-accent mb-8">
                    {b.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-4 uppercase tracking-tight">{b.title}</h4>
                  <p className="text-muted-polish leading-relaxed text-sm max-w-xs">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section id="testimonios" className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading subtitle="Lo que dicen de nosotros" center>Opiniones de Clientas</SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="soft-card p-10 flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-6 text-accent">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-primary leading-relaxed mb-8">"{t.text}"</p>
                  <div className="mt-auto">
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-xs text-accent font-bold uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contacto" className="py-24 md:py-32 bg-primary text-white rounded-[3rem] mx-4 md:mx-6 mb-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-accent font-bold uppercase tracking-widest text-sm mb-6 block">¿Hablamos?</span>
                <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Reserva tu cita hoy mismo.</h2>
                <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
                  Estamos en Igualada listos para darte el cambio que buscas. Llámanos o escríbenos por WhatsApp y te atenderemos encantados.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <p className="text-accent uppercase text-xs font-black tracking-widest">Llámanos</p>
                    <a href="tel:+34938031206" className="text-3xl font-serif hover:text-accent transition-colors block">938 03 12 06</a>
                  </div>
                  <div className="space-y-4">
                    <p className="text-accent uppercase text-xs font-black tracking-widest">WhatsApp</p>
                    <a href="https://wa.me/34938031206" className="text-3xl font-serif hover:text-accent transition-colors block">938 03 12 06</a>
                  </div>
                </div>

                <div className="mt-16 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg italic">Carrer de l'Aurora, 94, Igualada</p>
                    <p className="text-zinc-500 text-sm">Cerca del centro de la ciudad</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 md:p-14 text-primary shadow-2xl">
                <h3 className="text-3xl font-serif mb-8">Pide cita ahora</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-zinc-400 font-sans">Nombre</label>
                      <input type="text" className="w-full bg-bg-polish rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-zinc-400 font-sans">Teléfono</label>
                      <input type="tel" className="w-full bg-bg-polish rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent/20 transition-all font-sans" placeholder="Ej: 600 000 000" />
                    </div>
                  </div>
                  <button className="w-full bg-accent text-white py-5 rounded-2xl font-bold shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all font-sans">
                    SOLICITAR DISPONIBILIDAD
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <span className="font-serif text-3xl font-bold tracking-tight text-primary">
              Blanc <span className="text-accent italic">I</span> Negre
            </span>
            <p className="text-muted-polish text-sm mt-2">Peluquería de confianza en Igualada.</p>
          </div>
          
          <div className="flex gap-10">
            <a href="#" className="text-muted-polish hover:text-accent transition-colors"><Instagram size={24} /></a>
            <a href="https://wa.me/34938031206" className="text-muted-polish hover:text-accent transition-colors"><MessageCircle size={24} /></a>
            <a href="tel:+34938031206" className="text-muted-polish hover:text-accent transition-colors"><Phone size={24} /></a>
          </div>

          <p className="text-muted-polish text-xs font-bold uppercase tracking-widest font-sans">
            © 2024 Blanc I Negre • Hecho con mucho amor en Igualada
          </p>
        </div>
      </footer>

      {/* --- WHATSAPP FLOATING --- */}
      <a 
        href="https://wa.me/34938031206" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary px-6 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </div>
  );
}


