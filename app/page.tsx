import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Globe, Sparkles, PhoneCall, Menu, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f4f5] text-zinc-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-24">
      {/* Browser-like Header */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-4">
            <div className="w-full bg-white/60 backdrop-blur-md border border-zinc-200/50 rounded-full py-2 px-4 flex items-center justify-center gap-2 text-sm text-zinc-500 shadow-sm">
              <Lock className="w-3 h-3" />
              <span>thomas.riverai.dk</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 bg-white/60 backdrop-blur-md border border-zinc-200/50 rounded-full py-2 px-4 shadow-sm">
              <div className="w-5 h-5 rounded bg-zinc-900 text-white flex items-center justify-center text-xs font-bold">R</div>
              hey@riverai.dk
            </div>
            <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-zinc-50 transition-colors border border-zinc-200/50">
              <Menu className="w-4 h-4 text-zinc-600" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I'm <span className="inline-block relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] align-middle mx-1 sm:mx-3 rounded-3xl overflow-hidden border-4 border-white shadow-md rotate-[-3deg] hover:rotate-0 transition-transform duration-300"><Image src="https://i.imgur.com/2etTUA8.png" alt="Thomas" fill className="object-cover" unoptimized /></span> Thomas!
            <br />
            <span className="text-zinc-300 font-medium">I'm the Director at</span>
            <br />
            <span className="text-[#ff6b00]">RiverAI.</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-zinc-100 text-sm font-medium text-zinc-600 align-middle ml-2 sm:ml-6 mb-2 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <a href="mailto:hey@riverai.dk" className="px-8 py-4 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-lg shadow-zinc-900/20 hover:scale-105 active:scale-95 duration-200">
              No obligation strategy call
            </a>
            <p className="text-zinc-600 max-w-xs text-center sm:text-left text-sm leading-relaxed font-medium">
              Feel free to explore my portfolio and reach out — I'd love to connect!
            </p>
          </div>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          
          {/* About Me Card */}
          <div className="md:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-zinc-100 flex flex-col justify-between group hover:shadow-md transition-shadow duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-semibold text-zinc-600 mb-8 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                About Me
              </div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">Danish AI Innovator & Agency Director</h2>
              <div className="space-y-5 text-zinc-600 leading-relaxed font-medium">
                <p>
                  At 17, I co-founded and currently direct RiverAI ApS alongside my parents. Over the past 8 months, I have immersed myself in the rapidly evolving world of Artificial Intelligence, transforming a deep curiosity into a professional agency.
                </p>
                <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 mt-4">
                  <h3 className="text-zinc-900 font-bold mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                    My Core Philosophy
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span><strong>Integrity First:</strong> Complete transparency with no hidden fees or long-term lock-in contracts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span><strong>Client Success:</strong> Dedicated to building solutions that create genuinely happy customers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span><strong>Measurable Impact:</strong> Focused entirely on delivering real results and generating tangible ROI.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-8 mt-8 border-t border-zinc-100">
              <a href="https://www.proff.dk/firma/riverai-aps/hesselager/internetdesign-og-programmering/0RBXP7I0C2C" target="_blank" rel="noreferrer" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1.5 bg-zinc-50 px-4 py-2 rounded-full">
                CVR: 45906523 <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href="https://riverai.dk" target="_blank" rel="noreferrer" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1.5 bg-zinc-50 px-4 py-2 rounded-full">
                riverai.dk <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Paid Clients Card */}
          <div className="md:col-span-5 bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-zinc-100 flex flex-col group hover:shadow-md transition-shadow duration-300">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-semibold text-zinc-600 mb-8 self-start uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Paid Clients
            </div>
            <div className="flex-1 flex flex-col gap-4 justify-center">
              <a href="https://www.antikguldsmeden.dk" target="_blank" rel="noreferrer" className="group/item block p-5 rounded-3xl bg-zinc-50 hover:bg-[#ff6b00]/5 transition-colors border border-zinc-100 hover:border-[#ff6b00]/20">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-zinc-200/50 bg-zinc-200/50">
                  <Image src="https://image.thum.io/get/width/800/crop/600/noanimate/https://www.antikguldsmeden.dk" alt="Antikguldsmeden Preview" fill className="object-cover group-hover/item:scale-105 transition-transform duration-500" unoptimized />
                </div>
                <div className="font-bold text-lg text-zinc-900 group-hover/item:text-[#ff6b00] transition-colors flex items-center justify-between">
                  Antikguldsmeden
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/item:text-[#ff6b00]" />
                  </div>
                </div>
                <div className="text-sm font-medium text-zinc-500 mt-1">E-commerce / Retail</div>
              </a>
              <a href="https://doctorislanddetail.lovable.app" target="_blank" rel="noreferrer" className="group/item block p-5 rounded-3xl bg-zinc-50 hover:bg-[#ff6b00]/5 transition-colors border border-zinc-100 hover:border-[#ff6b00]/20">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-zinc-200/50 bg-zinc-200/50">
                  <Image src="https://image.thum.io/get/width/800/crop/600/noanimate/https://doctorislanddetail.lovable.app" alt="Doctor Island Detail Preview" fill className="object-cover group-hover/item:scale-105 transition-transform duration-500" unoptimized />
                </div>
                <div className="font-bold text-lg text-zinc-900 group-hover/item:text-[#ff6b00] transition-colors flex items-center justify-between">
                  Doctor Island Detail
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover/item:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/item:text-[#ff6b00]" />
                  </div>
                </div>
                <div className="text-sm font-medium text-zinc-500 mt-1">Service Business</div>
              </a>
            </div>
          </div>

          {/* MVPs Grid */}
          <div className="md:col-span-12 bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-zinc-100 group hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                Website MVPs
              </div>
              <a href="mailto:hey@riverai.dk" className="text-sm font-bold text-[#ff6b00] hover:text-[#e66000] transition-colors flex items-center gap-1 bg-[#ff6b00]/10 px-5 py-2.5 rounded-full hover:bg-[#ff6b00]/20">
                Get your free MVP <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[
                { name: 'Mindag', url: 'https://mindag.lovable.app/#' },
                { name: 'Sarah Barløse', url: 'https://sarahbarlose-dk.lovable.app' },
                { name: 'Danfun', url: 'https://danfun-dk.lovable.app' },
                { name: 'Access2Learn', url: 'https://access2learnmvp.lovable.app' },
                { name: 'Svendborg Pejse', url: 'https://svendborg-pejse.lovable.app' },
                { name: 'Moselund Økologi', url: 'https://moselundokologi.vercel.app' },
                { name: 'Havneby Kro', url: 'https://havnebykrodk.lovable.app' },
              ].map((mvp, i) => (
                <a key={i} href={mvp.url} target="_blank" rel="noreferrer" className="group/card block p-5 rounded-3xl bg-zinc-50 hover:bg-white transition-all duration-300 border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1">
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-zinc-200/50 bg-zinc-200/50">
                    <Image src={`https://image.thum.io/get/width/800/crop/600/noanimate/${mvp.url}`} alt={`${mvp.name} Preview`} fill className="object-cover group-hover/card:scale-105 transition-transform duration-500" unoptimized />
                  </div>
                  <div className="font-bold text-zinc-900 flex items-start justify-between gap-4 mb-2">
                    <span className="line-clamp-2">{mvp.name}</span>
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover/card:bg-zinc-900 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/card:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-zinc-500 truncate">{mvp.url.replace('https://', '').replace('/#', '')}</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
