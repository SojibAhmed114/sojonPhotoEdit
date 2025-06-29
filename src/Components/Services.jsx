
import ServiceSingleContainer from './ServiceSingleContainer'
import TitleHeader from './Utility/TitleHeader'
import photoOne from '../assets/bFive.jpg'
import photoTwo from '../assets/bOne.jpg'
const Services = () => {
  return (
    <section className=" max-w-7xl mx-auto border-t-3 border-myPrimary rounded-2xl shadow-sm p-5">
      <TitleHeader
        titleHeader={"Our Popular Photo Editing Services"}
        headerSubTitle={`Discover the magic of flawless photo edits. From basic retouching to advanced enhancements`}
      />
 
      <div>
        <ServiceSingleContainer
          serviceHeader={"Newborn Photo Editing Services"}
          serviceSubTitle={`Your homemade or studio baby photos photography high quality edited /with some red skin and a mess in the background will be professionally edited at an affordable price. I am an expert in images editor and Retouch or as well as good quality. I would like to get an opportunity to discuss this project. I can ensure you quality work as you want by maintaining your time schedule.`}
          beforeImage={photoOne} afterImage={photoTwo}
        />
      </div>
    </section>
  );
}

export default Services