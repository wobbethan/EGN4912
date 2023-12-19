import React from "react";
import styles from "../../styles/styles";
import { brandingData, categoriesData } from "../../static/data";
import { Navigate } from "react-router";
function Categories() {
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className=" my-12 justify-between w-full shadow-sm bg-white p-5 rounded-md">
          {brandingData &&
            brandingData.map((i, index) => {
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>;
            })}
        </div>
      </div>

      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl-gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                Navigate(`/products?category=${i.title}`);
              };
            })}
        </div>
      </div>
    </>
  );
}

export default Categories;
