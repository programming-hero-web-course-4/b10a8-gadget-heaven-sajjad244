import {FaShoppingCart} from "react-icons/fa";
import {IoMdHeart} from "react-icons/io";
import {Link, NavLink} from "react-router-dom";
import {useCart} from "../../utilites/contextApi";

const NavBar = () => {
  const {cartItems, favoriteItems} = useCart();

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-purple-500  bg-base-100 rounded-box z-[1] mt-3 w-52 p-5 shadow font-semibold gap-2"
          >
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({isActive}) =>
                `font-semibold ${
                  isActive ? "text-warning" : "hover:text-warning"
                }`
              }
              to="/location"
            >
              Locations
            </NavLink>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl font-bold  text-purple-500"
        >
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold gap-8 text-purple-500">
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-warning" : "hover:text-warning"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-warning" : "hover:text-warning"
              }`
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-warning" : "hover:text-warning"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>

          <NavLink
            className={({isActive}) =>
              `font-semibold ${
                isActive ? "text-warning" : "hover:text-warning"
              }`
            }
            to="/location"
          >
            Locations
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end space-x-3 rounded-full">
        <div className="relative">
          <FaShoppingCart size={25} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
            {cartItems.length}
          </span>
        </div>

        <div className="relative">
          <IoMdHeart size={25} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
            {favoriteItems.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
