
"use client"
import { useState } from 'react';
import NavBar from './components/navbar';
import Hero from './components/hero';

export default function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-slate-950 to-slate-950/80">
      {/* Navbar */}
      <NavBar/>

      {/* Hero Section */}
      <Hero />
    </div>
  );
}