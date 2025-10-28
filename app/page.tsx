
"use client"
import { useState } from 'react';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Aboutme from './components/aboutme';
import Projects from './components/projects';

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-blue-950/80">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />
      {/* About me Section*/}
      <Aboutme />
      {/* Projects me Section*/}
      <Projects />
    </div>
  );
}