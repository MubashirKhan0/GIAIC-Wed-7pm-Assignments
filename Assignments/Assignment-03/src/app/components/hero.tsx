import Image from "next/image";
import Arrow from "@/images/assets/arrow.png";

const Hero = () => {
  return (
    <>
      <div className="py-[140px] px-[220px] top-[92px] bg-[#043873] flex justify-between items-center text-white">
        <div className="w-[656px] h-[361px] flex justify-between">
          <div className="w-[656px] h-[238px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Get More Done with Whitepace
            </h2>
            <p className="font-normal text-[18px] leading-[30px] tracking-[-0.02em] ">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <div className="w-[219px] h-[63px] rounded-[6px] text-[18px] leading-[23px] tracking-[0.02em] flex justify-between items-center mt-[60px] bg-[#4F9CF9] text-white">
              <button className="ml-[20px] gap-2 flex justify-between items-center hover:text-blue-600">
                Try Whitepace free
                <Image src={Arrow} alt=""></Image>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[824px] h-[549px] gap-1  bg-[#C4DEFD]"></div>
      </div>
    </>
  );
};

export default Hero;
