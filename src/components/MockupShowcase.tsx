interface MockupShowcaseProps {
  images: string[];
}

const MockupShowcase = ({ images }: MockupShowcaseProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ejemplos de <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mockups y capturas reales de sistemas de rifas desarrollados por <strong className="text-primary">Lino Requena</strong>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={image} 
                  alt={`Mockup de proyecto ${index + 1} por Lino Requena`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-medium">
                  Proyecto desarrollado por Lino Requena
                </p>
                <p className="text-muted-foreground text-sm">
                  Sistema de rifas completamente funcional
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockupShowcase;