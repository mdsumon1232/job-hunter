import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="container mx-auto my-[120px]">
      <h2 className="text-center text-[35px] sm:text-[48px]">
        Job Category List
      </h2>
      <p className="text-center mt-[25px] text-[16px] sm:font-[500]">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-items-center gap-[25px] mt-[32px]">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className="bg-[#7e90fe0d] w-[311px] h-[243px] pt-[40px] ps-[40px] rounded "
            >
              <img
                src={category.img}
                alt=""
                className="w-[70px] h-[70px] rounded"
              />
              <p className="text-[20px] mt-[32px]">{category.category}</p>
              <p
                className="text-[16px] font-[500] text-[#a3a3a3
] mt-[11px]"
              >
                {category.jobs} jobs available
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
