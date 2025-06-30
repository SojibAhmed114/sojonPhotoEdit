import photoOne from "../assets/bFive.jpg";
import photoTwo from "../assets/bOne.jpg";
import ServiceSingleContainer from "./ServiceSingleContainer";
import TitleHeader from "./TitleHeader";
const Services = () => {
  return (
    <section className=" border-t-3 border-myPrimary rounded-2xl shadow-sm ">
      <TitleHeader
        titleHeader={"Our Popular Photo Editing Services"}
        headerSubTitle={`Discover the magic of flawless photo edits. From basic retouching to advanced enhancements`}
      />

      <div>
        <ServiceSingleContainer
          serviceHeader={"Newborn Photo Editing Services"}
          serviceSubTitle={`Your homemade or studio baby photos photography high quality edited /with some red skin and a mess in the background will be professionally edited at an affordable price. I am an expert in images editor and Retouch or as well as good quality. I would like to get an opportunity to discuss this project. I can ensure you quality work as you want by maintaining your time schedule.`}
          beforeImage={photoOne}
          afterImage={photoTwo}
          setOrder={false}
        />

        <ServiceSingleContainer
          serviceHeader={"create Shadow and  White Background Service"}
          serviceSubTitle={`Our experts will create realistic-looking shadows and add reflections so that your products will look like they are on a glass surface.`}
          beforeImage={photoOne}
          afterImage={photoTwo}
          setOrder={true}
        />

        <ServiceSingleContainer
          serviceHeader={"Natural Shadow and  white Background Service"}
          serviceSubTitle={`It’s another complex service. Under this feature, the graphic design services provider or photo editors retain the original shadow of the image. They do not create anything. Instead, they reconstruct the original shadow that was in the image.`}
          beforeImage={photoOne}
          afterImage={photoTwo}
          setOrder={false}
        />

        <ServiceSingleContainer
          serviceHeader={"Refelection Shadow"}
          serviceSubTitle={`Using reflection shadow masking, objects in images can be reflected, which makes the photo significantly different from the original image. It is an excellent avenue to create suitable products such as jewelry that can be used for advertisements since the image is highlighted. Also, this service is known as the mirror effect, and its formed shadow greatly relies on shape and opacity.`}
          beforeImage={photoOne}
          afterImage={photoTwo}
          setOrder={true}
        />
      </div>
    </section>
  );
};

export default Services;
