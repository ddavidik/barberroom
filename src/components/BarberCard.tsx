import type { CSSProperties } from "react";

export type Barber = {
  id: string;
  name: string;
  motto: string;
  skill: string;
  about: string;
  ig: string;
  igUrl: string;
  reservioUrl: string;
  photo: string;
  photoPosition: string;
};

type Props = {
  barber: Barber;
  position: "center" | "left" | "right";
  onClick: () => void;
  bookCta: string;
};

const positionStyles: Record<string, CSSProperties> = {
  center: {
    transform: "translateX(0) rotateY(0deg) scale(1)",
    opacity: 1,
    filter: "blur(0px)",
    zIndex: 10,
    pointerEvents: "auto",
  },
  left: {
    transform: "translateX(-68%) rotateY(35deg) scale(0.82)",
    opacity: 0.52,
    filter: "blur(1.5px)",
    zIndex: 5,
    pointerEvents: "auto",
    cursor: "pointer",
  },
  right: {
    transform: "translateX(68%) rotateY(-35deg) scale(0.82)",
    opacity: 0.52,
    filter: "blur(1.5px)",
    zIndex: 5,
    pointerEvents: "auto",
    cursor: "pointer",
  },
};

export const BarberCard = ({ barber, position, onClick, bookCta }: Props) => {
  const isCenter = position === "center";

  return (
    <article
      className="carousel-card w-full"
      style={{
        gridArea: "1 / 1",
        maxWidth: "400px",
        ...positionStyles[position],
      }}
      onClick={!isCenter ? onClick : undefined}
      aria-label={isCenter ? barber.name : `Zobrazit ${barber.name}`}
      role={!isCenter ? "button" : undefined}
      tabIndex={!isCenter ? 0 : undefined}
      onKeyDown={
        !isCenter
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") onClick();
            }
          : undefined
      }
    >
      {/* Card shell */}
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--surface-card-edge)",
          borderTop: "2px solid rgba(255,247,0,0.15)",
          boxShadow: isCenter
            ? "0 8px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,247,0,0.08)"
            : "0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {/* Photo */}
        <div className="relative overflow-hidden" style={{ height: "360px" }}>
          <img
            src={barber.photo}
            alt={barber.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: barber.photoPosition }}
            loading="lazy"
          />
          {/* Bottom gradient for text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 35%, rgba(17,19,24,0.6) 70%, var(--surface-card) 100%)",
            }}
          />
          {/* Name overlay at bottom of photo */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-3">
            <h3
              className="font-graffiti text-[--neon-yellow] leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                textShadow: isCenter
                  ? "0 0 20px var(--neon-glow), 0 0 40px var(--neon-glow)"
                  : "none",
              }}
            >
              {barber.name}
            </h3>
          </div>
        </div>

        {/* Info block — only fully visible on center card */}
        <div
          className="px-5 pt-4 pb-6 flex flex-col gap-4"
          style={{
            transition: "opacity 0.4s ease",
            opacity: isCenter ? 1 : 0,
          }}
        >
          {/* Skill badge */}
          <div className="flex items-center gap-2">
            <span
              className="inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-widest"
              style={{
                background: "rgba(255,247,0,0.1)",
                border: "1px solid rgba(255,247,0,0.3)",
                color: "var(--accent-yellow)",
                letterSpacing: "0.15em",
              }}
            >
              {barber.skill}
            </span>
          </div>

          {/* Motto */}
          <p
            className="italic leading-snug"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.95rem",
              color: isCenter ? "#d4d0c4" : "var(--text-on-card-muted)",
            }}
          >
            &ldquo;{barber.motto}&rdquo;
          </p>

          {/* About */}
          <p
            className="leading-relaxed"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.88rem",
              color: isCenter ? "#f8f4ea" : "var(--text-on-card)",
            }}
          >
            {barber.about}
          </p>

          {/* IG link */}
          <a
            href={barber.igUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-200"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.85rem",
              color: isCenter ? "#d4d0c4" : "var(--text-on-card-muted)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-yellow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = isCenter
                ? "#d4d0c4"
                : "var(--text-on-card-muted)";
            }}
          >
            {/* Instagram icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
            {barber.ig}
          </a>

          {/* Booking CTA */}
          <a
            href={barber.reservioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon mt-2 self-start"
          >
            {bookCta}
          </a>
        </div>
      </div>
    </article>
  );
};
