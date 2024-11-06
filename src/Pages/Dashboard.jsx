import {NavLink, Outlet} from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="hero bg-purple-500">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl text-white font-bold">Dashboard</h1>
            <p className="mb-5">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-6 justify-center mb-10">
              <NavLink
                to="/dashboard/cart"
                className={({isActive}) =>
                  ` w-36 p-2 rounded-full font-semibold ${
                    isActive
                      ? "bg-white text-purple-600"
                      : " border-2 text-white "
                  }`
                }
              >
                Cart
              </NavLink>
              <NavLink
                to="/dashboard/wishlist"
                className={({isActive}) =>
                  ` w-36 p-2 rounded-full font-semibold ${
                    isActive
                      ? "bg-white text-purple-600"
                      : " border-2 text-white "
                  }`
                }
              >
                Wishlist
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* */}
    </div>
  );
};

export default Dashboard;
