import SectionTitle from "../../components/SectionTitle";
import featuredimg from "../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item text-white bg-fixed pt-8 py-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured item"}
      ></SectionTitle>

      <div className="grid md:flex bg-slate-500 bg-opacity-30 justify-center px-36 py-20 items-center">
        <div>
          <img src={featuredimg} alt="" />
        </div>

        <div className="md:ml-10 mt-8 pt-8">
          <p>Aug 29, 2029</p>
          <p className="uppercase">Where get I some</p>
          <p className="" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repudiandae voluptate, eaque facere aperiam aspernatur rerum magni,
            porro maiores necessitatibus, cumque perspiciatis voluptatibus ad
            voluptatem minus saepe quaerat. Asperiores accusamus sapiente veniam
            iste itaque quam eligendi in amet sint. Nesciunt libero laboriosam
            quaerat! Fugiat esse asperiores in neque a iure velit.
          </p>
          <button className="btn btn-outline border-0 mt-5 border-b-4">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
