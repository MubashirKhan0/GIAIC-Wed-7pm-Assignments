import Image from "next/image";
import arrow from "@/images/assets/arrow.png"
const YourWork = () => {
  return (
    <div className="w-[1921px] h-[574px]  bg-[#043873] text-white">
      <div className="px-[220px] py-[140px]">
        <div className="w-[1481px] h-[294px] flex items-center flex-col gap-[60px] ">
          <div className="w-[1064px] h-[171px] ">
            <h2 className="w-[1064px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] mb-6">
              Your work, everywhere you are
            </h2>
            <p className="w-[1064px] h-[60px] text-lg leading-[30px] tracking-[-2%] text-center">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <button className="w-[195px] h-[63px] btn rounded-lg hover:text-blue-600  bg-[#4F9CF9] text-white flex justify-center gap-[10px] items-center cursor-pointer">
            Try Taskey
            <span>
              <Image src={arrow} alt="arrow"></Image>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourWork;
