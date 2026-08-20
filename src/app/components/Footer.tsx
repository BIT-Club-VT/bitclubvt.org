// Signifies the end of the site, and displays some quick links that users can access

"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faLinkedin, faLinktree } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#2F6D78] text-white py-8 relative overflow-hidden">
      <div
      className={`max-w-7xl mx-auto text-center transition-all duration-3000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* TEXT ABOVE ICONS */}
        <p
          className="text-2xl sm:text-3xl md:text-4xl mb-8"
          style={{ fontFamily: "var(--font-encode-sans-condensed), sans-serif" }}
        >
          Check out our links below!
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-4xl sm:text-5xl md:text-6xl">
          {/* START OF ICONS */}
          <a href="mailto:virginiatechbitclub@gmail.com" aria-label="Email" className="hover:text-white/70 transition-colors duration-600">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://discord.com/invite/Z7gn4wYxsQ" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-white/70 transition-colors duration-600">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://www.instagram.com/bitclubvt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white/70 transition-colors duration-600">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/bitclubvt/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white/70 transition-colors duration-600">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://linktr.ee/vtbitclub/" target="_blank" rel="noopener noreferrer" aria-label="Linktree" className="hover:text-white/70 transition-colors duration-600">
            <FontAwesomeIcon icon={faLinktree} />
          </a>

          {/* GroupMe Image (since an icon doesn't exist) --- may remove this in future but will include for now*/}
          <a
            href="https://groupme.com/join_group/88523144/4IcPmpKS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GroupMe"
            className="hover:opacity-80 transition duration-300"
          >
            <div className="flex justify-center items-center">
              <Image
                src="/main_logos_and_assets/logos/other_logos/groupme_logo_transparent.png"
                alt="GroupMe"
                width={60}
                height={40}
                className="object-contain w-9 sm:w-10 md:w-14 h-auto"
              />
            </div>
          </a>
          {/* GobblerConnect Image (since an icon doesn't exist)*/}
          <a href="https://gobblerconnect.vt.edu/organization/bitclub" target="_blank" rel="noopener noreferrer" aria-label="GobblerConnect" className="hover:opacity-80 transition duration-300">
            <div className="flex justify-center items-center">
              <Image
                src="/main_logos_and_assets/logos/other_logos/gobblerconnect_logo_transparent.png"
                alt="GobblerConnect"
                width={300}
                height={35}
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
