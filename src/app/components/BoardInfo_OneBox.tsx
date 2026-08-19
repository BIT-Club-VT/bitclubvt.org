"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

interface ExecMember {
  name: string;
  position: string;
  imageSrc: string;
  bio: ReactNode;
  degree: string;
  linkedin?: string;
}

interface ExecCommitteeProps {
  title: string;
  members: ExecMember[];
}

export default function ExecCommittee({ title, members }: ExecCommitteeProps) {
  const [selected, setSelected] = useState<ExecMember | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section className="py-20 bg-[#FdF8E8] flex justify-center">
      <div className="bg-[#F26645] rounded-2xl shadow-lg p-8 w-fit max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#861F41]">
          {title}
        </h2>

        {/* Member Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-[#FdF8E8] rounded-xl shadow-md p-6 flex flex-col items-center w-72"
            >
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={200}
                height={200}
                className="w-36 h-36 object-cover rounded-full border-4 border-[#F26645] cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelected(member)}
              />
              <h4 className="mt-4 text-lg font-semibold text-[#861F41] text-center">
                {member.name}
              </h4>
              <p className="text-sm text-[#F26645] text-center">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-[#FdF8E8] rounded-2xl shadow-xl max-w-3xl w-full max-h-[calc(100dvh-2rem)] overflow-y-auto flex flex-col md:flex-row p-6 relative pt-12 md:pt-6"
            onClick={(e) => e.stopPropagation()} // prevent closing modal when clicking inside
          >
            <div className="flex-shrink-0 md:mr-6 mb-4 md:mb-0 flex justify-center">
              <Image
                src={selected.imageSrc}
                alt={selected.name}
                width={300}
                height={300}
                className="w-auto max-w-full max-h-[40vh] md:max-h-[70vh] object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Bio */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#861F41]">
                {selected.name}
              </h3>
              <p className="text-[#F26645] font-medium mb-4">
                {selected.degree}
              </p>
              <p className="text-gray-700 mb-4">{selected.bio}</p>
              {selected.linkedin && (
                <a
                  href={selected.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#F26645] text-white px-4 py-2 rounded-lg hover:bg-[#d94c30] transition"
                >
                  View LinkedIn
                </a>
              )}
            </div>

            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-3xl font-bold"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
