
import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import type { Metadata } from 'next';
import ResourceBox from "@/app/components/ResourceBox";
import ResourceHero from "@/app/components/ResourceHero";

export const metadata: Metadata = {
  title: "BIT-CMA Resources",
}

export default function BITCMAResources() {
  const bitCMAcertifications = [
    {
      title: "CompTIA Security+",
      description: "Validates foundational cybersecurity skills and best practices for securing networks and systems.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/comptia_security+.svg",
      buttonText: "CompTIA Security+",
      buttonLink: "https://www.comptia.org/en-us/certifications/security/",
    },
    {
      title: "ISC2",
      description: "Demonstrates entry-level knowledge in security principles, risk management, and network security.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/isc2.png",
      buttonText: "ISC2",
      buttonLink: "https://www.isc2.org/landing/1mcc",
    },
    {
      title: "Certified Ethical Hacker",
      description: "Focuses on identifying and exploiting system vulnerabilities to strengthen organizational security.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/certified_ethical_hacker.png",
      buttonText: "Certified Ethical Hacker",
      buttonLink: "https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh-v13-north-america/",
    },
    {
      title: "Cisco Certified Network Associate",
      description: "Confirms essential networking skills in configuring, managing, and troubleshooting Cisco-based networks",
      imageSrc: "/main_logos_and_assets/logos/other_logos/cisco_ccna.png",
      buttonText: "Cisco Certified Network Associate",
      buttonLink: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
    },
    {
      title: "AWS Certified Security - Specialty",
      description: "Proves advanced expertise in securing cloud environments and applications on the AWS platform.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/aws_certified_security_specialty.png",
      buttonText: "AWS Certified Security - Specialty",
      buttonLink: "https://aws.amazon.com/certification/certified-security-specialty/",
    },
  ];
  const careerRoadMap = [
    {
      title: "Security Certification Roadmap",
      description: "Lets you explore which certifications to take in the future.",
      imageSrc: "/main_logos_and_assets/assets/security_certification_roadmap.png",
      buttonText: "Certification Roadmap",
      buttonLink: "https://pauljerimy.com/security-certification-roadmap/",
    },
    {
      title: "Cyberseek Career Pathway",
      description: "Lets you explore various careers within cybersecurity.",
      imageSrc: "/main_logos_and_assets/assets/cyberseek_home.png",
      buttonText: "Cyberseek Career Pathway",
      buttonLink: "https://www.cyberseek.org/pathway.html",
    },
  ];
  const otherResources = [
    {
      title: "Professor Messer",
      description: "Professor Messer is a YouTuber who publishes helpful study and educational content for CompTIA certs and other cybersecurity topics.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/professor_messer_logo.png",
      buttonText: "View Professor Messer's Channel",
      buttonLink: "https://www.youtube.com/user/professormesser",
    },
    {
      title: "HackTheBox",
      description: "HackTheBox is a website that allows you to grow your cybersecurity knowledge by competing in CTFs and other real-world exercises.",
      imageSrc: "/main_logos_and_assets/assets/hackthebox_resized.webp",
      buttonText: "HackTheBox",
      buttonLink: "https://www.hackthebox.com/",
    },
    {
      title: "TryHackMe",
      description: "TryHackMe is a website that offers several cybersecurity-related modules where you can learn important concepts and practice by completing real-world tasks.",
      imageSrc: "/main_logos_and_assets/assets/tryhackme_resized.webp",
      buttonText: "TryHackMe",
      buttonLink: "https://tryhackme.com/",
    },
    {
      title: "ISSA",
      description: "ISSA, or the Information Systems Security Association, is an association of professionals in the Information Security Industry. They have chapters worldwide, including some across Virginia.",
      imageSrc: "/main_logos_and_assets/logos/other_logos/issa_logo.webp",
      buttonText: "ISSA",
      buttonLink: "https://issa.org/",
    },
    //{
      //title: "Sample Card",
      //description: "_____",
      //imageSrc: "/main_logos_and_assets/assets/tryhackme_resized.webp",
      //buttonText: "____",
      //buttonLink: "https://______",
    //},
  ];

  return (
    <main>
      <Navbar />
      <ResourceHero heroHeader="Want to level up your knowledge?"heroSubText="Go study for these certifications!" showSecondText={true} />
      <ResourceBox title="Certifications for BIT-CMA majors " resources={bitCMAcertifications} />
      <ResourceHero heroHeader="Curious about different career paths within cybersecurity?" heroSubText="Visit the career roadmaps below!"/>
      <ResourceBox title="Career Roadmaps" resources={careerRoadMap} />
      <ResourceHero heroHeader="Other resources" heroSubText="A collection of various other resources to help you along your career journey."/>
      <ResourceBox title="Other Resources" resources={otherResources} />
      <Footer />
    </main>
  );
}