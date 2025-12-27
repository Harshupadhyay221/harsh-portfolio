import Scene3D from '@/components/Scene3D';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Harsh Upadhyay | ML Engineer & AI Specialist</title>
        <meta name="description" content="AWS Certified ML Engineer specializing in Agentic AI, RAG Pipelines, LLM Fine-tuning, and Generative AI. Building production-ready AI systems." />
        <meta name="keywords" content="ML Engineer, AI Specialist, LangChain, LangGraph, AWS, Machine Learning, Generative AI" />
      </Helmet>
      
      <main className="relative min-h-screen overflow-x-hidden">
        {/* 3D Background */}
        <Scene3D />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Content Sections */}
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default Index;