/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {


    return (
        <div className="mx-auto my-4 md:w-4/12">
            <p className="text-yellow-600 text-center border-y-4">---{heading}---</p>
            <h3 className="text-center text-xl border-y-4 py-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;