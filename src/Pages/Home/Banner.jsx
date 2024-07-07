import { toast } from "react-toastify";
import image from "../../assets/banner.jpg"


const Banner = () => {
    return (
        <div className="relative">
            <img className="max-h-[430px] w-full rounded-b-lg md:mt-4 " src={image} alt="" />
            <div className="flex flex-col justify-center items-center  text-center bg-black text-white absolute bg-opacity-70 w-full top-0 h-full rounded-b-lg "> 
                <h2 className="text-xl md:text-3xl lg:text-5xl">Feni Computer Institute ICT CLUB</h2>
                <p className="text-md md:text-xl lg:text-2xl md:mt-5">Our Vision Your Future!</p>
                <button onClick={() => toast.error('This Feature is Coming Soon! Stay Tuned.')} className="btn btn-sm md:btn-md border hover:text-black border-[#1c99ca] text-white mt-2 md:mt-5 bg-[#1c99ca]">Join Now</button>
            </div>
        </div>
    );
};

export default Banner;