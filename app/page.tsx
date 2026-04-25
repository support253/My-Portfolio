// NOTE: All 3 client sites (dahlogsvane.dk, antikguldsmeden.dk, doctorislanddetail.lovable.app)
// allow iframe embedding — verified by checking response headers and HTML for X-Frame-Options,
// CSP frame-ancestors, and frame-busting JS. The screenshot fallback only triggers if onLoad
// hasn't fired within 10 seconds (catches future regressions or genuinely broken sites).

"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowUpRight, Languages } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useIsMobile } from '@/hooks/use-mobile';

const translations = {
  en: {
    h1: "I build websites for Danish small businesses.",
    subhead: "Below are 3 sites I've shipped.",
    bookCall: "Book a discovery call",
    credibility: "3 sites shipped · Based in Denmark · CVR 45906523",
    aboutTitle: "About",
    aboutBody: "Thomas Vincent-Piper, 17, based in Fyn. I build custom websites for Danish small businesses — no templates, no page builders, real code. One-on-one, fast turnaround, you own everything.",
    howItWorksTitle: "How working with me goes",
    timeline: "Timeline: 2–3 weeks from kickoff to live",
    price: "Price: 8.000–15.000 DKK ekskl. moms",
    includes: "Includes: design, build, deployment, 1 revision round",
    youOwn: "You own: domain, code, hosting account",
    openLiveSite: "Open live site",
    previewUnavailable: "Live preview unavailable",
    previewDesc: "The security settings for this website prevent it from being embedded here. Click below to view the live site."
  },
  da: {
    h1: "Jeg bygger hjemmesider til danske virksomheder.",
    subhead: "Herunder er 3 sider, jeg har lanceret.",
    bookCall: "Book en samtale",
    credibility: "3 lancerede sider · Baseret i Danmark · CVR 45906523",
    aboutTitle: "Om mig",
    aboutBody: "Thomas Vincent-Piper, 17 år, baseret på Fyn. Jeg bygger skræddersyede hjemmesider til danske virksomheder — ingen skabeloner, ingen page builders, kun rigtig kode. En-til-en kontakt, hurtig levering, og du ejer alt.",
    howItWorksTitle: "Sådan foregår samarbejdet",
    timeline: "Tidslinje: 2–3 uger fra start til lancering",
    price: "Pris: 8.000–15.000 DKK ekskl. moms",
    includes: "Inkluderer: design, udvikling, lancering, 1 revisionsrunde",
    youOwn: "Du ejer: domæne, kode, hosting-konto",
    openLiveSite: "Åbn live side",
    previewUnavailable: "Live forhåndsvisning utilgængelig",
    previewDesc: "Sikkerhedsindstillinger for denne hjemmeside forhindrer den i at blive indlejret her. Klik nedenfor for at besøge den live side."
  }
};

const projects = [
  {
    name: "Dahl & Svane",
    description: "Civil engineering / consulting",
    tag: "Consulting",
    url: "https://dahlogsvane.dk"
  },
  {
    name: "Antikguldsmeden",
    description: "Antique jewellery shop, Denmark",
    tag: "E-commerce",
    url: "https://antikguldsmeden.dk"
  },
  {
    name: "Doctor Island Detail",
    description: "Auto detailing",
    tag: "Service Business",
    url: "https://doctorislanddetail.lovable.app/"
  }
];

