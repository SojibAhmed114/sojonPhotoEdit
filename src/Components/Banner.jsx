import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <header>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_1.5rem]"></div>
      <div className="grid md:grid-cols-2 gap-3 md:gap-5 lg:gap-8 items-center m-5">
        <div className='order-2 md:order-1'>
          <h1 className="text-3xl  md:text-4xl lg:text-5xl font-semibold pb-5 lg:leading-14 font-Header">
            Retouch & clipping path service within 
            <span className="text-myPrimary"> budget </span> and
            <span className="text-myPrimary"> time.</span>
          </h1>
          <p className="text-lg font-medium text-slate-600 text-justify">
            We’ll edit your product images so you can use them in any product
            listings, eCommerce sites, and promotional activities which boost
            your conversion rates faster.
          </p>
        </div>
        <div className="w-auto order-1 md:order-2">
          <img className="animate-imgPulse" src={banner} alt="banner photo" />
        </div>
      </div>
    </header>
  );
}

export default Banner