import Image from "next/image";
import Pic from "@/images/assets/arrow.png";

const Customize = () => {
  return (
    <div>
      <div className="w-[1921px] h-[812px] mt-[100px] flex justify-between items-center">
        <div className="px-[220px] py-[140px] flex justify-between items-center gap-[98px]">
          <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]"></div>
          <div className="w-[669px] h-[411px] gap-[60]">
            <div className="w-[670px] h-[288px]  text-black">
              <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-[30px]">
                Customise it to your needs
              </h2>
              <p className="font-normal text-[18px] leading-[30px] tracking-[0.02em]">
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API.
              </p>
            </div>
            <div className="w-[186px] h-[63px] rounded-[6px] text-[18px] leading-[23px] tracking-[0.02em] flex justify-between items-center mt-[60px] bg-[#4F9CF9] text-white">
              <button className="ml-[40px] gap-2 flex justify-between items-center hover:text-blue-600">
                Let’s Go
                <Image src={Pic} alt=""></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customize;
