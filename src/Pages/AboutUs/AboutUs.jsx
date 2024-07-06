import SectionTitle from "../../Components/SectionTitle";
import image from "../../assets/8.jpg"


const AboutUs = () => {
    return (
        <div className="mb-5 md:mb-10 p-5">
            <SectionTitle 
            heading={"About us"}
            subHeading={"Discover Who We Are"}
            />
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <img className="lg:w-1/2 rounded-lg" src={image} alt="" />
                <div>
                    <p className="flex-1 lg:max-w-md text-md font-sans">
                        FCI ICT Club stands as the cornerstone of innovation and collaboration at Feni Computer Institute. As the most primitive and extensive club on campus, we are dedicated to exploring every fascinating facet of Computer Science. Our community thrives on teamwork, curiosity, and a shared passion for technology. 
                        <br />
                        Under the esteemed guidance of our honorable Principal, Mr. Mazharul Islam Sir, who serves as the chief supervisor, we delve into a myriad of tech domains. His mentorship inspires us to push boundaries and achieve excellence in our endeavors.
                        <br />
                        <span className="hidden xl:flex">Join us on this exciting journey of discovery, learning, and growth in the ever-evolving world of Computer Science!</span>
                    </p>
                    <button className="btn border hover:text-black border-[#1c99ca] text-white mt-5 bg-[#1c99ca]">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;