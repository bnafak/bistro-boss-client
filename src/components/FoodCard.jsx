

const FoodCard = ({item}) => {

    const { name, image, recipe, price } = item;


  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className=" absolute bg-slate-400 p-1 text-white right-0 mr-4 mt-4">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify">
          <button className="btn btn-ghosh border-b-4 bg-slate-400 border-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
