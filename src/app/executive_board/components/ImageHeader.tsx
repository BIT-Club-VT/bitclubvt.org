interface ImageHeaderProps {
  text: string;
}

export default function ImageHeader({ text }: ImageHeaderProps) {
  return (
    <section className="py-16 bg-[var(--color-paper)] flex justify-center px-4 text-[var(--color-ink)] border-b-8 border-[var(--color-peach)]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-3xl w-full">
        {text}
      </h1>
    </section>
  );
}
