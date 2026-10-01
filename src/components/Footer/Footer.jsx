import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Every link here points at a real route (or a real route + section id)
// so the footer actually navigates instead of sitting on "#".
const columns = [
  {
    heading: "PLATFORM",
    links: [
      { label: "Technology", href: "/technology" },
      { label: "Products", href: "/products" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "Philosophy", href: "/philosophy" },
      { label: "Impact", href: "/impact" },
      { label: "Media House", href: "/media-house" },
      { label: "Contact", href: "/design-your-water-system#contact" },
    ],
  },
  {
    heading: "RESOURCES",
    links: [
      { label: "AquaTalks", href: "/media-house" },
      { label: "The Journal", href: "/media-house#journal" },
      { label: "Case Studies", href: "/projects#case-studies" },
      { label: "Press", href: "/media-house" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#101C35] text-white">
      <div className="mx-auto max-w-[1450px] px-6 pt-12 pb-24 sm:px-10 sm:py-12 lg:py-20">

        {/* Top Section */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-14">

          {/* Left */}
          <div>

            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto object-contain"
            />

            <p className="mt-8 max-w-sm font-serif text-[20px] italic leading-9 text-white/70">
              "Water is not a commodity. It is a bridge of friendship between people."
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://www.linkedin.com/company/maithriaquatech/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maithri Aquatech on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 transition hover:border-white hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="https://www.instagram.com/maithriaquatech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maithri Aquatech on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 transition hover:border-white hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/channel/UCNeSha6Qc4WarEexZRvPolw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maithri Aquatech on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 transition hover:border-white hover:text-white"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://x.com/MaithriAquatech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maithri Aquatech on X"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 transition hover:border-white hover:text-white"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://www.facebook.com/maithriaquatech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maithri Aquatech on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 transition hover:border-white hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.google.com/maps/place/Maithri+Aquatech/@17.4545556,78.6121673,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9d005b79737b:0x7435b5f82b850da8!8m2!3d17.4545556!4d78.6121673!16s%2Fg%2F11m67j71bh?entry=ttu&g_ep=EgoyMDI2MDcyNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Maithri Aquatech location on Google Maps"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 transition hover:border-white hover:text-white"
              >
                <FaMapMarkerAlt size={18} />
              </a>

            </div>

          </div>

          {/* Menu */}
          {columns.map((column) => (
            <div key={column.heading}>

              <h3 className="text-sm font-semibold tracking-[0.28em] text-white/40">
                {column.heading}
              </h3>

              <ul className="mt-7 space-y-5">

                {column.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-[17px] text-white/80 transition hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* CTA */}

        <div className="mt-10 flex flex-col gap-8 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16 lg:py-10">

          <h2 className="font-serif text-[30px] font-medium leading-tight">
            Ready to bring water from air{" "}
            <span className="italic text-[#D8A548]">
              to your world?
            </span>
          </h2>

          <div className="flex flex-wrap items-center gap-4">

            <Link
              to="/design-your-water-system#contact"
              className="rounded-full bg-white px-8 py-3 text-[16px] font-semibold text-[#101C35] transition hover:bg-gray-100"
            >
              Contact Us ↗
            </Link>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 pb-4 sm:flex-row sm:items-center sm:justify-between sm:pb-0">

          <p className="text-sm text-white/45">
            © 2026 Maithri Aquatech Private Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45 sm:gap-x-8">

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <Link to="/design-your-water-system#contact" className="hover:text-white">
              Contact
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
