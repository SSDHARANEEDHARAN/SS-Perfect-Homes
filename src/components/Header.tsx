import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Hammer, PaintBucket, Wrench, Cpu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  onProjectSelect: (project: string) => void;
}

const Header = ({ onProjectSelect }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleAuthAction = () => {
    if (user) {
      signOut().then(() => {
        toast({
          title: "Signed Out",
          description: "You have been successfully signed out."
        });
      });
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">Perfect Home's</h1>
              <p className="text-xs text-muted-foreground">Interiors & Solutions</p>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => navigate("/")} className="text-foreground hover:text-primary transition-colors">Home</button>
            <div className="relative group">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">Projects & Designs</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {[
                    { id: 'wood-work', name: 'Wood Work', icon: Hammer, path: '/works/wood-work' },
                    { id: 'furnished-work', name: 'Furnished Work', icon: PaintBucket, path: '/works/furnished-work' },
                    { id: 'welding-works', name: 'Welding Works', icon: Wrench, path: '/works/welding-works' },
                    { id: 'craft-works', name: 'Craft Works', icon: PaintBucket, path: '/works/craft-works' },
                    { id: 'automation-works', name: 'Automation Works', icon: Cpu },
                  ].map((project) => {
                    const IconComponent = project.icon;
                    return project.path ? (
                      <button
                        key={project.id}
                        onClick={() => navigate(project.path)}
                        className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">{project.name}</span>
                      </button>
                    ) : (
                      <button
                        key={project.id}
                        onClick={() => onProjectSelect(project.id)}
                        className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                        <span className="text-foreground font-medium">{project.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="relative group">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">Services</span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {[
                    { id: 'iot-integration', name: 'IoT Integration', path: '/services/iot-integration' },
                    { id: 'smart-home', name: 'Smart Home Automation', path: '/services/smart-home' },
                    { id: 'automatic-gate', name: 'Automatic Gate', path: '/services/automatic-gate' },
                    { id: 'iot-water', name: 'IoT Water Management', path: '/services/iot-water' },
                  ].map((service) => (
                    <button
                      key={service.id}
                      onClick={() => navigate(service.path)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left"
                    >
                      <Cpu className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={() => navigate("/about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate("/contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </nav>

          {/* Right: Auth Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="cta" 
              size="sm" 
              onClick={handleAuthAction}
              className="flex items-center space-x-2"
            >
              {user ? (
                <>
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </>
              ) : (
                <>
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden space-x-3">
            <ThemeToggle />
            <Button 
              variant="cta" 
              size="sm"
              onClick={handleAuthAction}
              className="flex items-center space-x-1"
            >
              {user ? <LogOut className="w-3 h-3" /> : <User className="w-3 h-3" />}
              <span className="hidden xs:inline">{user ? 'Out' : 'In'}</span>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => navigate("/")} className="text-foreground hover:text-primary transition-colors">Home</button>
              <div className="space-y-2">
                <span className="text-foreground font-medium">Projects & Designs</span>
                <div className="pl-4 space-y-2">
                  {[
                    { id: 'wood-work', name: 'Wood Work', icon: Hammer, path: '/works/wood-work' },
                    { id: 'furnished-work', name: 'Furnished Work', icon: PaintBucket, path: '/works/furnished-work' },
                    { id: 'welding-works', name: 'Welding Works', icon: Wrench, path: '/works/welding-works' },
                    { id: 'craft-works', name: 'Craft Works', icon: PaintBucket, path: '/works/craft-works' },
                    { id: 'automation-works', name: 'Automation Works', icon: Cpu },
                  ].map((project) => {
                    const IconComponent = project.icon;
                    return project.path ? (
                      <button
                        key={project.id}
                        onClick={() => {
                          navigate(project.path);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                      >
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-foreground text-sm">{project.name}</span>
                      </button>
                    ) : (
                      <button
                        key={project.id}
                        onClick={() => {
                          onProjectSelect(project.id);
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                      >
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-foreground text-sm">{project.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-foreground font-medium">Services</span>
                <div className="pl-4 space-y-2">
                  {[
                    { id: 'iot-integration', name: 'IoT Integration', path: '/services/iot-integration' },
                    { id: 'smart-home', name: 'Smart Home Automation', path: '/services/smart-home' },
                    { id: 'automatic-gate', name: 'Automatic Gate', path: '/services/automatic-gate' },
                    { id: 'iot-water', name: 'IoT Water Management', path: '/services/iot-water' },
                  ].map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        navigate(service.path);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/50 transition-colors text-left"
                    >
                      <Cpu className="w-4 h-4 text-primary" />
                      <span className="text-foreground text-sm">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => navigate("/about")} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => navigate("/contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
                <div className="flex flex-col space-y-2 pt-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <Button 
                    variant="cta" 
                    size="sm" 
                    className="w-full flex items-center justify-center space-x-2"
                    onClick={() => {
                      handleAuthAction();
                      setIsMenuOpen(false);
                    }}
                  >
                    {user ? <LogOut className="w-4 h-4" /> : <User className="w-4 h-4" />}
                    <span>{user ? 'Sign Out' : 'Sign In'}</span>
                  </Button>
                </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;