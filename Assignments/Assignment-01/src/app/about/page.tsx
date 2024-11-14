import { resolve } from "path";

export default async function About() {
    await new Promise(resolve => setTimeout(resolve, 5000)) 
    return(
        <div className="w-{800px} h-[800px] text-7xl flex flex-col justify-between  items-center">
            <h1>About Page</h1>
        </div>
       
    );

}