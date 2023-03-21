import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveProductsToState,
  saveProductsToDB,
} from "../../State/products/productsActions";

const ProductComponent = () => {
  const inputtedProductName = useRef(null);
  const inputtedProductDescription = useRef(null);
  const inputtedProductCategories = useRef(null);
  const inputtedProductPrice = useRef(null);

  const product = useSelector((state) => state.productsReducer);
  const userName = useSelector((state) => state.userReducer.userName);

  const dispatch = useDispatch();

  const readForm = (evt) => {
    evt.preventDefault();
    const newProduct = {
      name: inputtedProductName.current.value,
      description: inputtedProductDescription.current.value,
      categories: inputtedProductCategories.current.value,
      price: inputtedProductPrice.current.value,
    };
    alert("New product is going to be added: " + JSON.stringify(newProduct));
    dispatch(saveProductsToDB(newProduct));
  };

  return (
    <>
      {userName === "admin" ? (
        <>
          <h1>ADD NEW PRODUCT</h1>
          <form className="form col-md-10 userHook" onSubmit={readForm}>
            <label>
              <b>Product Name:</b>
              <input
                type="text"
                className="form-control col-md-12"
                ref={inputtedProductName}
                placeholder="Enter Product Name"
                maxLength={30}
                required
              />
            </label>
            <br />
            <label>
              <b>Product description:</b>
              <input
                type="text"
                className="form-control col-md-12"
                ref={inputtedProductDescription}
                placeholder="Enter description"
                maxLength={100}
                required
              />
            </label>
            <br />
            <label>
              <b>Product Categories:</b>
              <input
                type="text"
                className="form-control col-md-12"
                ref={inputtedProductCategories}
                placeholder="Enter categories"
                maxLength={30}
                required
              />
            </label>
            <br />
            <label>
              <b>Price:</b>
              <input
                type="number"
                className="form-control col-md-12"
                ref={inputtedProductPrice}
                placeholder="Enter price"
                required
              />
            </label>
            <br />
            <input
              type="submit"
              className="btn btn-primary"
              value="ADD PRODUCT"
            />
          </form>
        </>
      ) : (
        <h2>Please log in as Admin to add a new product</h2>
      )}
    </>
  );
};

export default ProductComponent;
