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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    titleRef.current?.focus({ preventScroll: true });

    if (panelRef.current) {
      panelRef.current.scrollTop = 0;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className={`${
        isClosing ? "board-modal-backdrop-out" : "board-modal-backdrop-in"
      } fixed inset-0 z-50 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-[var(--color-overlay)] p-0 backdrop:bg-transparent`}
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      onAnimationEnd={(event) => {
        if (isClosing && event.target === event.currentTarget) onClosed();
      }}
    >
      <div
        className="flex h-full w-full items-center justify-center p-4"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
      >
        <div
          ref={panelRef}
          className={`${
            isClosing ? "board-modal-panel-out" : "board-modal-panel-in"
          } relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl bg-[var(--color-paper)] p-6 pt-16 text-[var(--color-ink)] shadow-xl md:flex-row md:items-start md:pt-6`}
        >
          <div className="mx-auto mb-6 flex w-full max-w-xs flex-none justify-center md:mx-0 md:mb-0 md:mr-6 md:w-72">
            <Image
              src={member.imageSrc}
              alt={`Portrait of ${member.name}`}
              className="h-auto max-h-[55dvh] w-auto max-w-full rounded-xl object-contain shadow-md ring-1 ring-[var(--color-image-ring)] md:max-h-[calc(100dvh-6rem)]"
              sizes="(min-width: 768px) 288px, min(320px, calc(100vw - 5rem))"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              ref={titleRef}
              id={titleId}
              tabIndex={-1}
              className="text-2xl font-bold text-[var(--color-coral-deep)] focus:outline-none"
            >
              {member.name}
            </h3>
            <p className="mb-4 font-medium text-[var(--color-teal-deep)]">{member.degree}</p>
            <div id={descriptionId} className="mb-4 text-[var(--color-ink)]">
              {member.bio}
            </div>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[var(--color-coral)] px-4 py-2 font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-orange)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
              >
                View LinkedIn
              </a>
            )}
          </div>

          <button
            type="button"
            aria-label="Close board member details"
            className="absolute right-3 top-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-[var(--color-teal-deep)] transition-colors hover:bg-[var(--color-peach)] hover:text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-teal-deep)]"
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
    </dialog>
  );
}
