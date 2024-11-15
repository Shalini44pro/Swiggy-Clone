import RestaurantCard from "./RestaurantCard";
function OnlineFoodDelevery({ data }) {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl mt-1">
          Restaurants with Online Food Delevery in Patna
        </h1>
        <div className="grid grid-cols-4 gap-10 mt-12">
          {data.map(({ info }, id) => {
            return (
              <div key={id} className="hover:scale-95 duration-300">
                {<RestaurantCard info={info} id={id}></RestaurantCard>}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OnlineFoodDelevery;
