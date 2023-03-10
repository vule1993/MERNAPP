import React from "react";
import { useSelector } from "react-redux";
import { saveCartToDB } from "../../State/cart/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import CartItemComponent from "./CartItemComponent";

const CartComponent = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.userReducer);

  //calculate the cart amount
  let total = 0;
  if (itemList) {
    itemList.forEach((item) => {
      total += item.price * item.quantity;
    });
  }

  //continue shopping direction
  const navigate = useNavigate();
  const BtnContinueShoppingHandler = () => {
    navigate("/displayproduct");
  };

  //Save Cart Button

  const handleSaveCart = (itemList, user) => {
    if (!user._id) {
      alert("Please login to save the cart!!!");
      navigate("/user");
    } else {
      const cart = { itemList: itemList, user: user };
      // dispatch(saveCart(cart)); this is already call when using saveCartToDB() below:
      dispatch(saveCartToDB(cart));
    }
  };

  //Check Out Button - Navigate to checkout page

  return (
    <>
      <div className="container py-4 px-2">
        <section className="vh-100" style={{ backgroundColor: "white" }}>
          <MDBContainer className="h-40">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <h2>Shopping Cart</h2>
                <MDBCard className="mb-4">
                  <MDBCardBody className="p-4">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Categories</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemList &&
                          itemList.map((item) => {
                            return (
                              <CartItemComponent item={item} key={item._id} />
                            );
                          })}
                      </tbody>
                    </table>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-5">
                  <MDBCardBody className="p-4">
                    <div className="float-end">
                      <p className="mb-0 me-5 d-flex align-items-center">
                        <span className="small text-muted me-2">
                          Order total:
                        </span>
                        <span className="lead fw-normal">
                          ${total.toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <MDBBtn
                        color="light"
                        size="lg"
                        className="me-2"
                        onClick={BtnContinueShoppingHandler}
                      >
                        Continue shopping
                      </MDBBtn>
                      <MDBBtn
                        color="secondary"
                        onClick={() => handleSaveCart(itemList, user)}
                        size="lg"
                      >
                        Save Cart
                      </MDBBtn>
                      <MDBBtn color="primary" size="lg">
                        Check Out
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </>
  );
};

export default CartComponent;

//back up before ui
// import { useSelector } from "react-redux";
// import { saveCartToDB } from "../../State/cart/cartActions";
// import { useDispatch } from "react-redux";

// const CartComponent = () => {
//   const products = useSelector((state) => state.cartReducer.cartItems);
//   const user = useSelector((state) => state.userReducer);

//   const dispatch = useDispatch();
//   console.log("Products from cartReducer", products);
//   const handleSaveCart = () => {
//     const cart = {
//       user: user,
//       itemList: products,
//     };
//     // dispatch(saveCart(cart)); this is already call when using saveCartToDB() below:
//     dispatch(saveCartToDB(cart));
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {products &&
//           products.map((product) => (
//             <li key={product._id}>
//               {product.name} ({product.quantity})
//             </li>
//           ))}
//       </ul>
//       <button onClick={handleSaveCart}>Save to Checkout</button>
//     </div>
//   );
// };

// export default CartComponent;
