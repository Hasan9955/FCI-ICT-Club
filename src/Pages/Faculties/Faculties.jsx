import FacultyCard from "../../Components/FacultyCard";
import SectionTitle from "../../Components/SectionTitle";
import webImg from '../../assets/web development.jpg'
import graphicImg from "../../assets/graphic.jpg"
import programmingImg from '../../assets/programming.jpeg'
import networkingImg from '../../assets/networking.jpg'

const Faculties = () => {
    return (
        <div>
            <SectionTitle
                heading={"Our Faculties"}
                subHeading={"About Our Faculties"}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center flex-col gap-5 md:flex-row p-5">
                <FacultyCard
                    img={webImg}
                    title={"Web Development"}
                    text={"Dive into the world of Web Development, where creativity meets functionality. Learn to build responsive and dynamic websites using the latest technologies."}
                />
                <FacultyCard
                    img={graphicImg}
                    title={"Graphics Design"}
                    text={"Unleash your artistic potential in Graphics Design. Master the tools and techniques to create stunning visuals and compelling designs."}
                />
                <FacultyCard
                    img={programmingImg}
                    title={"Programming"}
                    text={"Delve into the realm of Programming. Develop your coding skills across various languages and solve complex problems with innovative solutions."}
                />
                <FacultyCard
                    img={networkingImg}
                    title={"Networking"}
                    text={"Explore the intricacies of Networking. Gain expertise in designing, managing, and securing network infrastructures in a connected world."}
                />
            </div>
        </div>
    );
};

export default Faculties;