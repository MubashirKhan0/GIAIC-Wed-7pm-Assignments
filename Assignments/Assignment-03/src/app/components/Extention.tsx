import Image from "next/image";
import Arrow from "@/images/assets/arrow.png";
const Extention = () => {
  return (
    <div className="w-[1921px] h-[759px] bg-[#043873] text-white">
      <div className="px-[220px] py-[140px] flex justify-between items-center ">
        <div className="w-[697px] h-[294px]">
          <div className="w-[697px] h-[171px]">
            <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] ">
              Use as Extension
            </h2>
            <p className="w-[697px] h-[60px] text-[18px] leading-[30px] tracking-[0.02em] mt-6">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
          </div>
          <div className="w-[171px] h-[63px] rounded-[6px] text-[18px] leading-[23px] tracking-[0.02em] flex justify-between items-center mt-[60px] bg-[#4F9CF9] text-white">
            <button className="ml-[40px] gap-2 flex justify-between items-center hover:text-blue-600 ">
              Let’s Go
              <Image src={Arrow} alt=""></Image>
            </button>
          </div>
        </div>
        <div className="w-[686px] h-[497px] gap-1  bg-[#C4DEFD]"></div>
      </div>
    </div>
  );
};
export default Extention;
