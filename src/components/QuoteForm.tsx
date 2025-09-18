import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface QuoteFormProps {
  title: string;
  description: string;
  onClose: () => void;
}

const QuoteForm = ({ title, description, onClose }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    requirements: "",
    dimensions: "",
    budget: "",
  });

  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoginPrompt(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (showLoginPrompt) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-background rounded-lg shadow-elegant max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Login Required</h3>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              To submit your quote request, please log in with Google first.
            </p>
            <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
              <p className="text-sm text-accent-foreground">
                <strong>Note:</strong> Google authentication requires backend integration. 
                Connect your project to Supabase to enable this feature.
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button variant="cta" className="flex-1" disabled>
                Login with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-elegant max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="e.g., $5,000 - $10,000"
                  value={formData.budget}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Project Address *</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dimensions">Dimensions & Specifications</Label>
              <Textarea
                id="dimensions"
                name="dimensions"
                placeholder="Please provide dimensions, materials preferences, and any specific requirements"
                value={formData.dimensions}
                onChange={handleInputChange}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Project Requirements *</Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="Describe your project in detail..."
                value={formData.requirements}
                onChange={handleInputChange}
                required
                rows={4}
              />
            </div>

            <div className="flex space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" variant="cta" className="flex-1">
                Submit Quote Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;