import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "@/components/QuoteForm";
import Header from "@/components/Header";
import SideNavigation from "@/components/SideNavigation";
import WorkerEnquiryForm from "@/components/WorkerEnquiryForm";

// Import furnished work images
import furnishedWork1 from "@/assets/furnished-work-1.jpg";
import furnishedWork2 from "@/assets/furnished-work-2.jpg";
import furnishedWork3 from "@/assets/furnished-work-3.jpg";
import furnishedWork4 from "@/assets/furnished-work-4.jpg";
import furnishedWork5 from "@/assets/furnished-work-5.jpg";
import furnishedWork6 from "@/assets/furnished-work-6.jpg";
import furnishedWork7 from "@/assets/furnished-work-7.jpg";
import furnishedWork8 from "@/assets/furnished-work-8.jpg";
import furnishedWork9 from "@/assets/furnished-work-9.jpg";
import furnishedWork10 from "@/assets/furnished-work-10.jpg";
import furnishedWork11 from "@/assets/furnished-work-11.jpg";
import furnishedWork12 from "@/assets/furnished-work-12.jpg";
import furnishedWork13 from "@/assets/furnished-work-13.jpg";
import furnishedWork14 from "@/assets/furnished-work-14.jpg";
import furnishedWork15 from "@/assets/furnished-work-15.jpg";
import furnishedWork16 from "@/assets/furnished-work-16.jpg";
import furnishedWork17 from "@/assets/furnished-work-17.jpg";
import furnishedWork18 from "@/assets/furnished-work-18.jpg";
import furnishedWork19 from "@/assets/furnished-work-19.jpg";
import furnishedWork20 from "@/assets/furnished-work-20.jpg";

interface FurnishedWorkItem {
  id: string;
  title: string;
  image: string;
  furniture: string;
  dimensions: string;
  overallSize: string;
  price: string;
  description: string;
}

const FurnishedWorkPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState<FurnishedWorkItem | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showWorkerEnquiry, setShowWorkerEnquiry] = useState(false);
  const itemsPerPage = 8;

  const handleProjectSelect = (project: string) => {
    // Handle project selection if needed
  };

  const handleWorkerEnquiry = () => {
    setShowWorkerEnquiry(true);
  };

  const handleCloseWorkerEnquiry = () => {
    setShowWorkerEnquiry(false);
  };

  const furnishedWorkItems: FurnishedWorkItem[] = [
    {
      id: "fur-001",
      title: "Luxury Living Room",
      image: furnishedWork1,
      furniture: "Leather Sofa Set + Coffee Table",
      dimensions: "144\" x 96\" x 36\"",
      overallSize: "12' x 8' x 3'",
      price: "$3,500 - $5,000",
      description: "Complete living room with premium leather furniture and elegant interior design."
    },
    {
      id: "fur-002",
      title: "Modern Master Bedroom",
      image: furnishedWork2,
      furniture: "King Bed + Wardrobe + Nightstands",
      dimensions: "168\" x 144\" x 96\"",
      overallSize: "14' x 12' x 8'",
      price: "$2,800 - $4,200",
      description: "Contemporary bedroom suite with king-size bed and elegant furnishing."
    },
    {
      id: "fur-003",
      title: "Executive Office Setup",
      image: furnishedWork3,
      furniture: "Executive Desk + Chairs + Storage",
      dimensions: "120\" x 96\" x 84\"",
      overallSize: "10' x 8' x 7'",
      price: "$2,200 - $3,200",
      description: "Professional workspace with executive furniture and modern office setup."
    },
    {
      id: "fur-004",
      title: "Elegant Dining Room",
      image: furnishedWork4,
      furniture: "Dining Table + 6 Chairs + Sideboard",
      dimensions: "144\" x 120\" x 84\"",
      overallSize: "12' x 10' x 7'",
      price: "$2,500 - $3,500",
      description: "Traditional dining set with wooden table and elegant furnishing style."
    },
    {
      id: "fur-005",
      title: "Modern Kitchen Setup",
      image: furnishedWork5,
      furniture: "Island + Bar Stools + Appliances",
      dimensions: "192\" x 144\" x 96\"",
      overallSize: "16' x 12' x 8'",
      price: "$4,500 - $6,500",
      description: "Complete kitchen with island, modern appliances and sleek design."
    },
    {
      id: "fur-006",
      title: "Study Room Package",
      image: furnishedWork6,
      furniture: "Study Table + Bookshelf + Chair",
      dimensions: "96\" x 72\" x 84\"",
      overallSize: "8' x 6' x 7'",
      price: "$1,200 - $1,800",
      description: "Academic workspace with organized furnishing and comfortable seating."
    },
    {
      id: "fur-007",
      title: "Kids Bedroom Set",
      image: furnishedWork7,
      furniture: "Bunk Bed + Study Desk + Storage",
      dimensions: "120\" x 96\" x 84\"",
      overallSize: "10' x 8' x 7'",
      price: "$1,800 - $2,500",
      description: "Colorful children's room with kid-friendly furniture and playful design."
    },
    {
      id: "fur-008",
      title: "Guest Room Package",
      image: furnishedWork8,
      furniture: "Bed + Dresser + Seating Area",
      dimensions: "120\" x 108\" x 84\"",
      overallSize: "10' x 9' x 7'",
      price: "$1,500 - $2,200",
      description: "Comfortable guest room with hospitality furniture and welcoming atmosphere."
    },
    {
      id: "fur-009",
      title: "Outdoor Balcony Setup",
      image: furnishedWork9,
      furniture: "Outdoor Furniture + Plants + Seating",
      dimensions: "96\" x 72\" x 36\"",
      overallSize: "8' x 6' x 3'",
      price: "$800 - $1,200",
      description: "Furnished balcony with weather-resistant furniture and relaxation space."
    },
    {
      id: "fur-010",
      title: "Home Theater Room",
      image: furnishedWork10,
      furniture: "Recliners + Entertainment Center + Sound",
      dimensions: "192\" x 144\" x 96\"",
      overallSize: "16' x 12' x 8'",
      price: "$3,500 - $5,500",
      description: "Luxury home theater with reclining chairs and surround sound system."
    },
    {
      id: "fur-011",
      title: "Spa Bathroom Suite",
      image: furnishedWork11,
      furniture: "Vanity + Mirror Cabinet + Storage",
      dimensions: "96\" x 72\" x 84\"",
      overallSize: "8' x 6' x 7'",
      price: "$1,800 - $2,800",
      description: "Modern bathroom with spa-like furnishing and elegant design."
    },
    {
      id: "fur-012",
      title: "Walk-in Closet System",
      image: furnishedWork12,
      furniture: "Wardrobes + Shoe Racks + Storage",
      dimensions: "120\" x 96\" x 96\"",
      overallSize: "10' x 8' x 8'",
      price: "$2,200 - $3,200",
      description: "Luxury closet with organized storage solutions and premium furnishing."
    },
    {
      id: "fur-013",
      title: "Home Gym Setup",
      image: furnishedWork13,
      furniture: "Exercise Equipment + Mirrors + Storage",
      dimensions: "192\" x 144\" x 96\"",
      overallSize: "16' x 12' x 8'",
      price: "$2,800 - $4,200",
      description: "Complete home fitness setup with equipment and athletic furnishing."
    },
    {
      id: "fur-014",
      title: "Library Room Package",
      image: furnishedWork14,
      furniture: "Built-in Bookcases + Reading Chair + Desk",
      dimensions: "144\" x 120\" x 96\"",
      overallSize: "12' x 10' x 8'",
      price: "$2,500 - $3,500",
      description: "Scholarly library with built-in furniture and intellectual atmosphere."
    },
    {
      id: "fur-015",
      title: "Game Room Setup",
      image: furnishedWork15,
      furniture: "Pool Table + Bar Area + Entertainment",
      dimensions: "192\" x 144\" x 96\"",
      overallSize: "16' x 12' x 8'",
      price: "$3,200 - $4,800",
      description: "Recreational game room with entertainment furniture and fun atmosphere."
    },
    {
      id: "fur-016",
      title: "Laundry Room Package",
      image: furnishedWork16,
      furniture: "Washing Machines + Storage + Folding Table",
      dimensions: "96\" x 72\" x 84\"",
      overallSize: "8' x 6' x 7'",
      price: "$1,200 - $1,800",
      description: "Organized laundry room with utility furniture and efficient storage."
    },
    {
      id: "fur-017",
      title: "Sunroom Package",
      image: furnishedWork17,
      furniture: "Comfortable Seating + Plants + Glass Table",
      dimensions: "144\" x 120\" x 96\"",
      overallSize: "12' x 10' x 8'",
      price: "$1,800 - $2,800",
      description: "Natural light sunroom with garden furniture and plant arrangements."
    },
    {
      id: "fur-018",
      title: "Basement Living Setup",
      image: furnishedWork18,
      furniture: "Sectional Sofa + Entertainment Center",
      dimensions: "192\" x 144\" x 84\"",
      overallSize: "16' x 12' x 7'",
      price: "$2,500 - $3,500",
      description: "Cozy basement furniture for underground living and entertainment space."
    },
    {
      id: "fur-019",
      title: "Attic Room Package",
      image: furnishedWork19,
      furniture: "Sloped Ceiling Furniture + Storage",
      dimensions: "144\" x 120\" x 72\"",
      overallSize: "12' x 10' x 6'",
      price: "$1,500 - $2,200",
      description: "Creative attic space with custom furniture for sloped ceiling design."
    },
    {
      id: "fur-020",
      title: "Patio Dining Setup",
      image: furnishedWork20,
      furniture: "Dining Set + Lounge Furniture + Umbrella",
      dimensions: "144\" x 120\" x 96\"",
      overallSize: "12' x 10' x 8'",
      price: "$1,200 - $1,800",
      description: "Outdoor living furnishing with dining set and garden party setup."
    }
  ];

  const totalPages = Math.ceil(furnishedWorkItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = furnishedWorkItems.slice(startIndex, startIndex + itemsPerPage);

  const handleGetQuote = (item: FurnishedWorkItem) => {
    setSelectedItem(item);
    setShowQuoteForm(true);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      {/* Side Navigation */}
      <SideNavigation side="left" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={() => {}} />
      <SideNavigation side="right" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={() => {}} />

      {/* Header */}
      <div className="bg-primary/10 border-b mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Furnished Works</h1>
                <p className="text-muted-foreground">Complete furniture packages and interior solutions</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Catalog</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <p><span className="font-medium">Furniture:</span> {item.furniture}</p>
                  <p><span className="font-medium">Dimensions:</span> {item.dimensions}</p>
                  <p><span className="font-medium">Overall Size:</span> {item.overallSize}</p>
                  <p><span className="font-medium text-primary">Price:</span> {item.price}</p>
                </div>
                <p className="text-sm mb-4">{item.description}</p>
                <Button 
                  onClick={() => handleGetQuote(item)}
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Worker Enquiry Form Modal */}
      {showWorkerEnquiry && (
        <WorkerEnquiryForm onClose={handleCloseWorkerEnquiry} />
      )}

      {/* Quote Form Modal */}
      {showQuoteForm && selectedItem && (
        <QuoteForm
          title={`Quote for ${selectedItem.title}`}
          description={`${selectedItem.furniture} • ${selectedItem.dimensions} • ${selectedItem.price}`}
          onClose={() => {
            setShowQuoteForm(false);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
};

export default FurnishedWorkPage;