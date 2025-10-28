import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { TextTypingComponent } from "./partials/text-typing";
import { MorphingTextComponent } from "./partials/morphingtext";
import { VideoTextComponent } from "./partials/video-text";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar Image Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-blue-900/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>

              {/* Main Avatar */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-slate-950/50">
                <img
                  src="/avatars/kent.png"
                  alt="Kent Jey Abarquez - Full Stack Developer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-2 -right-2 bg-linear-to-br from-slate-900 to-blue-950 rounded-full p-4  border border-slate-950/50">
                <p className="text-white font-bold text-lg text-center">
                  {new Date().getFullYear() - 2023}+
                </p>
                <p className="text-slate-100 text-sm font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Introduction */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {/* Title */}
              <div className="pt-20 pb-10">
                <MorphingTextComponent
                  texts={[
                    'Full Stack Developer',
                    'Full Snack Developer',
                    'Software Engineer'
                  ]}
                />
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl">
              <p className="text-slate-300 text-lg leading-relaxed font-light tracking-wide">
                <TextTypingComponent
                  text="I craft beautiful, responsive web experiences with modern technologies. Passionate about creating intuitive interfaces and solving complex problems."
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group bg-gradient-to-r from-slate-950 to-blue-950/50 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-slate-900/40 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 transform">
                View My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>

              <button className="border-2 border-slate-500/60 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm">
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <a
                href="#"
                className="group w-14 h-14 bg-slate-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 border border-slate-700/50"
                aria-label="GitHub Profile"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                className="group w-14 h-14 bg-slate-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 border border-slate-700/50"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="#"
                className="group w-14 h-14 bg-slate-800/60 backdrop-blur-sm rounded-2xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 border border-slate-700/50"
                aria-label="Email Contact"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl p-10 font-bold text-white leading-tight">
          <VideoTextComponent text="Kent Jeremai Abarquez" />
        </h1>
      </div>
    </div>
  );
}