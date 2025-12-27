import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, MessageSquare, FileSearch } from 'lucide-react';

const projects = [
  {
    title: "Intelligent Website Chatbot",
    tech: "LangGraph, LangChain, FastAPI",
    date: "May 2025",
    description: "Production-ready chatbot using Agentic LangGraph workflows enabling context-aware task execution.",
    highlight: "60% reduction in response latency",
    icon: Sparkles,
    gradient: "from-primary to-secondary",
  },
  {
    title: "Multi-RAG WhatsApp Integration",
    tech: "Python, LangChain, Twilio, FastAPI",
    date: "Apr 2025",
    description: "Multimodal RAG pipeline supporting WhatsApp-based retrieval with Twilio integration.",
    highlight: "1000+ concurrent users, 99.9% uptime",
    icon: MessageSquare,
    gradient: "from-secondary to-accent",
  },
  {
    title: "AI-Powered CV-JD Matching",
    tech: "Gemini LLM, LangChain, Streamlit",
    date: "Dec 2024",
    description: "Transformer-based resume parsing + job matching engine with skill-gap analysis.",
    highlight: "90% role-fit accuracy",
    icon: FileSearch,
    gradient: "from-accent to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative AI solutions solving real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-background" />
                </div>

                {/* Date badge */}
                <span className="text-xs text-muted-foreground mb-2">{project.date}</span>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Tech stack */}
                <p className="text-sm text-secondary font-medium mb-4">{project.tech}</p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Highlight */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-primary">{project.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
