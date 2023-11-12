import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";



const MenuCategory = ({items, title, img}) => {

  return (
    <div className="pt-8">
        { title &&  <Cover img={Img} title={"our menu"}></Cover>}

      <div className="grid md.grid-cols-2 mt-16 gap-4 my-16">
        {items.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
