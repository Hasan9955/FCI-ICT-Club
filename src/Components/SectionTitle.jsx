/* eslint-disable react/prop-types */



const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-5/12 mx-auto text-center my-8">
            <h3 className="text-[#1c99ca] mb-2 font-sans">--- {subHeading} ---</h3>
            <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase border-y-2 py-3">{heading}</h1>
        </div>
    );
};

export default SectionTitle;