// Barber Room — Footer
import site from "@content/site.json";

const { addressStreet, addressCity, copyright } = site.cs.footer;

export const Footer = () => (
  <footer
    id="kontakt"
    className="flex flex-wrap items-center gap-x-4 gap-y-1 px-6 py-3 border-t border-white/10"
    style={{
      background: "#000000",
    }}
  >
    <img src="/images/logo-trans.png" alt="Barber Room" className="h-12 w-auto shrink-0" />
    <p
      className="text-white/50 min-w-0 flex-1"
      style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem" }}
    >
      <span className="block sm:inline">{addressStreet}</span>
      <span className="block sm:inline"> {addressCity}</span>
    </p>
    <p
      className="text-white/50 ml-auto shrink-0"
      style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem" }}
    >
      {copyright}
    </p>
  </footer>
);
