import React from "react";
import {
  AiOutlineCreditCard,
  AiOutlineLogin,
  AiOutlineMessage,
} from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router";
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RiLockPasswordLine, RiTeamLine } from "react-icons/ri";
import axios from "axios";
import { server } from "../../Server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { GrUserAdmin } from "react-icons/gr";

const ProfileSideBar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      <div>
        {user.role == "user" ? (
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(2)}
          >
            <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
            <span
              className={`pl-3 ${
                active === 2 ? "text-[red]" : ""
              } 800px:block hidden`}
            >
              Orders
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4)}
      >
        <RiLockPasswordLine size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>
      <div>
        {user.role == "user" && user.companyId !== "Not Assigned" ? (
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(5)}
          >
            <RiTeamLine size={20} color={active === 5 ? "red" : ""} />
            <span
              className={`pl-3 ${
                active === 5 ? "text-[red]" : ""
              } 800px:block hidden`}
            >
              Company Details{" "}
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {user.role == "admin" ? (
        <div
          className="flex items-center cursor-pointer w-full mb-8"
          onClick={() => navigate("/admin/admin-orders")}
        >
          <GrUserAdmin size={20} color={active === 8 ? "red" : ""} />
          <span
            className={`pl-3 ${
              active === 8 ? "text-[red]" : ""
            } 800px:block hidden`}
          >
            Admin Dashboard
          </span>
        </div>
      ) : (
        <div></div>
      )}
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6) || logoutHandler()}
      >
        <AiOutlineLogin size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSideBar;
