import bannerImg from "../../assets/bannerImg.jpg";
import smallImg1 from "../../assets/showPart2.jpg";
import smallImg2 from "../../assets/showPart1.jpg";

const Banner = () => {
  return (
    <div className="w-full p-4 md:p-8">

      {/* Heading Above Banner */}
      <div className=" flex justify-center gap-2 text-[60px] md:text-[120px] lg:text-[218px] font-bold mb-8 text-center md:text-left">
        <span className="text-[#232321]">DO IT </span>
        <span className="text-[#4A69E2]">RIGHT</span>
      </div>

      {/* Banner Image */}
      <div className="relative w-full h-[400px] sm:h-[550px] md:h-[650px] lg:h-[722px]">
        <img
          src={bannerImg}
          alt="banner"
          className="w-full h-full object-cover rounded-3xl md:rounded-[64px]"
        />


<div
    className="absolute -left-15  md:-left-22.5 top-22 md:top-50 w-[157px] md:w-[237px] 
               p-2 md:p-4 
               rounded-tr-[16px] rounded-tl-[16px] 
               bg-[#232321] text-white flex flex-col gap-2.5 
               transform rotate-90"
  >
    <p className="rotate-180 text-[12px] md:text-[14px]">Nike product of the year</p>
  </div>


        {/* Overlay Horizontal Content */}
        <div className="absolute inset-0 flex justify-between items-end p-8  z-20">

          {/* Left Side: Text */}
          <div className="max-w-lg text-white">
            <h1 className="text-[24px] md:text-6xl lg:text-[74px] font-bold mb-4">
              NIKE AIR MAX
            </h1>
            <p className="text-[14px] md:text-2xl mb-6 font-medium">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="rounded-lg bg-[#4A69E2] px-6 py-2 lg:py-3 hover:bg-white hover:text-black transition">
              SHOP NOW
            </button>
          </div>

          {/* Right Side: Two Small Images */}
          <div className="flex flex-col gap-4">
            <div className="h-16 w-16 md:h-40 md:w-40 rounded-lg md:rounded-[36px] overflow-hidden border-3 border-white">
              <img src={smallImg1} alt="small1" className="w-full h-full object-cover" />
            </div>
            <div className="h-16 w-16  md:h-40 md:w-40 rounded-lg md:rounded-[36px] overflow-hidden border-3 border-white">
              <img src={smallImg2} alt="small2" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
