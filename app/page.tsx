"use client";

import React, { useState } from "react";

// --- SERVICES RÉELS (Source: WhatsApp Image 2026-05-13 at 11.16.55.jpeg) ---
const services = [
  {
    title: "CONSEIL ÉCONOMIQUE & STRATÉGIQUE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      "Études économiques",
      "Analyse de marché",
      "Stratégie de croissance",
      "Business plan"
    ]
  },
  {
    title: "ANALYSE FINANCIÈRE & PERFORMANCE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.407 2.67 1M12 8V7m0 1c-1.11 0-2.08-.407-2.67-1M12 8V7m0 9v1m0-1c1.11 0 2.08.407 2.67-1M12 16V17m0-1c-1.11 0-2.08.407-2.67 1M12 16V17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      "Analyse financière",
      "Diagnostics de performance",
      "Prévisions & budgets",
      "Tableaux de bord"
    ]
  },
  {
    title: "ACCOMPAGNEMENT DES ENTREPRISES",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      "Création d'entreprise",
      "Accompagnement PME",
      "Restructuration",
      "Coaching & suivi"
    ]
  },
  {
    title: "GESTION & OPTIMISATION DES RESSOURCES",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      "Optimisation des coûts",
      "Gestion des ressources",
      "Organisation & processus",
      "Gestion des risques"
    ]
  },
  {
    title: "AUDIT & CONTRÔLE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      "Audit financier",
      "Audit organisationnel",
      "Contrôle interne",
      "Conformité réglementaire"
    ]
  }
];

export default function VitrinePerformEco() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-slate-300 font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }

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
        .btn-primary { background: linear-gradient(135deg, #C9952A 0%, #F4C458 100%); color: #1c1c2e; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 25px -5px rgba(201, 149, 42, 0.4); }
        
        .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.1); color: #fff; }
        .btn-outline:hover { background: rgba(255,255,255,0.05); }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
        }

        .gold-gradient {
          background: linear-gradient(135deg, #C9952A 0%, #F4C458 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(201, 149, 42, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          z-index: 0;
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0C10]/80 backdrop-blur-xl border-b border-white/5 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#C9952A] rounded-xl flex items-center justify-center text-black font-black text-xl">P</div>
            <span className="text-xl font-extrabold text-white tracking-tighter uppercase">Perform'<span className="text-[#C9952A]">Eco</span></span>
          </div>

          <div className="hidden md:flex gap-10 items-center text-sm font-bold uppercase tracking-widest">
            <a href="#accueil" className="hover:text-[#C9952A] transition-colors">Accueil</a>
            <a href="#services" className="hover:text-[#C9952A] transition-colors">Services</a>
            <a href="#contact" className="btn btn-primary text-xs px-6 py-3 uppercase">Contactez-nous</a>
          </div>

          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-48 pb-24 px-6 overflow-hidden flex items-center min-h-[85vh]">
        <div className="hero-glow top-[-100px] right-[-100px]"></div>
        <div className="hero-glow bottom-[-100px] left-[-100px]"></div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <div className="inline-block px-5 py-2 mb-8 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-[0.4em] uppercase text-[#C9952A]">
              Cabinet de Conseil & Stratégie
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.05] mb-10 tracking-tighter uppercase">
              L'expertise <br />au service de <br />
              <span className="gold-gradient italic">votre performance.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mb-12 font-light leading-relaxed">
              Des solutions économiques sur mesure pour booster la performance de votre activité à Abidjan et partout en Côte d'Ivoire.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="btn btn-primary px-12 py-5 text-xs uppercase tracking-[0.15em]">Prendre Rendez-vous</button>
              <button className="btn btn-outline px-12 py-5 text-xs uppercase tracking-[0.15em]">Nos Services</button>
            </div>
          </div>

          <div className="relative group hidden lg:block">
            <div className="relative z-10 glass-card p-5 rounded-[3rem] border-white/10 shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-1000">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                alt="Analyse business"
                className="rounded-[2.5rem] h-[550px] w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-32 px-6 bg-[#0c0e12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#C9952A] text-xs font-bold tracking-[0.6em] uppercase mb-5">Domaines d'Intervention</h2>
            <p className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase">Nos pôles de compétences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div key={i} className="glass-card p-12 rounded-[2.5rem] hover:border-[#C9952A]/40 transition-all duration-500 group flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#C9952A] mb-10 group-hover:bg-[#C9952A] group-hover:text-black transition-all">
                  {s.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-8 leading-tight min-h-[3rem] uppercase tracking-tight">{s.title}</h3>

                <ul className="space-y-5 mb-12 flex-1">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-[15px] text-slate-400 flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9952A]"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-outline w-full text-[10px] font-bold tracking-[0.2em] uppercase">Détails de l'offre</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto glass-card p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9952A]/5 rounded-full -mr-24 -mt-24 blur-[100px]"></div>

          <h2 className="text-[#C9952A] text-xs font-bold tracking-[0.5em] uppercase mb-10">Notre Vision</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-16 tracking-tight uppercase">
            Vous accompagner à chaque étape pour transformer vos défis en résultats durables.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "EXPERTISE", val: "Elite" },
              { label: "SUR MESURE", val: "Précis" },
              { label: "ENGAGEMENT", val: "Total" },
              { label: "RÉSULTATS", val: "Concrets" }
            ].map((trait, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <span className="text-[11px] font-extrabold tracking-[0.3em] text-[#C9952A] uppercase">{trait.label}</span>
                <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">{trait.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="pt-32 pb-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#C9952A] rounded flex items-center justify-center text-black font-black text-lg">P</div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">Perform'<span className="text-[#C9952A]">Eco</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Votre partenaire de performance opérationnelle et financière en Côte d'Ivoire.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.3em]">Contact Direct</h4>
            <p className="text-sm text-slate-400 font-medium">01 02 76 61 42 (Téléphone principal)</p>
            <p className="text-sm text-slate-400 font-medium">07 08 50 33 76 (Assistant stratégique)</p>
            <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">Abidjan, Côte d'Ivoire</p>
          </div>

          <div className="space-y-6">
      
    
          
            <a
              href="https://wa.me/2250102766142"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full mt-6 text-[10px] uppercase tracking-[0.2em] no-underline"
            >
              Contact WhatsApp
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.5em]">
            PERFORM'ECO — PARTENAIRE DE PERFORMANCE
          </p>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            © 2026 Tous Droits Réservés
          </p>
        </div>
      </footer>
    </div>
  );
}