import { ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  name: string;
  url: string;
  description: string;
  instagramUrl?: string;
  instagramHandle?: string;
}

const ProjectCard = ({ name, url, description, instagramUrl, instagramHandle }: ProjectCardProps) => {
  return (
    <div className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
        </div>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            onClick={() => window.open(url, '_blank')}
          >
            Ver Sitio
          </Button>
          
          {instagramUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group/btn"
              onClick={() => window.open(instagramUrl, '_blank')}
            >
              <Instagram className="w-4 h-4 mr-2 group-hover/btn:text-primary transition-colors" />
              {instagramHandle}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;