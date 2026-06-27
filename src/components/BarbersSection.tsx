import { useCarousel } from "~/hooks/useCarousel";
import { BarberCard } from "~/components/BarberCard";
import type { Barber } from "~/components/BarberCard";
import barbersData from "@content/barbers.json";
import site from "@content/site.json";

const barbers = barbersData as Barber[];
const COUNT = barbers.length;
const { label, heading, bookCta } = site.cs.barbers;

// Split heading at last space to wrap the final word in neon span
const headingParts = heading.split(" ");
const headingLast = headingParts.pop() ?? "";
const headingStart = headingParts.join(" ");

// Arrow button component
const Arrow = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label={direction === "left" ? "Předchozí barber" : "Další barber"}
    className="relative z-20 flex items-center justify-center w-12 h-12 shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
    style={{
      border: "2px solid rgba(255,247,0,0.5)",
      background: "rgba(17,19,24,0.7)",
      color: "var(--neon-yellow)",
      boxShadow: "0 0 12px rgba(255,34,0,0.3)",
      backdropFilter: "blur(4px)",
    }}
  >
    {direction === "left" ? (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ) : (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    )}
  </button>
);

// Dot indicator
const Dots = ({
  count,
  active,
  onDot,
}: {
  count: number;
  active: number;
  onDot: (i: number) => void;
}) => (
  <div className="flex items-center gap-3" role="tablist" aria-label="barbers">
    {Array.from({ length: count }, (_, i) => (
      <button
        key={i}
        role="tab"
        aria-selected={i === active}
        aria-label={barbers[i]?.name ?? `barber ${i + 1}`}
        onClick={() => onDot(i)}
        className="transition-all duration-300"
        style={{
          width: i === active ? "28px" : "8px",
          height: "8px",
          background: i === active ? "var(--neon-yellow)" : "rgba(255,247,0,0.3)",
          boxShadow: i === active ? "0 0 8px var(--neon-glow)" : "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transform: "skewX(-8deg)",
        }}
      />
    ))}
  </div>
);

export const BarbersSection = () => {
  // Start with Filas (index 1) centered
  const { activeIndex, prev, next, goTo, getPosition, onDragStart, onDragEnd } = useCarousel(
    COUNT,
    1,
  );

  return (
    <section
      id="barbers"
      className="relative px-6 py-28 md:py-40 border-t border-black/10 overflow-hidden"
    >
      <div className="mx-auto max-w-350">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="kicker-yellow mb-4 reveal">{label}</p>
          <h2
            className="font-graffiti text-[--text-primary] reveal reveal-delay-1"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
          >
            {headingStart} <span style={{ color: "var(--neon-yellow)" }}>{headingLast}</span>
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div className="relative reveal reveal-delay-2">
          {/* Track — perspective container */}
          <div
            className="relative grid"
            style={{
              perspective: "1200px",
              justifyItems: "center",
            }}
            onMouseDown={(e) => onDragStart(e.clientX)}
            onMouseUp={(e) => onDragEnd(e.clientX)}
            onTouchStart={(e) => {
              const t = e.touches[0];
              if (t) onDragStart(t.clientX);
            }}
            onTouchEnd={(e) => {
              const t = e.changedTouches[0];
              if (t) onDragEnd(t.clientX);
            }}
          >
            {barbers.map((barber, i) => (
              <BarberCard
                key={barber.id}
                barber={barber}
                bookCta={bookCta}
                position={getPosition(i)}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-center gap-8 mt-10">
            <Arrow direction="left" onClick={prev} />
            <Dots count={COUNT} active={activeIndex} onDot={goTo} />
            <Arrow direction="right" onClick={next} />
          </div>
        </div>
      </div>
    </section>
  );
};
