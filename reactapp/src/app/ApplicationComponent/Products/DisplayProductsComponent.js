import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../State/products/productsActions";
import { addToCart } from "../../State/cart/cartActions";

let DisplayProductsComponent = (props) => {
  const products = useSelector((state) => state.displayProductsReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      console.log("Product will unmount");
    };
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products: </h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div
              className="col-12 col-sm-8 col-md-6 col-lg-4"
              key={product._id}
            >
              <div className="card">
                <div href="https://ibb.co/xFfH1Ff">
                  <div href="https://ibb.co/xFfH1Ff">
                    <div href="https://ibb.co/yRSWzMk">
                      <img
                        src="https://i.ibb.co/26NgzLM/christina-wocintechchat-com-n-RJRBhh-OBq-A-unsplash.jpg"
                        alt="christina-wocintechchat-com-n-RJRBhh-OBq-A-unsplash"
                        border="0"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Categories: {product.categories}
                  </h6>
                  <p className="card-text">{product.description}. </p>
                  <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success">
                      <h5 className="mt-4">${product.price}</h5>
                    </div>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      <i className="fas fa-heart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayProductsComponent;

//back up
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../../State/products/productsActions";

// let DisplayProductsComponent = (props) => {
//   const products = useSelector((state) => state.displayProductsReducer.data);
//   // const [products, setProducts] = useState([]);

//   let dispatchProduct = useDispatch(); //mapDispatchToProps

//   useEffect(() => {
//     dispatchProduct(fetchProducts());
//     return () => {
//       console.log("Product will unmount");
//     };
//   }, []);

//   return (
//     // <div>
//     //   {products.map((product) => (
//     //     <div key={product.name}>
//     //       <h2>{product.description}</h2>
//     //       <p>{product.categories}</p>
//     //       <p>${product.price}</p>
//     //     </div>
//     //   ))}
//     // </div>
//     <div>
//       <h2>Products: </h2>

//       <div class="container">
//         <div class="row">
//           {products.map((product) => (
//             <div class="col-12 col-sm-8 col-md-6 col-lg-4">
//               <div class="card">
//                 <a href="https://ibb.co/xFfH1Ff">
//                   <a href="https://ibb.co/xFfH1Ff">
//                     <a href="https://ibb.co/yRSWzMk">
//                       <img
//                         src="https://i.ibb.co/26NgzLM/christina-wocintechchat-com-n-RJRBhh-OBq-A-unsplash.jpg"
//                         alt="christina-wocintechchat-com-n-RJRBhh-OBq-A-unsplash"
//                         border="0"
//                       ></img>
//                     </a>
//                   </a>
//                 </a>
//                 <div class="card-img-overlay d-flex justify-content-end">
//                   <a href="#" class="card-link text-danger like">
//                     <i class="fas fa-heart"></i>
//                   </a>
//                 </div>
//                 <div class="card-body">
//                   <h4 class="card-title">{product.name}</h4>
//                   <h6 class="card-subtitle mb-2 text-muted">
//                     Categories: {product.categories}
//                   </h6>
//                   <p class="card-text">{product.description}. </p>
//                   <div class="buy d-flex justify-content-between align-items-center">
//                     <div class="price text-success">
//                       <h5 class="mt-4">${product.price}</h5>
//                     </div>
//                     <a href="#" class="btn btn-danger mt-3">
//                       <i class="fas fa-shopping-cart"></i> Add to Cart
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisplayProductsComponent;
