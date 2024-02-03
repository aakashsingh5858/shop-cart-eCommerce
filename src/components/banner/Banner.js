import React, { useState } from "react";
import "./banner.css";
import Input from "../input/Input";
import productData from "../../products.json";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="banner-bg">
      <div className="banner-container">
        <h1 className="banner-title">
          search your one from <span className="span-color">thousand</span> of
          products
        </h1>
        <div className="search-container">
          <Input
            placeholder="Search your product"
            onChange={handleSearch}
            value={searchInput}
            suffix={<CiSearch size="2rem" />}
            className="input-style"
          />
        </div>
        <div className="search-subHeading">
          We have the largest collection of products
        </div>
        <div className="search-list-wrap">
          {searchInput &&
            filteredProducts?.map((product, i) => {
              return (
                <li className="search-list" key={i}>
                  {product.name}
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
