import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { TextTypingComponent } from "./partials/text-typing";
import { MorphingTextComponent } from "./partials/morphingtext";
export default function Hero() {
  return (
    <div>
      <div className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Avatar Image */}
            <div className="order-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 to-slate-950 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden  shadow-2xl shadow-slate-500/50">
                  <img
                    src="/avatars/kent.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-slate-950 to-slate-900 rounded-full p-4 shadow-xl">
                  <p className="text-white font-bold text-lg">
                    {new Date().getFullYear() - 2023}+ years
                  </p>
                  <p className="text-slate-200 text-sm">Experience</p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-2">
              <div className="space-y-2">
                <p className="text-white text-lg font-medium">Hi, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Kent Abarquez
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <MorphingTextComponent texts={['Full Stack Developer', 'Full Snack Developer', 'Software Engineer']}/>
                </h2>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                <TextTypingComponent
                  text="I craft beautiful, responsive web experiences with modern
                technologies. Passionate about creating intuitive interfaces and
                solving complex problems."
                />
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-end flex-wrap gap-4 pt-4">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 group">
                  View My Work
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-500/10 transition-all">
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6">
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-500 transition-all hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-500 transition-all hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-purple-500 transition-all hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
