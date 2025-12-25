import logo from "@/assets/logo.webp";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              À Propos de <span className="text-primary">Street Car Detailing</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Chez Street Car Detailing, nous sommes passionnés par la transformation de votre véhicule en un chef-d'œuvre digne d'une salle d'exposition. Avec des années d'expérience dans l'industrie de l'entretien automobile, notre équipe de préparateurs qualifiés allie une attention méticuleuse aux détails à des produits haut de gamme et des techniques de pointe.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nous comprenons que votre voiture est bien plus qu'un simple moyen de transport : c'est le reflet de votre personnalité et de votre style. C'est pourquoi nous traitons chaque véhicule qui franchit nos portes avec le soin et la précision qu'il mérite, pour des résultats qui dépassent vos attentes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl card-gradient border border-border">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Voitures Traitées</div>
              </div>
              <div className="text-center p-6 rounded-xl card-gradient border border-border">
                <div className="text-4xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Années d'Expérience</div>
              </div>
            </div>
          </div>

          {/* Image/Logo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={logo}
                alt="Street Car Detailing"
                className="relative w-full max-w-md animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
