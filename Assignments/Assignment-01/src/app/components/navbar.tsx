import Link from "next/link";

    export default function Navbar() {
    return (
      <div className="w-full h-[50px] px-[25px] py-[30px] bg-[grey] flex justify-between items-center">
        <div className="w-">Governer House First Assignment</div>
        <div className="flex justify-between px-[30px] gap-[25px]">
        <Link href="./" className="black-700 hover:text-blue-600 ">Home</Link>
        <br />
        <Link href="./about" className="black-700 hover:text-blue-600">About</Link>
        <br />
        <Link href="./products" className="black-700 hover:text-blue-600">Products</Link>
        <br />
        <Link href="./faq" className="black-700 hover:text-blue-600">FAQ</Link>
        <br />
        <Link href="./contact" className="black-700 hover:text-blue-600">Contact </Link>
        <br />
        </div>
        </div>
  );
}
