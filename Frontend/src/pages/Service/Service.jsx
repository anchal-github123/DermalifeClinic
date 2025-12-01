import {Suspense, lazy } from "react";
import CommonHeading from "../../components/CommonHeading";
import { services } from "../../Utils/servicedata";

// Lazy-load Card component
const Card = lazy(() => import("../../components/Card"));

export default function Service() {
  return (
    <section className="py-5 lg:py-16">
      <CommonHeading
        heading="Our Services"
        para="Advanced skin, hair, laser, and aesthetic treatments designed to enhance your natural beauty with expert care."
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        <Suspense fallback="loading..">
          {services.map((item) => (
            
              <Card
              key={item.id}
                title={item.serviceName}
                desc={item.subHeading}
                img={item.imageName}
                id={item.id}
              />
           
          ))}
        </Suspense>
      </div>
    </section>
  );
}


