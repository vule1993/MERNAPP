import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveProductsToState,
  saveProductsToDB,
} from "../../State/products/productsActions";

let ProductComponent = (props) => {
  let inputtedProductName = useRef(null);
  let inputtedProductDescription = useRef(null);
  let inputtedProductCategories = useRef(null);
  let inputtedProductPrice = useRef(null);

  let product = useSelector((state) => state.productsReducer);

  console.log(product);

  let dispatchProduct = useDispatch(); //mapDispatchToProps

  //   useEffect(() => {
  //     inputtedProductName = product.name;
  //     inputtedProductDescription = product.description;
  //     inputtedProductCategories = product.categories;
  //     inputtedProductPrice = product.price;
  //   }, []);

  let readForm = (evt) => {
    let product = {
      name: inputtedProductName.current.value,
      description: inputtedProductDescription.current.value,
      categories: inputtedProductCategories.current.value,
      price: inputtedProductPrice.current.value,
    };

    alert("Below new product is going to be added" + JSON.stringify(product));

    dispatchProduct(saveProductsToDB(product));

    evt.preventDefault();
  };

  return (
    <>
      <h1>ADD NEW PRODUCT</h1>
      <form className={"form col-md-10 userHook"} onSubmit={readForm}>
        <label>
          <b>Product Name:</b>
          <input
            type="text"
            className={"form-control col-md-12"}
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
            className={"form-control col-md-12"}
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
            className={"form-control col-md-12"}
            ref={inputtedProductCategories}
            placeholder="enter categories"
            maxLength={30}
            required
          />
        </label>
        <br />
        <label>
          <b>Price:</b>
          <input
            type="number"
            className={"form-control col-md-12"}
            ref={inputtedProductPrice}
            placeholder="enter price"
            required
          />
        </label>

        <br />
        <input
          type="submit"
          className={"btn btn-primary"}
          value="ADD PRODUCT"
        />
      </form>
    </>
  );
};

export default ProductComponent;
