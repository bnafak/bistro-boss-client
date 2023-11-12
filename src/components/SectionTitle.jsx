/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {


    return (
        <div className="mx-auto my-4 md:w-4/12">
           
            <h3 className="text-center text-xl my-4">{subHeading}</h3>
            <p className="text-yellow-600 text-4xl mb-4 py-3 uppercase text-center border-y-4">---{heading}---</p>
        </div>
    );
};

export default SectionTitle;