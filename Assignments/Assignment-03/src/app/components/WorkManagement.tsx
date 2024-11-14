import Image from "next/image";
import arrow from "@/images/assets/arrow.png"
import pic from "@/images/assets/work-Together.png"
const WorkManagement = () => {
  return (
    <>
      <div className="px-[220px] py-[140px] top[921px] text-black">
        <div className="w-[1920px] h-[1588px]  ">
          {/* SECTION #01 */}
          <div className="w-[1480px] h-[547px] flex justify-between ">
            <div className="w-[672px] h-[411px] mt-[68px] ">
              <div className="w-[672px] h-[288px]">
                <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] gap-[100px]">
                  Project Management
                </h1>
                <p className="font-normal text-[18px] leading-[30px] tracking-[-0.02em]">
                  Images, videos, PDFs and audio files are supported. Create
                  math expressions and diagrams directly from the app. Take
                  photos with the mobile app and save them to a note.
                </p>
              </div>
              <button className="w-[186px] h-[63px] btn rounded-md bg-[#4F9CF9] text-white flex justify-center gap-[10px] items-center cursor-pointer mt-[60px] hover:text-blue-600">
              Get Started
            <span>
              <Image src={arrow} alt="arrow"></Image>
            </span>
          </button>             
            </div>
            <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
          </div>
          {/* SECTION #02 */}
          <div>
            <div className="w-[1480px] h-[661px] mt-[100px] mb-[100px] flex justify-between items-center">
              <div className="w-[710px] h-[661px]">
                <Image src={pic} alt=""></Image>
              </div>
              <div className="w-[670px] h-[294px] gap-[60]">
                <div className="w-[670px] h-[171px]  text-black">
                  <h2 className="font-bold text-[72px] leading-[87.14px] tracking-[0.02em] mb-[30px]">
                    Work together
                  </h2>
                  <p className="font-normal text-[18px] leading-[30px] tracking-[0.02em]">
                    With whitepace, share your notes with your colleagues and
                    collaborate on them. You can also publish a note to the
                    internet and share the URL with others.
                  </p>
                </div>
                <button className="w-[195px] h-[63px] btn rounded-md hover:text-blue-600 bg-[#4F9CF9] text-white flex justify-center gap-[10px] items-center cursor-pointer mt-[60px]">
                Try it now
            <span>
              <Image src={arrow} alt="arrow"></Image>
            </span>
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkManagement;
