// Allows users to navigate through the site, and displays the site logo

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // Dropdown toggle
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && isOpen) {
        const focusableElements = Array.from(
          mobileMenuRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])',
          ) ?? [],
        ).filter((element) => element.tabIndex >= 0);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }

      if (event.key !== "Escape") return;

      if (isResourcesOpen) {
        setIsResourcesOpen(false);
      } else if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isResourcesOpen]);

  useEffect(() => {
    if (!isResourcesOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isResourcesOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Executive Board", href: "/executive_board" },
    { name: "Events", href: "/events" },
    { name: "Dues & Membership", href: "/dues_and_membership" },
    // { name: "Campus Events", href: "/club_feed" },

  ];

  const resourceLinks = [
    { name: "General Resources", href: "/resources/general_resources" },
    { name: "BIT CMA Resources", href: "/resources/bit_cma_resources" },
    { name: "BIT DSS Resources", href: "/resources/bit_dss_resources" },
    { name: "BIT OSM Resources", href: "/resources/bit_osm_resources" },
  ];

  return (
    <nav
      ref={navRef}
      aria-label="Primary navigation"
      className="bg-[var(--color-teal-deep)] py-2 px-4 md:px-8 sticky top-0 z-50"
    >
      {/* MENU FOR DESKTOP LAYOUTS */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="hidden md:flex space-x-6 text-lg sm:text-xl items-center font-normal relative">
          {/* Regular links */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
              aria-current={pathname === link.href ? "page" : undefined}
              className="relative text-[var(--color-on-dark)] hover:text-[var(--color-peach)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)] transition-colors duration-300"
            >
              {link.name}
              {pathname === link.href && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-[var(--color-on-dark)]"
                ></span>
              )}
            </Link>
          ))}

          {/* RESOURCES DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={isResourcesOpen}
              aria-controls="desktop-resources-menu"
              aria-haspopup="true"
              onClick={() => setIsResourcesOpen((open) => !open)}
              className="text-[var(--color-on-dark)] hover:text-[var(--color-peach)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)] transition-colors duration-300 flex items-center"
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
            >
              Resources{" "}
              <span aria-hidden="true" className="ml-1 text-3xl"> {/* The text-3xl modifies the size of the triangles used in the dropdowns */}
                {isResourcesOpen ? "▾" : "▸"}
              </span>
            </button>

            {/* ACTUAL DROPDOWN MENU */}
            {isResourcesOpen && (
              <div
                id="desktop-resources-menu"
                className="absolute left-0 mt-2 w-56 bg-[var(--color-paper)] rounded-lg shadow-lg border border-[var(--color-teal)] py-2 z-50"
                onMouseLeave={() => setIsResourcesOpen(false)} // optional: close on hover leave
              >
                {resourceLinks.map((res) => (
                  <Link
                    key={res.href}
                    href={res.href}
                    onClick={() => setIsResourcesOpen(false)} // closes when link clicked
                    aria-current={pathname === res.href ? "page" : undefined}
                    className="block px-4 py-2 text-[var(--color-ink)] hover:bg-[var(--color-peach)] focus-visible:bg-[var(--color-peach)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-teal-deep)] transition-colors duration-200"
                    style={{
                      fontFamily:
                        "var(--font-encode-sans-condensed), sans-serif",
                    }}
                  >
                    {res.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MENU ICON FOR MOBILE LAYOUTS */}
        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          className="md:hidden text-[var(--color-on-dark)] text-2xl cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)]"
          onClick={() => setIsOpen(true)}
        >
          <FaBars aria-hidden="true" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        id="mobile-navigation-menu"
        aria-hidden={!isOpen}
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[var(--color-teal-deep)] z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full pointer-events-none"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isOpen ? undefined : -1}
          onClick={() => {
            setIsResourcesOpen(false);
            setIsOpen(false);
          }}
          className="absolute top-4 left-4 text-[var(--color-on-dark)] text-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)]"
        >
          <span aria-hidden="true">✕</span>
        </button>

        <div className="flex flex-col pt-20 px-8 space-y-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              tabIndex={isOpen ? undefined : -1}
              onClick={() => {
                setIsResourcesOpen(false);
                setIsOpen(false);
              }}
              className="text-[var(--color-on-dark)] text-2xl hover:text-[var(--color-peach)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Dropdown */}
          <div>
            <button
              type="button"
              aria-expanded={isResourcesOpen}
              aria-controls="mobile-resources-menu"
              aria-haspopup="true"
              tabIndex={isOpen ? undefined : -1}
              onClick={() => setIsResourcesOpen((open) => !open)}
              className="text-[var(--color-on-dark)] text-2xl flex items-center hover:text-[var(--color-peach)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)] transition-colors duration-300"
              style={{
                fontFamily: "var(--font-encode-sans-condensed), sans-serif",
              }}
            >
              Resources{" "}
              <span aria-hidden="true" className="ml-1 text-lg">
                {isResourcesOpen ? "▾" : "▸"}
              </span>
            </button>

            {isResourcesOpen && (
              <div
                id="mobile-resources-menu"
                className="ml-4 mt-2 flex flex-col space-y-2"
              >
                {resourceLinks.map((res) => (
                  <Link
                    key={res.href}
                    href={res.href}
                    aria-current={pathname === res.href ? "page" : undefined}
                    tabIndex={isOpen ? undefined : -1}
                    onClick={() => {
                      setIsResourcesOpen(false);
                      setIsOpen(false);
                    }}
                    className="text-[var(--color-on-dark)] text-xl hover:text-[var(--color-peach)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-peach)] transition-colors duration-200"
                  >
                    {res.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
