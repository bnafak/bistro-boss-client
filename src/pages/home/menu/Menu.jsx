import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
import UseMenu from "./UseMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = UseMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>

      {/* Main cover  */}

      <SectionTitle
        subHeading=" Don't miss"
        heading="Today's offer"
      ></SectionTitle>

      {/* Offered menu items  */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desert items  */}
      <MenuCategory items={dessert} title="Dessert" img={dessertImg}>
        
      </MenuCategory>
    </div>
  );
};

export default Menu;
