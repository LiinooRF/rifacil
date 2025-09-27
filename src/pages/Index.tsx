import { Button } from "@/components/ui/button";
import { MessageCircle, Code, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import ProjectCard from "@/components/ProjectCard";
import MockupShowcase from "@/components/MockupShowcase";
import { Analytics } from "@vercel/analytics/next"
import { Analytics } from "@vercel/analytics/react"

// Import all icons
import noCommissionIcon from "@/assets/no-commission-icon.png";
import automationIcon from "@/assets/automation-icon.png";
import globalIcon from "@/assets/global-icon.png";
import responsiveIcon from "@/assets/responsive-icon.png";
import securityIcon from "@/assets/security-icon.png";
import speedIcon from "@/assets/speed-icon.png";

// Import mockups
import mockup1 from "@/assets/mockup-1.png";
import mockup2 from "@/assets/mockup-2.png";
import mockup3 from "@/assets/mockup-3.png";

const Index = () => {
  const whatsappNumber = "56937029093";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const features = [
    {
      icon: noCommissionIcon,
      title: "Sin Comisiones",
      description: "Todos los pagos van directo hacia sus cuentas. No cobramos comisiones por ventas, el dinero es 100% suyo."
    },
    {
      icon: automationIcon,
      title: "Automatización",
      description: "El cliente puede elegir sus tickets o al azar, transfieren y tú como admin aceptas la compra. Todo automatizado."
    },
    {
      icon: globalIcon,
      title: "Funciona en Cualquier País",
      description: "Nuestra plataforma está diseñada para funcionar en cualquier país del mundo con total compatibilidad."
    },
    {
      icon: responsiveIcon,
      title: "Diseño Responsive",
      description: "Completamente adaptado a móviles, tablets y escritorio. Tus clientes pueden comprar desde cualquier dispositivo."
    },
    {
      icon: securityIcon,
      title: "Seguro y Confiable",
      description: "Sistema seguro con verificación de pagos y panel de administración completo para gestionar todas tus rifas."
    },
    {
      icon: speedIcon,
      title: "Rápido y Eficiente",
      description: "Configuración rápida en menos de 24 horas. Comienza a vender tus rifas inmediatamente."
    }
  ];

  const mockupImages = [mockup1, mockup2, mockup3];

  const projects = [
    {
      name: "qmollejaerifa.com",
      url: "https://qmollejaerifa.com/",
      description: "Rifa oficial de Neuro. Plataforma completa con diseño adaptado a móviles, sistema seguro y visualmente atractivo.",
      instagramUrl: "https://www.instagram.com/neuroballesteros93/",
      instagramHandle: "@neuroballesteros93"
    },
    {
      name: "rifashenko.com",
      url: "https://rifashenko.com/",
      description: "Sistema completo de rifas con diseño personalizado, panel de administración y automatización de pagos."
    },
    {
      name: "theshow2001.xyz",
      url: "https://theshow2001.xyz",
      description: "Tercera pagina realizada por mí, incluye TOP 3 personas que más compran tickets."
    },
    {
      name: "alfrejavier.xyz",
      url: "https://alfrejavier.xyz",
      description: "¡Ultimas versiones!"
    },
    {
      name: "www.rifaloshermanos.cl",
      url: "https://rifaloshermanos.cl/",
      description: "Ultimo proyecto con pagina principal y con selector de tickets."
    },
    {
      name: "www.rifalachinita.cl",
      url: "https://rifalachinita.cl/",
      description: "Sistema de descuento aplicado después de seleccionar 10 tickets."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Sistema de <span className="text-primary">Rifas Online</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Plataforma digital desarrollada por <strong className="text-primary">Lino Requena</strong>, 
              estudiante de Ingeniería en Informática. Sistema automatizado para vender tickets de rifas online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                ¡Crear mi sitio de rifas!
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                <span>Desarrollado por <strong className="text-primary">Lino Requena</strong></span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <span>✅ Estudiante de Ingeniería en Informática</span>
              <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
              <span>🚀 Configuración en menos de 24 horas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por qué elegir <span className="text-primary">Rifacil</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plataforma profesional desarrollada por <strong className="text-primary">Lino Requena</strong>, 
              estudiante de Ingeniería en Informática, para maximizar tus ventas y simplificar la gestión de rifas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mockups Section */}
      <MockupShowcase images={mockupImages} />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proyectos en <span className="text-primary">Funcionamiento</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estos son algunos sitios web de rifas que he desarrollado y están actualmente en producción.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                url={project.url}
                description={project.description}
                instagramUrl={project.instagramUrl}
                instagramHandle={project.instagramHandle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¡Hablemos por <span className="text-primary">WhatsApp</span>!
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Contacta directamente a <strong className="text-primary">Lino Requena</strong> y obtén 
              tu plataforma de rifas personalizada desarrollada por un estudiante de Ingeniería en Informática.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chatear Ahora 💬
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Rifacil</span>
          </div>
          <p className="text-muted-foreground">
            Desarrollado con ❤️ por <strong className="text-primary">Lino Requena</strong> - Estudiante de Ingeniería en Informática
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
