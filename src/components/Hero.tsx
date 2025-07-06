
import { Search, Zap, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 text-sm">
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="text-purple-200">2025 Edition - Latest Shortcuts</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          🛠️ AI Tools & Development Hub
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
          🧠 <strong className="text-purple-300">ChatGPT Prompt Shortcuts</strong> & Hidden Power Features
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
            <Search className="w-5 h-5 mr-2" />
            Explore Shortcuts
          </Button>
          <Button variant="outline" size="lg" className="border-purple-400/50 text-purple-200 hover:bg-purple-500/20 px-8 py-3 rounded-full font-semibold backdrop-blur-sm">
            <Copy className="w-5 h-5 mr-2" />
            Quick Copy Guide
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-slate-500">
          <p>Trusted by 10,000+ developers worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
