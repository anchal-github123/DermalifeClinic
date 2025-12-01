import CommonHeading from "../../components/CommonHeading";
import { services } from "../../Utils/servicedata";
import Card from "../../components/Card";

export default function Service() {
  return (
    <section className="py-5 lg:py-12">
      <CommonHeading
        heading="Our Services"
        para="Advanced skin, hair, laser, and aesthetic treatments designed to enhance your natural beauty with expert care."
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
       
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
  );
}


