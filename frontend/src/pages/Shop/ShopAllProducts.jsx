import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader.jsx";
import DashboardSidebar from "../../components/Shop/Layout/DashboardSidebar.jsx";
import AllProducts from "../../components/Shop/AllProducts.jsx";

const ShopAllProducts = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between w-full">
        <div className="800px:w-[330px] w-[80px]">
          <DashboardSidebar active={3}></DashboardSidebar>
        </div>
        <div className="w-full justify-center flex">
          <AllProducts />
        </div>
      </div>
    </div>
  );
};

export default ShopAllProducts;
