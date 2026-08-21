
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from 'next';
import ResourceBox from "@/app/components/ResourceBox";
import ResourceHero from "@/app/components/ResourceHero";

export const metadata: Metadata = {
  title: "BIT-OSM Resources",
}

export default function BITOSMResources() {
  const bitOSMcertifications = [
    {
      title: "Certified Supply Chain Professional (CSCP)",
      description: "A globally recognized credential by Association for Supply Chain Management (ASCM) that covers end-to-end supply chain management.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/cscp_logo.png",
      buttonText: "CSCP",
      buttonLink: "https://www.ascm.org/learning-development/certifications-credentials/cscp/#why-cscp",
    },
    {
      title: "Certified Professional in Supply Management (CPSM)",
      description: "A globally recognized certification by ISM that validates advanced knowledge in procurement, sourcing, and strategic supply management.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/cpsm_logo.png",
      buttonText: "CPSM",
      buttonLink: "https://www.ismworld.org/certification-and-training/certification/cpsm/",
    },
    {
      title: "Certified in Production and Inventory Management (CPIM)",
      description: "An APICS certification that demonstrates expertise in production planning, inventory control, and supply chain operations.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/cpim_logo.png",
      buttonText: "CPIM",
      buttonLink: "https://www.symix.bg/products-services/ascm-apics-certification-programs/apics-cpim/",
    },
  ];
  const careerRoadMap = [
    {
      title: "Supply Chain Management Careers",
      description: "Check out this article that outlines careers in supply chain management, as well as other related industries!",
      imageSrc: "/main_logos_and_assets/assets/supplychainmanagementcareers.png",
      buttonText: "Certification Roadmap",
      buttonLink: "https://www.ascm.org/ascm-insights/supply-chain-management-career-path/",
    },
    {
      title: "A Guide to Supply Chain Career Paths",
      description: "Check out this article that not only outlines careers within supply chain management, but also necessary skills to succeed within the field!",
      imageSrc: "/main_logos_and_assets/assets/careersinscm.png",
      buttonText: "A Guide to Supply Chain Career Paths",
      buttonLink: "https://scs.georgetown.edu/news-and-events/article/8763/careers-in-supply-chain-management",
    },
  ];
  const otherResources = [
    {
      title: "Council of Supply Chain Management Professionals (CSCMP)",
      description: "An international association that connects supply chain professionals and provides resources, certifications, and industry research to enhance logistics and operations excellence.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/cscmp_logo.png",
      buttonText: "CSCMP",
      buttonLink: "https://cscmp.org/",
    },
    {
      title: "Institute for Supply Management (ISM)",
      description: "A leading professional organization providing education, research, and certifications to advance the field of procurement and supply management.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/ism_logo.png",
      buttonText: "ISM",
      buttonLink: "https://www.ismworld.org/",
    },
    {
      title: "Let's Talk Supply Chain Podcast",
      description: "Listen to the Let's Talk Supply Chain Podcast, hosted by Sarah Barnes-Humphrey, where she brings on industry experts to discuss various SCM-related topics.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/lets_talk_supply_chain.png",
      buttonText: "Let's Talk Supply Chain",
      buttonLink: "https://letstalksupplychain.com/",
    },
  ];

  return (
    <main>
      <Navbar />
      <ResourceHero heroHeader="Want to level up your knowledge?"heroSubText="Go study for these certifications!" showSecondText={true} />
      <ResourceBox title="Certifications for BIT-OSM majors " resources={bitOSMcertifications} />
      <ResourceHero heroHeader="Curious about different career paths within operations & supply chain management?" heroSubText="Visit the career roadmaps below!"/>
      <ResourceBox title="Career Roadmaps" resources={careerRoadMap} />
      <ResourceHero heroHeader="Other resources" heroSubText="A collection of various other resources to help you along your career journey."/>
      <ResourceBox title="Other Resources" resources={otherResources} />
      <Footer />
    </main>
  );
}