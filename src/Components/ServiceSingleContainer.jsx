import Diff from "./Diff";
import SectionHeader from "./Utility/SectionHeader"


const ServiceSingleContainer = ({ serviceHeader , serviceSubTitle, beforeImage, afterImage}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2  justify-center gap-20 my-15 py-5 ">
      <SectionHeader
        serviceHeader={serviceHeader}
        serviceSubTitle={serviceSubTitle}
      />
      <Diff
        className="order-1"
        beforeImage={beforeImage}
        afterImage={afterImage}
      />
    </section>
  );
};

export default ServiceSingleContainer;





