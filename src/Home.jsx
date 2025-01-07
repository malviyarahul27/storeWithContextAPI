import React, { useContext, useEffect, useState } from "react";
import ProductProvider, { ProductContext } from "./utils/ProductContext";
import Nav from "./componects/Nav";
import ProductList from "./componects/ProductList";

const App = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);

  let eachCategory = [
    ...new Set(products.map((item, i) => item.category.name)),
  ];

  // filter products
  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category.name === selectedCategory)
    : products;

  const changePage = (selectPage) => {
    const totalPages = Math.ceil(products.length / 12);
    if (selectPage >= 1 && selectPage <= totalPages && selectPage !== page)
      setPage(selectPage);
  };

  return (
    <>
      <div className="w-full">
        <Nav />

        <div className="w-full h-full flex">
          <ul className="w-full h-screen flex flex-wrap items-to justify-center p-8 bg-zinc-800 gap-5">
            <div className="w-full h-20 flex items-center">
              <div className="w-[60%] flex gap-5 px-10">
                <button
                  onClick={() => setSelectedCategory("")}
                  className="border border-zinc-600 px-3 p-1 text-zinc-400 hover:bg-zinc-600 hover:text-zinc-950 shadow-lg"
                >
                  All
                </button>
                {eachCategory.map((category, i) => (
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className="border border-zinc-600 px-3 p-1 text-zinc-400 hover:bg-zinc-600 hover:text-zinc-950 shadow-lg"
                    key={i}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="bg-blue w-[40%] flex justify-center text-zinc-400">
                {products.length > 0 && (
                  <div className="flex gap-2">
                    <span
                      onClick={() => changePage(page - 1)}
                      className="m-auto cursor-pointer"
                    >
                      ◀️
                    </span>
                    {[...Array(Math.ceil(products.length / 12))].map((_, i) => (
                      <span
                        onClick={() => changePage(i + 1)}
                        className={`border cursor-pointer border-zinc-300 p-1 px-3 ${
                          page === i + 1 ? "bg-zinc-500 text-zinc-100" : ""
                        }`}
                        key={`page-${i}`}
                      >
                        {i + 1}
                      </span>
                    ))}
                    <span
                      onClick={() => changePage(page + 1)}
                      className={`m-auto cursor-pointer`}
                    >
                      ▶️
                    </span>
                  </div>
                )}
              </div>
            </div>
            {filteredProducts
              .slice(page * 12 - 12, page * 12)
              .map((product, i) => (
                <div key={product.id}>
                  <ProductList product={product} />
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
