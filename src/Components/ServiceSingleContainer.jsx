import Diff from "./Diff";
import SectionHeader from "./Utility/SectionHeader"

// grid grid-cols-1 md:grid-cols-2  justify-center
const ServiceSingleContainer = ({ serviceHeader , serviceSubTitle, beforeImage, afterImage ,setOrder}) => {
  return (
    <section className="flex flex-col md:flex-row items-center lg:items-start gap-5 md:gap-12 lg:gap-20 my-15 p-5 bg-white shadow-md rounded-2xl">
      <div className={`w-full md:w-1/2 ${setOrder ? "md:order-2" : "md:order-1"} `}>
        <SectionHeader
          serviceHeader={serviceHeader}
          serviceSubTitle={serviceSubTitle}
        />
      </div>
      <div className={`w-full md:w-1/2 ${setOrder ? "md:order-1" : "md:order-2"} `}>
        <Diff beforeImage={beforeImage} afterImage={afterImage} />
      </div>
    </section>
  );
};

export default ServiceSingleContainer;





