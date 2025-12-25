import { Car, Sparkles, Shield, Cog, Droplets } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Lavage Extérieur & Cire",
    description: "Lavage complet à la main avec application de cire haut de gamme pour une brillance durable et une protection contre les intempéries.",
    price: "Dès 0000 DZD",
  },
  {
    icon: Sparkles,
    title: "Nettoyage Intérieur en Profondeur",
    description: "Aspiration minutieuse, nettoyage à la vapeur, traitement du cuir et élimination des odeurs pour un intérieur comme neuf.",
    price: "Dès 0000 DZD",
  },
  {
    icon: Car,
    title: "Forfait Detailing Complet",
    description: "Notre service complet combinant detailing extérieur et intérieur pour une transformation totale du véhicule.",
    price: "Dès 0000 DZD",
  },
  {
    icon: Cog,
    title: "Nettoyage du Compartiment Moteur",
    description: "Dégraissage et detailing professionnels de votre compartiment moteur pour un aspect sorti d'usine.",
    price: "Dès 0000 DZD",
  },
  {
    icon: Shield,
    title: "Protection Céramique",
    description: "Protection durable de la peinture avec un revêtement céramique hydrophobe pour des années de brillance et de protection.",
    price: "Dès 0000 DZD",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Du simple lavage à la transformation complète, nous proposons une gamme complète de services de detailing professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-gradient border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* <p className="text-primary font-semibold text-lg">
                {service.price}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
