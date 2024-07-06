import SectionTitle from "../../Components/SectionTitle";
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import img9 from '../../assets/10.jpg' 

const Gallery = () => {
    return (
        <div>
            <SectionTitle 
            heading={"Gallery"}
            subHeading={"Enjoy some moment with us!"}
            />
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 p-5">
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full" src={img2} alt="photo" />
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full" src={img3} alt="photo" />
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full" src={img4} alt="photo" />
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full hidden md:flex" src={img5} alt="photo" />
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full hidden md:flex" src={img6} alt="photo" /> 
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full hidden md:flex" src={img7} alt="photo" /> 
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full hidden lg:flex" src={img8} alt="photo" /> 
                <img className="rounded-lg transition-transform transform hover:scale-105 w-full h-full hidden lg:flex" src={img9} alt="photo" /> 
            </div>
        </div>
    );
};

export default Gallery;