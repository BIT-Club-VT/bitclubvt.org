"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import BoardMemberModal, { type BoardMember } from "./BoardMemberModal";

export interface BoardGroup {
  title: string;
  members: BoardMember[];
}

interface BoardInfoProps {
  groups: BoardGroup[];
}

export default function BoardInfo({ groups }: BoardInfoProps) {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const handleModalClosed = useCallback(() => {
    setSelectedMember(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }, []);

  const groupLayout =
    groups.length > 1
      ? "w-full max-w-7xl lg:grid-cols-2 lg:items-start"
      : "w-fit max-w-full";

  return (
    <section className="flex justify-center bg-[#FDF8E8] px-4 py-20">
      <div className={`grid gap-8 ${groupLayout}`}>
        {groups.map((group) => (
          <div
            key={group.title}
            className="min-w-0 rounded-2xl bg-[#B83A20] p-4 shadow-lg sm:p-6 md:p-8"
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-[#FDF8E8] sm:mb-8 sm:text-3xl md:mb-10 md:text-4xl">
              {group.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {group.members.map((member) => (
                <button
                  key={member.name}
                  type="button"
                  aria-label={`View details for ${member.name}`}
                  className="flex min-w-[240px] max-w-[280px] basis-[240px] flex-grow cursor-pointer flex-col items-center rounded-xl bg-[#FDF8E8] p-4 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#861F41] sm:p-6"
                  onClick={(event) => {
                    lastTriggerRef.current = event.currentTarget;
                    setSelectedMember(member);
                  }}
                >
                  <span className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-[#B83A20] sm:h-32 sm:w-32 md:h-36 md:w-36">
                    <Image
                      src={member.imageSrc}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ objectPosition: member.imagePosition ?? "center" }}
                    />
                  </span>

                  <span className="mt-3 text-center text-base font-semibold text-[#861F41] sm:mt-4 sm:text-lg">
                    {member.name}
                  </span>
                  <span className="text-center text-xs text-[#B83A20] sm:text-sm">
                    {member.position}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <BoardMemberModal
          member={selectedMember}
          onClosed={handleModalClosed}
        />
      )}
    </section>
  );
}
