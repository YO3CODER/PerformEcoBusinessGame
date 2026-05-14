"use client";

import React, { useState } from "react";

const services = [
  {
    title: "CONSEIL ÉCONOMIQUE & STRATÉGIQUE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["Études économiques", "Analyse de marché", "Stratégie de croissance", "Business plan"]
  },
  {
    title: "ANALYSE FINANCIÈRE & PERFORMANCE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1c-1.11 0-2.08-.407-2.67-1M12 8V7m0 9v1m0-1c1.11 0 2.08.407 2.67-1M12 16V17m0-1c-1.11 0-2.08.407-2.67 1M12 16V17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["Analyse financière", "Diagnostics de performance", "Prévisions & budgets", "Tableaux de bord"]
  },
  {
    title: "ACCOMPAGNEMENT DES ENTREPRISES",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["Création d'entreprise", "Accompagnement PME", "Restructuration", "Coaching & suivi"]
  },
  {
    title: "GESTION & OPTIMISATION DES RESSOURCES",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["Optimisation des coûts", "Gestion des ressources", "Organisation & processus", "Gestion des risques"]
  },
  {
    title: "AUDIT & CONTRÔLE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: ["Audit financier", "Audit organisationnel", "Contrôle interne", "Conformité réglementaire"]
  }
];

export default function VitrinePerformEco() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "2250102766142";
  const logoPath = "/logo.jpeg";

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 2rem;
          font-weight: 700;
          border-radius: 0.6rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .btn-primary { background: linear-gradient(135deg, #C9952A 0%, #F4C458 100%); color: #fff; }
        .btn-outline { background: transparent; border: 1px solid #C9952A; color: #C9952A; }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 280px;
          background: white;
          z-index: 100;
          transform: translateX(${isMobileMenuOpen ? "0" : "100%"});
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
          z-index: 90;
          opacity: ${isMobileMenuOpen ? "1" : "0"};
          pointer-events: ${isMobileMenuOpen ? "auto" : "none"};
          transition: opacity 0.3s ease;
        }
      `}</style>

      {/* --- OVERLAY & MOBILE MENU --- */}
      <div className="overlay" onClick={() => setMobileMenuOpen(false)}></div>
      <div className="mobile-menu p-8 flex flex-col gap-8">
        <button onClick={() => setMobileMenuOpen(false)} className="self-end text-slate-400">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        
        {/* Logo dans le menu mobile */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <img src={logoPath} alt="Perform'Eco Logo" className="w-24 h-auto object-contain" />
          <span className="text-sm font-bold uppercase tracking-tighter">Perform'<span className="text-[#C9952A]">Eco</span></span>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-bold border-t pt-8">
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C9952A]">Accueil</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C9952A]">Services</a>
          <button onClick={openWhatsApp} className="btn btn-primary w-full mt-4">RDV WhatsApp</button>
        </nav>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo intégré ici */}
            <img 
              src={logoPath} 
              alt="Perform'Eco Logo" 
              className="h-12 w-auto object-contain" 
            />
            <span className="hidden sm:inline-block text-xl font-extrabold text-slate-900 uppercase">Perform'<span className="text-[#C9952A]">Eco</span></span>
          </div>

          <div className="hidden md:flex gap-10 items-center text-sm font-bold uppercase tracking-widest">
            <a href="#accueil" className="hover:text-[#C9952A] transition-colors">Accueil</a>
            <a href="#services" className="hover:text-[#C9952A] transition-colors">Services</a>
            <button onClick={openWhatsApp} className="btn btn-primary text-xs px-6 py-3">Prendre RDV</button>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-slate-900">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2.5" strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-44 pb-20 px-6 min-h-[85vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold tracking-widest uppercase text-[#C9952A]">
              Cabinet de Conseil & Stratégie
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8 uppercase tracking-tighter">
              L'expertise au service <br /> de <span className="text-[#C9952A] italic">votre performance.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-md leading-relaxed">
              Des solutions économiques et financières sur mesure pour booster votre activité à Abidjan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={openWhatsApp} className="btn btn-primary px-10">Prendre Rendez-vous</button>
              <a href="#services" className="btn btn-outline px-10">Nos Domaines</a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
             <div className="relative p-4 glass-card rounded-[3rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  alt="Analyse Perform'Eco"
                  className="rounded-[2.5rem] w-full h-[500px] object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[#C9952A] text-xs font-bold tracking-[0.5em] uppercase mb-4">Domaines d'Intervention</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">Nos pôles de compétences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-[#C9952A] mb-8">
                  {s.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-6 uppercase leading-tight">{s.title}</h3>
                <ul className="space-y-4 mb-8">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9952A]"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={openWhatsApp} className="text-[#C9952A] text-[10px] font-bold uppercase tracking-widest border-b-2 border-[#C9952A] pb-1 hover:text-slate-900 hover:border-slate-900 transition-colors">
                  Demander un audit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <img src={logoPath} alt="Perform'Eco Logo" className="h-16 w-auto mx-auto md:mx-0 object-contain" />
            <p className="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
              Votre partenaire stratégique pour une performance financière et opérationnelle durable.
            </p>
          </div>
          
          <div className="text-sm space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-[#C9952A] mb-6">Contact direct</h4>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold">WhatsApp:</span> +225 01 02 76 61 42
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold">Contact:</span> +225 07 08 50 33 76
            </p>
            <p className="text-slate-500 uppercase tracking-widest text-[10px] mt-4">Abidjan, Côte d'Ivoire</p>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center">
            <button onClick={openWhatsApp} className="btn btn-primary w-full md:w-auto px-12 text-xs uppercase tracking-widest">
              Lancer une discussion
            </button>
            <p className="text-[10px] text-slate-300 mt-4 uppercase">© 2026 Perform'Eco — Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}