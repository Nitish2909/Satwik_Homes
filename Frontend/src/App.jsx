import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Global Components
import PageTransition from "./components/PageTransition";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import CursorFollower from "./components/CursorFollower";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BuyersGuidePage from "./pages/BuyersGuidePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import NotFound from "./pages/NotFound";
import HospitalityPage from "./pages/OurBusinesses/HospitalityPage";
import ResidentialPage from "./pages/OurBusinesses/ResidentialPage";
import RetailPage from "./pages/OurBusinesses/RetailPage";
import EducationPage from "./pages/OurBusinesses/EducationPage";
import OfficePage from "./pages/OurBusinesses/OfficeSpacePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfServices";
import FacilityManagementPage from "./pages/OurBusinesses/FacilityManagementPage";
import SocialLinks from "./components/Sociallinks";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-light min-h-screen font-body text-gray-900 selection:bg-accent selection:text-primary">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <React.Fragment key="content">
            <CursorFollower />
            <ScrollProgress />
            <Navbar />

            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <HomePage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/properties"
                  element={
                    <PageTransition>
                      <PropertiesPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/properties/:id"
                  element={
                    <PageTransition>
                      <PropertyDetailPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/project/:id"
                  element={
                    <PageTransition>
                      <ProjectDetailPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageTransition>
                      <AboutPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <ContactPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/buyers-guide"
                  element={
                    <PageTransition>
                      <BuyersGuidePage />
                    </PageTransition>
                  }
                />


                <Route
                  path="/our-business/hospitality"
                  element={<HospitalityPage />}
                />
                <Route
                  path="/our-business/residential"
                  element={<ResidentialPage />}
                />
                <Route path="/our-business/retail" element={<RetailPage />} />
                <Route
                  path="/our-business/education"
                  element={<EducationPage />}
                />
                <Route path="/our-business/office-spaces" element={<OfficePage />} />

                <Route path="/our-business/facility-management" element={<FacilityManagementPage />} />

                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                 <Route path="/terms-of-services" element={<TermsOfService />} />

                {/* Catch-all route for non-existent paths */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <SocialLinks/>
            <Footer />
            {/* <BackToTop /> */}
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
