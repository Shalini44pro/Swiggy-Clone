import { useState } from "react";

function OnYourMind({ data }) {
  let [value, setValue] = useState(0);

  function handleNext() {
    value >= 124 ? "" : setValue((prevValue) => prevValue + 34);
  }

  function handlePrev() {
    value <= 0 ? "" : setValue((prevValue) => prevValue - 34);
  }
  return (
    <div>
      <div className="flex justify-between mt-5">
        <h1 className="font-bold text-2xl"> What's on your mind</h1>
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
        style={{ translate: `-${value}%` }}
        className={`flex mt-3  duration-700`}
      >
        {data.map((item, i) => (
          <img
            className="w-40"
            key={i}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          ></img>
        ))}
      </div>

      <hr className="border"></hr>
    </div>
  );
}

export default OnYourMind;
