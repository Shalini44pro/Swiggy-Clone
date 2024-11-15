import { Link, Outlet } from "react-router-dom";

function Header() {
  const navItems = [
    { name: "swiggy corporate", image: "fi-rr-shopping-bag" },

    {
      name: "search",
      image: "fi-rs-search",
    },

    {
      name: "offer",
      image: "fi-rr-badge-percent",
    },

    {
      name: "Help",
      image: "fi-rr-interrogation",
    },

    {
      name: "sing-in",
      image: "fi-rs-user",
    },
  ];

  return (
    <>
      <div className="w-full shadow-md h-24 flex justify-center items-center sticky bg-white z-40 top-0">
        <div className="w-[70%]  flex justify-between">
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                className="w-24"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMhQZ3YpaYOinNFPBeej97sfcA8W7m6ex1A&s"
              ></img>
            </Link>

            <div className="flex items-center gap-2">
              <p className="font-bold text-black border-b-2 border-black">
                others
              </p>
              <i className="fi text-2xl mt-2 text-orange-600 fi-rr-angle-small-down"></i>
            </div>
          </div>

          <div className="flex items-center gap-12">
            {navItems.map((item, id) => (
              <div className="flex items-center gap-3" key={id}>
                <i
                  className={
                    "fi mt-1 font-medium text-gray-600 text-xl " + item.image
                  }
                ></i>
                <p className="font-medium text-gray-600 text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Header;
//15min
