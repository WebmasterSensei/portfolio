import { IconCloudComponent } from "./partials/iconcloud";
import { MarqueeComponent } from "./partials/marquee-text";
import TextDividerComponent from "./partials/text-divider";
import { HighlighterComponent } from "./partials/text-highlighter";

export default function AboutMe() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16 md:py-24" id="aboutme">
            <div className="max-w-6xl w-full">
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <TextDividerComponent title="About me" sub="more about me?" />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Profile Image Column */}
                    <div className="lg:col-span-3 flex justify-center lg:justify-start">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-slate-500 to-slate-900 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-white/10 shadow-2xl">
                                <img 
                                    src="/avatars/kent.png" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" 
                                    alt="Kent Jeremai Abarquez" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-9 space-y-8">
                        {/* Header */}
                        <div className="text-center lg:text-left space-y-3">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                               
                            </h1>
                            <div className="flex items-center justify-center lg:justify-start gap-3">
                                <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-blue-950"></div>
                                <p className="text-lg md:text-xl text-gray-400 font-medium">
                                    Full Stack Software Engineer
                                </p>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-blue-900 to-transparent rounded-full hidden lg:block"></div>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
                                Passionate developer with a love for creating beautiful and functional web applications.
                                I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                                you can find me exploring new technologies or enjoying a good cup of coffee.
                            </p>
                        </div>

                        {/* Skills Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <h2 className="text-2xl md:text-3xl font-bold text-white">Skills & Technologies</h2>
                                <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
                            </div>

                            {/* Skills Components */}
                            <div className="space-y-8">
                                <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border border-slate-800/50 p-6 hover:bg-white/[0.07] transition duration-300">
                                    <MarqueeComponent />
                                </div>

                                <div className="relative rounded-2xl bg-white/5 backdrop-blur-sm border  border-slate-800/50 p-8 hover:bg-white/[0.07] transition duration-300">
                                    <IconCloudComponent />
                                </div>

                                <div className="relative text-white rounded-2xl bg-gradient-to-br from-blue-950/30 to-slate-950/90 backdrop-blur-sm border border-white/10 p-8 hover:border-white/20 transition duration-300">
                                    <HighlighterComponent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}