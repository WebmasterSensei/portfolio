import { IconCloudComponent } from "./partials/iconcloud";
import { MarqueeComponent } from "./partials/marquee-text";
import TextDividerComponent from "./partials/text-divider";
import { HighlighterComponent } from "./partials/text-highlighter";

export default function AboutMe() {
    return (
        <div className="min-h-screen flex items-center justify-center" id="aboutme">
            <div className="max-w-4xl w-full"  >
                <div className="mb-20">
                    <TextDividerComponent title="About me" sub="more about me?" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Column - Small on desktop, full width on mobile */}
                    <div className="md:col-span-1 flex justify-center md:justify-start">
                        <div className="w-40 h-40 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-950/50 to-slate-950/50 flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                            <img src="/avatars/kent.png" className="rounded-full w-full h-full object-cover" alt="Kent Jeremai Abarquez" />
                        </div>
                    </div>

                    {/* Right Column - Big on desktop, full width on mobile */}
                    <div className="md:col-span-3 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Kent Jeremai Abarquez</h1>
                        <p className="text-gray-400 text-lg md:text-xl mb-4">Full Stack Software Engineer</p>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            Passionate developer with a love for creating beautiful and functional web applications.
                            I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                            you can find me exploring new technologies or enjoying a good cup of coffee.
                        </p>

                        {/* Skills */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-white mb-3">Skills</h2>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                <MarqueeComponent />
                            </div>
                            <IconCloudComponent />
                            <div className="text-white">
                                <HighlighterComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}