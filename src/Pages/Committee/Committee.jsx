import SectionTitle from '../../Components/SectionTitle';
import president from '../../assets/president.jpg'
import vicePresident from '../../assets/vice president.jpg'
import secretary from '../../assets/secretary.jpg'



const Committee = () => {
    return (
        <div>
            <SectionTitle 
            heading={"Our Committee"}
            subHeading={"Introduction of our committee"}
            />
            <div className='grid md:grid-cols-3 p-5 gap-10'>
                <img className="rounded-lg transition-transform transform hover:scale-105" src={president} alt="" />
                <img className="rounded-lg transition-transform transform hover:scale-105" src={vicePresident} alt="" />
                <img className="rounded-lg transition-transform transform hover:scale-105" src={secretary} alt="" />
            </div>
            {/* <div className='flex justify-center items-center'>
            <button className="btn border hover:text-black border-[#1c99ca] text-white mt-2 bg-[#1c99ca]">Full Team</button>
            </div> */}
        </div>
    );
};

export default Committee;