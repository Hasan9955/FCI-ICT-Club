import SectionTitle from "../../Components/SectionTitle";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {


    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been send successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        // const name = form.name.value 
        form.reset()
    }
    return (
        <div className="mb-20 p-5">
            <SectionTitle
                heading={"Contact"}
                subHeading={"Contact with us"}
            />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
                <div>
                    <div className="flex gap-4  items-center">
                        <button className="btn btn-outline text-2xl text-[#1c99ca] hover:bg-[#1c99ca] rounded-full">
                            <IoLocationOutline />
                        </button>
                        <div>
                            <p className="text-2xl font-bold">Address: </p>
                            <p className="font-sans">Reanir Hat, Feni Sadar, Feni.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 my-10 items-center">
                        <button className="btn btn-outline text-2xl text-[#1c99ca] hover:bg-[#1c99ca] rounded-full">
                            <FaPhone />
                        </button>
                        <div>
                            <p className="text-2xl font-bold">Phone: </p>
                            <p className="font-sans">+880 1400322540</p>
                        </div>
                    </div>
                    <div className="flex gap-4  items-center">
                        <button className="btn btn-outline text-2xl text-[#1c99ca] hover:bg-[#1c99ca] rounded-full">
                            <MdOutlineEmail />
                        </button>
                        <div>
                            <p className="text-2xl font-bold">Email: </p>
                            <p className="font-sans">fciictclub@gmail.com</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="md:w-1/2 lg:w-3/5">
                                <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                    name="name"
                                    type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                    name="email" type="email" placeholder="Your email" className="input input-bordered" required />
                                </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input
                                    name="subject" type="text" placeholder="Subject" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea
                                    name="message" className="textarea textarea-bordered" placeholder="Write your message" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn border hover:text-black border-[#1c99ca] text-white bg-[#1c99ca]">Send Message</button>
                                </div>
                            </form>
            </div>
        </div>
    );
};

export default Contact;