import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarOne from "./Topbar/NavbarOne";
import LandingPageThree from "./LandingPages/LandingPageThree";
import ContactPage from "./components/ContactPage";
import AboutSection from "./components/AboutSection";
import ServicesPage from "./components/Servicespage";
import ForIndividualsPage from "./components/ForIndividualsPage";
import ForOrganizationsPage from "./components/ForOrganizationsPage";
import GetStarted from "./components/GetStarted";
import FaqSection from "./components/FaqSection";
import BlogFive from "./BlogFive/BlogFive";
import Testimonials from "./components/Testimonials";
import BlogComp1 from "./BlogFive/BlogPages/BlogComp1";
import BlogComp3 from "./BlogFive/BlogPages/BlogComp3";
import BlogComp2 from "./BlogFive/BlogPages/BlogComp2";
import AllBlogs from "./BlogFive/AllBlogs";
import FoundersSection from "./components/FounderSection";

const App = () => {
  return (
    <Router>
      <div id='App.jsx Big Div' className="flex-grow bg-black">
      {/* // style={{ backgroundImage: `url(${})`, backgroundSize: 'cover' }}> */}
        <NavbarOne />
        <Routes>
        <Route path="/" element={<LandingPageThree />} />
          <Route path="/services" element={<ServicesPage />} />
            <Route path="/for-individuals" element={<ForIndividualsPage/>}/>
            <Route path="/for-organizations" element={<ForOrganizationsPage/>}/>
          <Route path="/about" element={<AboutSection />} />
            <Route path="/contact-us" element={<ContactPage/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/getstarted" element={<GetStarted/>}/>
            <Route path="/faqs" element={<FaqSection/>}/>
          <Route path="/blog" element={<BlogFive/>}/>
            <Route path="/allblogs" element={<AllBlogs/>}/>
            <Route path="/blogone" element={<BlogComp1/>}/>
            <Route path="/blogtwo" element={<BlogComp2/>}/>
            <Route path="/blogthree" element={<BlogComp3/>}/>
            <Route path="/founder" element={<FoundersSection/>}/>
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
