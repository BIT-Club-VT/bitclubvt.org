
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from 'next';
import ResourceBox from "@/app/components/ResourceBox";
import ResourceHero from "@/app/components/ResourceHero";

export const metadata: Metadata = {
  title: "BIT-DSS Resources",
}

export default function BITDSSResources() {
  const bitDSScertifications = [
    {
      title: "Microsoft Certified: Power BI Data Analyst Associate",
      description: "Validates your ability to prepare, model, visualize, and analyze data using Microsoft Power BI to drive business insights.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/microsoft_powerbi_certified.svg",
      buttonText: "Power BI Certification",
      buttonLink: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/",
    },
    {
      title: "Tableau Desktop Certified Associate",
      description: "Demonstrates proficiency in building interactive dashboards, analyzing data, and applying best practices in Tableau Desktop.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/tableau_certified_associate_logo.png",
      buttonText: "Tableau Desktop Certified Associate",
      buttonLink: "https://www.tableau.com/learn/certification/desktop-certified-associate",
    },
    {
      title: "Certified Data Management Professional",
      description: "Recognizes expertise in data governance, data quality, and database management based on globally accepted data management standards.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/dama_cdmp_logo.png",
      buttonText: "Certified Data Management Professional",
      buttonLink: "https://dama.org/certification/about-cdmp-certification/",
    },
    {
      title: "Six Sigma Green Belt",
      description: "Six Sigma Green Belt is a certification that equips professionals to lead process improvements initiatives and help improve efficiency.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/sigma_greenbelt_badge.webp",
      buttonText: "Six Sigma Green Belt",
      buttonLink: "https://www.sixsigmacouncil.org/six-sigma-green-belt-certification/",
    },
  ];
  const careerRoadMap = [
    {
      title: "Data Analyst Roadmap",
      description: "This roadmap outlines the necessary skills/roles to become a data analyst.",
      imageSrc: "/main_logos_and_assets/assets/dataanalyst_roadmap.png",
      buttonText: "Data Analyst Roadmap",
      buttonLink: "https://roadmap.sh/data-analyst",
    },
  ];
  const otherResources = [
    {
      title: "LinkedIn Learning: Become a Data Analyst",
      description: "This course on LinkedIn Learning outlines the career of a data analyst and helps you explore this field. NOTE: VT students can get LinkedIn Learning for free.",
      imageSrc: "/main_logos_and_assets/assets/ll_dataanalyst.png",
      buttonText: "Becoming a Data Analyst",
      buttonLink: "https://www.linkedin.com/learning/paths/become-a-data-analyst",
    },
    {
      title: "Microsoft Data Analytics",
      description: "This mini-course explores the role in data analysis and describes how to use software such as Power BI.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/microsoft_da_logo.png",
      buttonText: "Microsoft Data Analytics",
      buttonLink: "https://learn.microsoft.com/en-us/training/paths/data-analytics-microsoft/",
    },
    {
      title: "Alex the Analyst",
      description: "Alex the Analyst is a YouTuber who publishes content related to breaking into the field of data analytics/DSS and other helpful industry insights.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/alextheanalyst_logo.png",
      buttonText: "Alex the Analyst",
      buttonLink: "https://www.youtube.com/@AlexTheAnalyst",
    },
  ];

  return (
    <main>
      <Navbar />
      <ResourceHero heroHeader="Want to level up your knowledge?"heroSubText="Go study for these certifications!" showSecondText={true} />
      <ResourceBox title="Certifications for BIT-DSS majors " resources={bitDSScertifications} />
      <ResourceHero heroHeader="Curious about different career paths within decision support systems?" heroSubText="Visit the career roadmaps below!"/>
      <ResourceBox title="Career Roadmaps" resources={careerRoadMap} />
      <ResourceHero heroHeader="Other resources" heroSubText="A collection of various other resources to help you along your career journey."/>
      <ResourceBox title="Other Resources" resources={otherResources} />
      <Footer />
    </main>
  );
}