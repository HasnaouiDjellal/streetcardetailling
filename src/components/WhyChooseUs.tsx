import { Award, Sparkles, DollarSign, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Préparateurs Expérimentés",
    description: "Notre équipe possède des années d'expérience pratique sur tous types de véhicules et d'états.",
  },
  {
    icon: Sparkles,
    title: "Produits Premium",
    description: "Nous utilisons uniquement des produits professionnels de premier choix pour les meilleurs résultats.",
  },
  {
    icon: DollarSign,
    title: "Tarifs Abordables",
    description: "Des services de detailing de qualité à des prix compétitifs adaptés à votre budget.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Client",
    description: "Votre satisfaction est notre priorité. Nous n'avons pas fini tant que vous n'êtes pas ravi.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Pourquoi Nous <span className="text-primary">Choisir</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nous nous engageons à fournir des résultats exceptionnels pour chaque prestation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:neon-glow transition-all duration-300">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
