import CommonHeading from "../../components/CommonHeading";
import { services } from "../../Utils/servicedata";
import Card from "../../components/Card";
export default function Service() {
  return (
    <>
      {/* SEO for this section – React 19 head tags */}
      <head>
        <title>Dermalife Cuttack – Skin, Hair & Laser Treatments</title>
        <meta
          name="description"
          content="Explore advanced skincare, hair fall control, PRP therapy, laser hair removal, pigmentation removal, and aesthetic treatments at Dermalife Cuttack."
        />
      </head>

      <section className="py-4 lg:py-12">
        <CommonHeading
          heading="Our Services"
          para="Advanced skin, hair, laser, and aesthetic treatments designed to enhance your natural beauty with expert care."
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((item) => (
            <Card
              key={item.id}
              title={item.serviceName}
              desc={item.subHeading}
              img={item.imageName}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
