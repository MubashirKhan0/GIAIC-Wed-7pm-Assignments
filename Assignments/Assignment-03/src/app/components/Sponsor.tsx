import Image from "next/image"
import apple from "@/images/assets/Apple.png"
import microsoft from "@/images/assets/microsoft 1.png"
import slack from "@/images/assets/Slack_Technologies_Logo 1.png"
import google from "@/images/assets/google.png"

const Sponsor = () => {
    return(
    <div className="w-[1922px] h-[538px] px-[220px] py-[140px] flex flex-col gap-[100px] justify-cente">
        <h1 className="w-[1482px] h-[87px] font-bold text-7xl leading-[87.14px] tracking-[-2%] text-center ">
            Our sponsors
        </h1>
        <div className="sposor w-[1472px] h-[71px] flex justify-between">
               <Image src={apple} alt="apple w-[55.7px] h-[68px]"></Image>
               <Image src={microsoft} alt="microsoft w-[287px] h-[62px]" w-></Image>
               <Image src={slack} alt="Slack w-[280px] h-[71px]"  ></Image>
               <Image src={google} alt="google w-[211px] h-[69.81px]" ></Image>
        </div>
    </div>

    )
}

export default Sponsor