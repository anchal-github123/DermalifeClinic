import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";
export default function Contact() {
  return (
    <>
    
       <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">
            Contact Dermalife Clinic
          </h1>
          <p className="text-tertiary mt-3">
            Get in touch with us for appointments, queries, or directions.
          </p>
        </div>

        {/* Contact Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Address */}
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#0F1D80]" size={32} />
              <div>
                <h3 className="text-xl font-semibold">Clinic Address</h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  Dermalife – Laser & Aesthetic Clinic<br />
                  Below Jeevan Jyoti Hospital,<br />
                  Near Ranihat Clock Tower,<br />
                  Ranihat, Cuttack, Odisha – 753001
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <Phone className="text-[#0F1D80]" size={32} />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-600 mt-2">
                  <a href="tel:+9776636330" className="hover:text-[#0F1D80]">
                    +91 9776636330
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+919776636330" className="hover:text-[#0F1D80]">
                    Dr. Monika Sahu
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <Mail className="text-[#0F1D80]" size={32} />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600 mt-2">
                  <a href="mailto:Dermalife.cuttack@gmail.com" className="hover:text-[#0F1D80]">
                  Dermalife.cuttack@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <a
            href="tel:+919776636330"
            className="px-6 py-3 rounded-xl bg-[#0F1D80] text-white hover:bg-[#1325A3] transition"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919776636330"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition flex items-center gap-2"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mt-10">
          <a href="https://www.facebook.com/people/Dermalife-Laser-and-Aesthetic-clinic/100094530831026/?mibextid=ZbWKwL"  target="_blank"  className="p-3 bg-white shadow-md rounded-full hover:bg-gray-200">
            <Facebook size={22} />
          </a>
          <a href="https://www.instagram.com/dermalife.cuttack1?utm_source=qr&igsh=aG9jbGRhbXN2Y254"  target="_blank" className="p-3 bg-white shadow-md rounded-full hover:bg-gray-200">
            <Instagram size={22} />
          </a>
         
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-[#0F1D80]">Find Us on Google Maps</h2>
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6656.441154556385!2d85.89199699013507!3d20.466836137283966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190dd6b634c04b%3A0xce7e57807771781b!2sDermalife!5e0!3m2!1sen!2sin!4v1764489985062!5m2!1sen!2sin" 
           width="100%"
              height="100%"
              allowfullscreen="" loading="lazy"
               referrerpolicy="no-referrer-when-downgrade">

          </iframe>
         
          </div>
        </div>

      </div>
    </section>
     
    </>
  )
}
