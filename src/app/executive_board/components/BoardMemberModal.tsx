"use client";

import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export interface BoardMember {
  name: string;
  position: string;
  degree: string;
  imageSrc: StaticImageData;
  bio: ReactNode;
  linkedin?: string;
  imagePosition?: CSSProperties["objectPosition"];
}

interface BoardMemberModalProps {
  member: BoardMember;
  onClosed: () => void;
}

export default function BoardMemberModal({
  member,
  onClosed,
}: BoardMemberModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const titleId = useId();
  const descriptionId = useId();

  const closeModal = useCallback(() => {
    if (isClosingRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClosed();
      return;
    }

    isClosingRef.current = true;
    setIsClosing(true);
  }, [onClosed]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className={`${
        isClosing ? "board-modal-backdrop-out" : "board-modal-backdrop-in"
      } fixed inset-0 z-50 flex items-center justify-center bg-black p-4`}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
      onAnimationEnd={(event) => {
        if (isClosing && event.target === event.currentTarget) onClosed();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={`${
          isClosing ? "board-modal-panel-out" : "board-modal-panel-in"
        } relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl bg-[#FDF8E8] p-6 pt-16 shadow-xl md:flex-row md:items-start md:pt-6`}
      >
        <div className="mb-6 flex flex-none justify-center md:mb-0 md:mr-6">
          <Image
            src={member.imageSrc}
            alt={`Portrait of ${member.name}`}
            className="h-auto max-h-[55dvh] w-auto max-w-full rounded-xl object-contain shadow-md ring-1 ring-black/10 md:max-h-[calc(100dvh-6rem)]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 id={titleId} className="text-2xl font-bold text-[#861F41]">
            {member.name}
          </h3>
          <p className="mb-4 font-medium text-[#F26645]">{member.degree}</p>
          <div id={descriptionId} className="mb-4 text-gray-700">
            {member.bio}
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#F26645] px-4 py-2 text-white transition hover:bg-[#d94c30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#861F41]"
            >
              View LinkedIn
            </a>
          )}
        </div>

        <button
          type="button"
          aria-label="Close board member details"
          autoFocus
          className="absolute right-3 top-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-black/10 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#861F41]"
          onClick={closeModal}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
