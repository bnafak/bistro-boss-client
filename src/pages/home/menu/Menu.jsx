import { Helmet } from "react-helmet-async";
import UseMenu from "./UseMenu";
import Cover from "../../shared/Cover";
import menuImg from "../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../assets/home/01.jpg";
import saladImg from "../../../assets/home/02.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = UseMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
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

      {/* Desert menu items  */}
      <MenuCategory items={desserts} title="desserts" img={dessertImg}></MenuCategory>

      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

      {/* salad items  */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
