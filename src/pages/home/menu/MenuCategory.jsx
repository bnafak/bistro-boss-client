import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";
import img from '../../../assets/home/featured.jpg'
import { Link } from "react-router-dom";


const MenuCategory = ({items, title, Img}) => {

  return (
    <div className="pt-8">

        { title &&  <Cover img={Img} title={title}></Cover>}

      <div className="grid md:grid-cols-2 mt-16 gap-10 my-16">

        {items.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}

      </div>

      <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
    </div>
  );
};

export default MenuCategory;
