import { useEffect, useState } from "react";
import OnYourMind from "./onYourMind";
import TopRestaurant from "./TopRestaurant";
import OnlineFoodDelevery from "./OnlineFoodDelivery";

function Body() {
  const [TopRestaurantData, setTopRestaurantData] = useState([]);
  const [onYourMindMindData, setOnYourMindData] = useState([]);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const result = await data.json();
    //console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants);
    setTopRestaurantData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards.info);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full ">
      <div className="w-[75%] mx-auto  mt-2 overflow-hidden">
        <OnYourMind data={onYourMindMindData}></OnYourMind>
        <TopRestaurant data={TopRestaurantData} />
        <OnlineFoodDelevery data={TopRestaurantData}></OnlineFoodDelevery>
      </div>
    </div>
  );
}

export default Body;
//timr 1:2min
