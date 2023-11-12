import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../shared/Cover";

const Order = () => {
  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <div className="tabs">
        <a className="tab tab-lifted">Tab 1</a>
        <a className="tab tab-lifted tab-active">Tab 2</a>
        <a className="tab tab-lifted">Tab 3</a>
      </div>
    </div>
  );
};

export default Order;
