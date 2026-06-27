// Barber Room — Hero section: neon sign only, natural height inside viewport wrapper
export const Hero = () => (
  <section className="flex flex-col items-center justify-center px-6 py-24 md:py-28 text-center">
    <h1
      className="font-logo neon-text leading-none select-none"
      style={{
        fontSize: "clamp(4rem, 17vw, 10.5rem)",
        lineHeight: 0.95,
        letterSpacing: "0.06em",
      }}
    >
      BARBER
      <br />
      ROOM
    </h1>
  </section>
);
