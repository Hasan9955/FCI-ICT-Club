import AboutUs from "../AboutUs/AboutUs";
import Committee from "../Committee/Committee";
import Contact from "../Contact/Contact";
import Faculties from "../Faculties/Faculties";
import Gallery from "../Gallery/Gallery";
import Banner from "./Banner";



const Home = () => {


    return (
        <div>
            <Banner />
            <AboutUs />
            <Faculties />
            <Committee />
            <Gallery />
            <Contact />
        </div>
    );
};

export default Home;