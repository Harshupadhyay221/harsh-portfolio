import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript"],
    color: "primary",
  },
  {
    title: "LLM/AI Frameworks",
    skills: ["LangChain", "LangGraph", "LlamaIndex", "HuggingFace", "PyTorch", "Transformers", "MCP"],
    color: "secondary",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Bedrock", "AWS SageMaker", "AWS Lambda", "AWS Textract", "AWS Comprehend", "AWS EC2", "Docker", "FastAPI", "Git"],
    color: "accent",
  },
  {
    title: "Data & ETL",
    skills: ["Celery", "Redis", "Pandas", "NumPy", "BeautifulSoup", "Power BI"],
    color: "primary",
  },
  {
    title: "Vector & Graph DBs",
    skills: ["OpenSearch", "Pinecone", "Neo4j", "Chroma DB", "FAISS", "Weaviate", "Pinecone"],
    color: "secondary",
  },
  {
    title: "Web & Apps",
    skills: ["Streamlit", "HTML", "CSS", "Bootstrap", "REST APIs"],
    color: "accent",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'primary':
      return { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary', hover: 'hover:bg-primary/20' };
    case 'secondary':
      return { bg: 'bg-secondary/10', border: 'border-secondary/30', text: 'text-secondary', hover: 'hover:bg-secondary/20' };
    case 'accent':
      return { bg: 'bg-accent/10', border: 'border-accent/30', text: 'text-accent', hover: 'hover:bg-accent/20' };
    default:
      return { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary', hover: 'hover:bg-primary/20' };
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className={`text-lg font-bold font-display mb-4 ${colors.text}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${colors.bg} ${colors.border} border ${colors.hover} transition-colors cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;