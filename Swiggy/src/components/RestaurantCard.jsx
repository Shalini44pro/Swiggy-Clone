import { Link } from "react-router-dom";

function RestaurantCard({ info, id }) {
  return (
    <Link to={"/restaurantMenue"}>
      <div className="min-w-[290px] h-[180px] relative" key={id}>
        <img
          className="w-full h-full rounded-2xl object-cover"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.cloudinaryImageId}`}
        ></img>
        <div className="bg-gradient-to-t from-black from-1% to-transparent to-40% absolute top-0 w-full h-full rounded-2xl"></div>
        <p className="absolute font-bold bottom-0 text-white text-2xl ml-1 mb-2">
          {info?.aggregatedDiscountInfoV3
            ? info?.aggregatedDiscountInfoV3?.header +
              " " +
              info?.aggregatedDiscountInfoV3?.subHeader
            : ""}
          {/* {info?.aggregatedDiscountInfoV3?.header +
            " " +
            info?.aggregatedDiscountInfoV3?.subHeader} */}
        </p>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">{info?.name}</h2>
        <p className="flex items-center gap-1 text-base font-medium">
          <i className="fi fi-ss-circle-star text-green-700 text-lg mt-1"></i>
          {info?.avgRating}. <span>{info?.sla?.slaString}</span>
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {info.cuisines.join(",")}
        </p>
        <p className="line-clamp-1 text-black/60 font-medium">
          {info?.locality}
        </p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
