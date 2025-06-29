import HowWorkTimeline from "./HowWorkTimeline";
import TitleHeader from "./Utility/TitleHeader";
import WorkInfo from "./WorkInfo";


const HowWork = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <TitleHeader titleHeader={"How Photoshop Bd Works"} headerSubTitle={`We’ll edit your product images so you can use them in any product
        listings, eCommerce sites, and promotional activities which boost your
        conversion rates faster.`}/>
      <div className=" my-5 md:my-7 lg:my-10 grid grid-cols-1   md:grid-cols-3 gap-5  items-center justify-center">
        <div className="space-y-3 md:col-span-1 w-auto">
          <WorkInfo cardHeader={"SATISFACTION GUARANTEE"} />
          <WorkInfo cardHeader={"3, 12 or 24 HOUR DELIVERY OPTIONS"} />
          <WorkInfo cardHeader={"STARTING FROM $0.49"} />
        </div>
        <div className=" md:col-span-2">
          <HowWorkTimeline />
        </div>
      </div>
    </div>
  );
}

export default HowWork