import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Trainee Data Scientist",
    company: "Tatras Data Services",
    location: "Mohali, Punjab",
    period: "Dec 2024 – Present",
    highlights: [
      "Built enterprise-grade Conversational AI Agent with Langfuse Observability, evaluating LangChain, LangGraph, LlamaIndex, AutoGen for scalable orchestration",
      "Optimized client RAG pipelines using AWS OpenSearch Hybrid Search (BM25 + k-NN), achieving 10% faster retrieval latency",
      "Fine-tuned Llama3 8B and Mistral 7B models for NL-to-SQL generation, boosting accuracy by 40%",
      "Designed Multimodal Agentic RAG Chatbot (text, image, audio) deployed across Web + WhatsApp",
      "Built scalable ETL ingestion pipeline for PDF/DOC/TXT using Celery + Redis with AWS serverless deployment"
    ],
  },
  {
    title: "Data Science Intern",
    company: "Sabudh Foundation",
    location: "Remote",
    period: "Jul 2024 – Dec 2024",
    highlights: [
      "Implemented Transformer-based LLMs for document parsing achieving 85% classification accuracy",
      "Developed deep learning models (CNN, RNN, ANN) for NLP classification and information extraction"
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building cutting-edge AI solutions at scale
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-0 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary glow-effect hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-secondary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
