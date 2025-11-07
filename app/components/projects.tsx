import React, { useState } from "react";
import { ExternalLink, Github, Star, Clock, Users } from "lucide-react";
import { BentoComponent } from "./partials/bento-grid";
import TextDividerComponent from "./partials/text-divider";

// Project data with more web-like feel
const projects = [
  {
    id: 1,
    title: "Next Developers",
    link: "https://synextdev.vercel.app",
    description:
      "A modern online shopping experience with seamless checkout, real-time inventory tracking, and personalized recommendations.",
    tech: ["NextJs", "Supabase", "Pnpm", "Magic Ui"],
    status: "Live",
    stars: 234,
    contributors: 8,
    year: "2025",
    color: "from-blue-500 to-cyan-500",
    image: "https://synextdev.vercel.app/images/nextlogo.svg"
  },
  {
    id: 2,
    title: "God's Oracle Minitries",
    link: "https://goms.vercel.app",
    description:
      "Intelligent conversations powered by cutting-edge AI, featuring natural language understanding and contextual responses.",
    tech: ["NextJs", "Supabase", "Pnpm", "Magic Ui"],
    status: "Live",
    stars: 567,
    contributors: 12,
    year: "2025",
    color: "from-purple-500 to-pink-500",
    image: "https://goms.vercel.app/images/gomlogo.png"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
        id="projects"
      >
        <div className="pt-32 pb-16">
          <TextDividerComponent title="Projects" sub="my projects" />
        </div>
          <h3 className="text-3xl font-bold text-center p-20 text-gray-500 mb-4">
          Inhouse Projects
        </h3>
        <BentoComponent />

        {/* Filter Tabs */}
        {/* <div className="flex justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div> */}
        <h3 className="text-3xl font-bold text-center p-20 text-gray-500 mb-4">
          Projects I deployed?
        </h3>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 mt-10">
          {projects.map((project: any, index: number) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header Section */}
              <div
                className="relative h-48 bg-center bg-no-repeat bg-contain flex items-end"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* Overlay layers */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Floating Orbs */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 delay-100" />

                {/* Project Info */}
                <div className="relative z-10 w-full px-6 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        project.status === "Live"
                          ? "bg-green-400/90 text-green-900"
                          : project.status === "Beta"
                          ? "bg-yellow-400/90 text-yellow-900"
                          : "bg-blue-400/90 text-blue-900"
                      } backdrop-blur-sm`}
                    >
                      {project.status}
                    </span>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/90 text-gray-900 backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed mb-6 min-h-[60px]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech: any, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 shadow-xl shadow-gray-800 text-gray-300 text-xs rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 group/btn font-medium"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="text-center py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-600 text-lg mb-8">
              Let's build something amazing together. Check out all my work or
              get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold">
                <span>View All Projects</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold">
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
