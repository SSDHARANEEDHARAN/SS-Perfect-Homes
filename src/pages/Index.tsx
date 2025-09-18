import { useState } from "react";
import Header from "@/components/Header";
import DashboardHero from "@/components/DashboardHero";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import SideNavigation from "@/components/SideNavigation";
import WorkerEnquiryForm from "@/components/WorkerEnquiryForm";
import WhatsAppEnquiryForm from "@/components/WhatsAppEnquiryForm";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [showWorkerEnquiry, setShowWorkerEnquiry] = useState(false);
  const [showWhatsAppEnquiry, setShowWhatsAppEnquiry] = useState(false);

  const handleProjectSelect = (project: string) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  const handleWorkerEnquiry = () => {
    setShowWorkerEnquiry(true);
  };

  const handleCloseWorkerEnquiry = () => {
    setShowWorkerEnquiry(false);
  };

  const handleWhatsAppEnquiry = () => {
    setShowWhatsAppEnquiry(true);
  };

  const handleCloseWhatsAppEnquiry = () => {
    setShowWhatsAppEnquiry(false);
  };
  return (
    <div className="min-h-screen relative">
      <Header onProjectSelect={handleProjectSelect} />
      
      {/* Side Navigation */}
      <SideNavigation side="left" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={handleWhatsAppEnquiry} />
      <SideNavigation side="right" onWorkerEnquiry={handleWorkerEnquiry} onWhatsAppEnquiry={handleWhatsAppEnquiry} />
      
      {/* Main Content */}
      {selectedProject ? (
        <ProjectGallery 
          projectType={selectedProject} 
          onClose={handleCloseProject} 
        />
      ) : (
        <>
          <main>
            <DashboardHero />
          </main>
          <Footer />
        </>
      )}
      
      {/* Worker Enquiry Form Modal */}
      {showWorkerEnquiry && (
        <WorkerEnquiryForm onClose={handleCloseWorkerEnquiry} />
      )}
      
      {/* WhatsApp Enquiry Form Modal */}
      {showWhatsAppEnquiry && (
        <WhatsAppEnquiryForm onClose={handleCloseWhatsAppEnquiry} />
      )}
    </div>
  );
};

export default Index;
