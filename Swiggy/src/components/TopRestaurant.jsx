import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

function TopRestaurant({ data }) {
  // let [data, setData] = useState([]);
  let [value, setValue] = useState(0);

  function handleNext() {
    setValue((prevValue) => prevValue + 40);
  }

  function handlePrev() {
    setValue((prevValue) => prevValue - 40);
  }
  return (
    <div className="mt-12 w-full">
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl">Top Restaurants in Patna</h1>
        <div className="flex gap-3">
          <div
            onClick={handlePrev}
            className={
              ` cursor-pointer rounded-full w-8 h-8 flex justify-center items-center ` +
              (value <= 0 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-left ` +
                (value <= 0 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
          <div
            onClick={handleNext}
            className={
              ` cursor-pointer rounded-full w-8 h-8 flex justify-center items-center ` +
              (value >= 124 ? "bg-gray-100" : "bg-gray-200")
            }
          >
            <i
              className={
                `fi text-2xl mt-1 fi-rr-arrow-small-right ` +
                (value >= 124 ? "text-gray-300" : "text-gray-800")
              }
            ></i>
          </div>
        </div>
      </div>

      <div
        className={`flex mt-3 gap-4 w-full duration-700`}
        style={{ translate: `-${value}%` }}
      >
        {data.map(({ info }, id) => {
          return (
            <div key={id} className="hover:scale-95 duration-300">
              {<RestaurantCard info={info} id={id}></RestaurantCard>}
            </div>
          );
        })}
      </div>

      <hr className="border mt-10"></hr>
    </div>
  );
}

export default TopRestaurant;