const ProjectCard = ({ project, t, isMobile }: { project: any, t: any, isMobile: boolean }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);

  useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => {
      if (!iframeLoaded) setIframeFailed(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [iframeLoaded, isMobile]);

  const showScreenshot = isMobile || iframeFailed;

  return (
    <motion.div whileHover={{ y: -4 }} className="mb-20">
      <div className="mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h3 className="text-3xl font-bold text-zinc-900">{project.name}</h3>
          <p className="text-zinc-500 mt-1 font-medium">{project.description}</p>
        </div>
        <span className="inline-block px-4 py-1.5 bg-zinc-200/50 text-zinc-600 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap self-start sm:self-auto">
          {project.tag}
        </span>
      </div>
      
      <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 bg-white">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
          {/* Faux Browser Chrome */}
          <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-3 flex items-center">
            <div className="flex gap-1.5 w-16">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 text-center">
              <div className="mx-auto max-w-fit inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-zinc-200/80 text-xs font-semibold text-zinc-500 group-hover:bg-zinc-50 group-hover:text-zinc-800 transition-colors">
                {project.url.replace('https://', '').replace('/', '')}
              </div>
            </div>
            <div className="w-16" />
          </div>
        </a>
        
        {/* Interactive Body */}
        <div className="relative w-full h-[350px] sm:h-[600px] overflow-hidden bg-zinc-50 flex items-center justify-center border-t border-zinc-200/50">
          {showScreenshot ? (
            <>
              <Image 
                src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`} 
                alt={project.name} 
                fill 
                className="object-cover object-top" 
                unoptimized 
              />
              <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center p-6 text-center">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/95 backdrop-blur-sm text-zinc-900 rounded-full font-bold shadow-xl border border-zinc-200/50 hover:scale-105 active:scale-95 transition-transform flex items-center gap-2">
                  {t.openLiveSite} <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </>
          ) : (
            <div className="w-[200%] h-[200%] scale-50 origin-top-left absolute top-0 left-0 bg-white">
              <iframe 
                src={project.url} 
                className="w-full h-full pointer-events-auto border-none"
                onLoad={() => setIframeLoaded(true)}
              />
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 pointer-events-none">
                  <div className="w-8 h-8 rounded-full border-2 border-zinc-300 border-t-[#ff6b00] animate-spin" />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<'en' | 'da'>('en');
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const bgBlob1Y = useTransform(scrollY, [0, 1000], [0, 300]);
  const bgBlob2Y = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang === 'da' || savedLang === 'en') {
      setLang(savedLang);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('da')) {
        setLang('da');
      }
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'da' : 'en';
    setLang(newLang);
    localStorage.setItem('preferred-lang', newLang);
  };

  const currentLang = mounted ? lang : 'en';
  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-[#f4f4f5] text-zinc-900 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden relative flex flex-col">
      
      {/* Background Parallax Elements */}
      <motion.div 
        className="fixed top-[0%] left-[-10%] w-[50%] h-[40%] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none"
        style={{ y: bgBlob1Y }}
      />
      <motion.div 
        className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none"
        style={{ y: bgBlob2Y }}
      />

      {/* Header */}
      <header className="max-w-4xl w-full mx-auto px-4 sm:px-6 pt-6 pb-2 relative z-20 flex justify-end">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleLang}
          className="flex items-center gap-2 text-sm font-bold text-zinc-700 bg-white/60 backdrop-blur-md border border-zinc-200/50 rounded-full py-2 px-3 sm:px-4 shadow-sm hover:bg-white transition-colors"
          aria-label="Toggle Language"
        >
          <motion.div
            initial={false}
            animate={{ scale: [0.8, 1.2, 1] }}
            transition={{ duration: 0.3 }}
            key={currentLang}
            className="relative w-5 h-5 rounded-full overflow-hidden border border-zinc-200/50 shrink-0"
          >
            <Image 
              src={currentLang === 'en' ? 'https://flagcdn.com/gb.svg' : 'https://flagcdn.com/dk.svg'} 
              alt={currentLang === 'en' ? 'English' : 'Danish'} 
              fill 
              className="object-cover" 
              unoptimized 
            />
          </motion.div>
          <span className="hidden sm:inline">{currentLang === 'en' ? 'EN' : 'DA'}</span>
          <span className="sm:hidden">{currentLang === 'en' ? 'EN' : 'DA'}</span>
        </motion.button>
      </header>

      <div className="flex-grow">
        {/* Hero Section */}
        <motion.main 
          style={{ y: heroY, opacity: heroOpacity }}
          className="px-4 sm:px-6 pt-20 pb-16 relative z-10 max-w-3xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-[1.1] mb-5 text-zinc-900"
          >
            {t.h1}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-zinc-600 mb-8 font-medium"
          >
            {t.subhead}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <a 
              href="https://cal.com/river-ai-aps/discovery-call" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-zinc-900/10"
            >
              {t.bookCall} <ArrowUpRight className="w-5 h-5 opacity-70" />
            </a>
            <p className="mt-6 text-sm text-zinc-500 font-semibold tracking-wide uppercase">
              {t.credibility}
            </p>
          </motion.div>
        </motion.main>

        {/* Selected Work List */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-10 relative z-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} t={t} isMobile={isMobile} />
            ))}
          </motion.div>
        </section>

        {/* About & Process Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 mb-32 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* About */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">{t.aboutTitle}</h2>
              <p className="text-zinc-600 leading-relaxed font-medium mb-8">
                {t.aboutBody}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a href="https://www.proff.dk/firma/riverai-aps/hesselager/internetdesign-og-programmering/0RBXP7I0C2C" target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-700 hover:text-zinc-900 transition-colors flex items-center gap-1.5 bg-zinc-100 px-4 py-2 rounded-full border border-zinc-200/80">
                    CVR: 45906523 <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a href="https://riverai.dk" target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-700 hover:text-zinc-900 transition-colors flex items-center gap-1.5 bg-zinc-100 px-4 py-2 rounded-full border border-zinc-200/80">
                    riverai.dk <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2 text-sm font-medium">
                  <a href="mailto:support@riverai.dk" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                    support@riverai.dk
                  </a>
                  <a href="https://cal.com/river-ai-aps/discovery-call" target="_blank" rel="noreferrer" className="text-[#ff6b00] hover:text-[#e66000] font-semibold transition-colors flex items-center gap-1">
                    {t.bookCall} <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* How it works */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold mb-8">{t.howItWorksTitle}</h2>
              <div className="space-y-5 text-zinc-600 font-medium">
                <p className="border-b border-zinc-100 pb-4">{t.timeline}</p>
                <p className="border-b border-zinc-100 pb-4">{t.price}</p>
                <p className="border-b border-zinc-100 pb-4">{t.includes}</p>
                <p className="text-zinc-800 font-semibold">{t.youOwn}</p>
              </div>
            </motion.div>

          </div>
        </section>
      </div>

      {/* Real Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 pb-16 relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-zinc-500 font-medium">
          <div>
            <p className="font-bold text-zinc-900 mb-3 text-base">RiverAI ApS</p>
            <p className="mb-1">Fyn, Denmark</p>
            <p>CVR 45906523</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-zinc-900 mb-1 text-base">Contact</p>
            <a href="mailto:support@riverai.dk" className="hover:text-zinc-900 transition-colors w-fit">support@riverai.dk</a>
            <a href="https://cal.com/river-ai-aps/discovery-call" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors w-fit">Book a call</a>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="font-bold text-zinc-900 mb-1 text-base sm:opacity-0 hidden sm:block">Legal</p>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors w-fit">LinkedIn</a>
            <p className="mt-auto pt-4 sm:pt-0">© 2026 RiverAI ApS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
