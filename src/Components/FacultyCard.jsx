/* eslint-disable react/prop-types */

import { toast } from "react-toastify";


const FacultyCard = ({ img, title, text }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 flex-1 shadow-xl ">
                <figure>
                    <img className=" w-full"
                        src={img}
                        alt="Department" />
                </figure>
                <div className="card-body grid-flow-row">
                    <h2 className="card-title">{title}</h2>
                    <p className="font-sans">{text}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => toast.error('This Feature is Coming Soon! Stay Tuned.')} className="btn border hover:text-black border-[#1c99ca] text-white bg-[#1c99ca]">Join now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacultyCard;