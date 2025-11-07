import { HyperText } from "@/components/ui/hyper-text";
import { VideoTextComponent } from "./partials/video-text";
import { WordRotate } from "@/components/ui/word-rotate";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6 animate-fade-in">
            {/* Greeting */}
            <div className="flex items-center space-x-2">
              <span className="text-white text-lg font-medium">
                <WordRotate words={["Konichiwa", "Hello", "Aneyong"]} />
              </span>
              <span className="text-white">, I am</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              <HyperText>Kent Jeremai Abarquez</HyperText>
            </h1>

            {/* Title/Role */}
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-blue-300 font-light">
                Software Engineer
              </p>
              <p className="text-xl text-slate-300">
                Building digital experiences that matter
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed">
              I create beautiful, functional websites and applications with
              modern technologies. Passionate about clean code, user experience,
              and solving complex problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
           <a href="#projects">
               <button className="px-8 py-3 hover:bg-blue-950 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50">
                View My Work
              </button>
           </a>
            <a href="#contactus">
                <button className="px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-all transform hover:scale-105">
                Get In Touch
              </button>
            </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6 justify-start">
              <a
                href="https://github.com/WebmasterSensei"
                className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
             
              
            </div>
          </div>

          {/* Right Side - Picture */}
          <div className="flex justify-center md:justify-end animate-fade-in-delay">
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute inset-0  rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full rounded-full overflow-hidden  shadow-2xl ">
                  <img
                    src="/avatars/kent.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-br from-blue-600 rounded-lg rotate-12 opacity-80 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 bg-linear-to-br from-blue-900 h-16 rounded-lg -rotate-12 opacity-80 animate-float-delay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-12deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
}
