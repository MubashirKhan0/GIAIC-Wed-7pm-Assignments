import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-[#252B42]">
        <header className="w-[1322px] h-[91px] px-[136px] py-[4px] mx-auto flex items-center gap-[30px]">
          <div className="w-[152px] h-[32px]">
            <h3 className="text-2xl font-bold">BrandName</h3>
          </div>
          <div className="  flex items-center ml-[65px] justify-between w-[815px]">
            <div className="w-[275px] h-[24px] text-sm">
              <ul className="flex flex-row justify-between ">
                <li>
                  <button className="font-bold hover:text-[#23A6F0]">Home</button>
                </li>
                <li>
                  <button className="font-bold hover:text-[#23A6F0]">Products</button>
                </li>
                <li>
                  <button className="font-bold hover:text-[#23A6F0]">Pricing</button>
                </li>
                <li>
                  <button className="font-bold hover:text-[#23A6F0]">Contact</button>
                </li>
              </ul>
            </div>
            <div className="w-[189px] h-[52px] flex justify-between items-center font-bold">
              <button className="px-41px py-22px hover:text-[#23A6F0] gap-45px text-sm">
                Login
              </button>
              <div>
                <button className="font-bold text-sm  px-6 py-[15px] rounded-[5px] bg-[#23A6F0] hover:bg-[#0b1954]">
                  JOIN US
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Navbar;
