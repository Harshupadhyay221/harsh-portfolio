import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "AWS Certified ML Engineer Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    badge: "🏆",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    badge: "☁️",
  },
  {
    title: "Kaggle Expert",
    issuer: "Kaggle",
    year: "2025",
    description: "500+ community contributions",
    badge: "🥇",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Validated expertise in cloud and machine learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                {/* Badge */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.badge}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-secondary font-medium mb-2">{cert.issuer}</p>

                {/* Year */}
                <p className="text-sm text-muted-foreground">{cert.year}</p>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs text-muted-foreground mt-2 px-2 py-1 rounded-full bg-muted/30 inline-block">
                    {cert.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
