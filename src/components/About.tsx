// Barber Room — About section
import site from "@content/site.json";

const { label, heading, body } = site.cs.about;

// Force 2-line heading: line1 = first word, line2 = middle + last word (red)
const headingWords = heading.split(" ");
const headingLine1 = headingWords[0]; // "Nekompromisní"
const headingLast = headingWords.at(-1) ?? ""; // "shop" → red
const headingLine2 = headingWords.slice(1, -1).join(" "); // "barber"

export const About = () => (
  <section
    id="o-nas"
    className="flex md:flex-1 md:min-h-0 overflow-hidden px-3 md:px-10 border-t border-white/10"
    style={{ background: "#111318" }}
  >
    {/* md:h-full propagates the explicit section height down on desktop */}
    <div className="w-full mx-auto max-w-225 flex flex-col md:flex-row md:h-full">
      {/* Text — left desktop, top mobile. self-center vertically centers within row */}
      <div className="min-w-0 md:w-[60%] shrink-0 order-1 self-center py-10 md:py-12 pr-2 md:pr-8">
        <div className="reveal">
          <p className="kicker text-white/50 mb-4">{label}</p>
        </div>

        <h2
          className="font-graffiti reveal reveal-delay-1 mb-8"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            lineHeight: 1.1,
            color: "var(--neon-yellow)",
          }}
        >
          {headingLine1}
          <br />
          {headingLine2}{" "}
          <span className="tag-underline" style={{ color: "var(--accent-red)" }}>
            {headingLast}
          </span>
        </h2>

        <p
          className="text-lg md:text-xl leading-relaxed reveal reveal-delay-2"
          style={{ fontFamily: "system-ui, sans-serif", color: "rgba(255,255,255,0.75)" }}
        >
          {body}
        </p>
      </div>

      {/* Dog — right desktop, below text mobile.
          overflow-hidden clips any bleed. Stretches to full section height on desktop. */}
      <div className="order-2 md:flex-1 flex items-center justify-center overflow-hidden reveal reveal-delay-1">
        <img
          src="/images/barber-room-dog.png"
          alt="Barber Room dog"
          className="max-h-[45vh] md:max-h-full w-auto max-w-full object-contain"
          style={{ filter: "drop-shadow(0 0 32px rgba(255,34,0,0.25))" }}
        />
      </div>
    </div>
  </section>
);
