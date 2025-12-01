import { NavLink } from "react-router-dom";
import { navItems } from "../../../Utils/navbardata";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-light py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold">Dermalife Clinic</h2>
          <p className="text-gray-300 mt-3">
            Advanced Skin, Hair, Laser & Aesthetic Treatments with expert care,
            modern technology, and a personalized approach for every patient.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            {[
              {
                href: "https://www.facebook.com/people/Dermalife-Laser-and-Aesthetic-clinic/100094530831026/?mibextid=ZbWKwL",
                icon: <Facebook size={20} />
              },
              {
                href: "https://www.instagram.com/dermalife.cuttack1?utm_source=qr&igsh=aG9jbGRhbXN2Y254",
                icon: <Instagram size={20} />
              },
              {
                href: "https://wa.me/919776636330",
                icon: <MessageCircle size={20} />
              }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="hover:text-white">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>

          <address className="not-italic text-gray-300 leading-relaxed">
            <strong>Dermalife – Laser & Aesthetic Clinic</strong><br />
            Below Jeevan Jyoti Hospital,<br />
            Near Ranihat Clock Tower,<br />
            Ranihat, Cuttack, Odisha – 753001
          </address>

          <p className="mt-4 text-gray-300">
            <strong>Dr. Monika Sahu</strong><br />
            Phone:{" "}
            <a href="tel:+919776636330" className="hover:text-white">
              +91 9776636330
            </a>
          </p>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300">
        © {new Date().getFullYear()} Dermalife Clinic. All rights reserved.
      </div>
    </footer>
  );
}
