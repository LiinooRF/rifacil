import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="text-2xl font-bold text-foreground">Rifacil</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Características
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Proyectos
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>
        
        <Button variant="default" className="shadow-lg hover:shadow-xl transition-all duration-300">
          Contacto más abajo
        </Button>
      </div>
    </header>
  );
};

export default Header;