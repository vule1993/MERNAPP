import React, { useState } from "react";
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
import {
  removeFromCart,
  updateItemQuantity,
} from "../../State/cart/cartActions";
import { useDispatch } from "react-redux";

export default function CartItemComponent(props) {
  let item = props.item;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const updateItemHandler = (item_id, quantity) => {
    console.log("update item handler called.");
    dispatch(updateItemQuantity(item_id, quantity));
  };

  const removeItemHandler = (item) => {
    console.log("remove item handler called.");
    dispatch(removeFromCart(item));
  };

  return (
    <>
      <tr key={item._id}>
        <td>
          <MDBCardImage
            fluid
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
            alt="Generic placeholder image"
            style={{ width: "100px", height: "70px" }}
          />
        </td>
        <td>{item.name}</td>
        <td>
          <MDBIcon fas icon="circle me-2" style={{ color: "#fdd8d2" }} />
          {item.categories}
        </td>
        {/* <td>{item.quantity}</td> */}
        <td>
          <input
            type={"number"}
            value={quantity}
            onChange={(evt) => {
              setQuantity(evt.target.value);
            }}
            maxLength={"2"}
          />
        </td>
        <td>${item.price}</td>
        <td>${item.price * item.quantity}</td>
        <td>
          <MDBBtn
            color="primary"
            onClick={() => updateItemHandler(item._id, quantity)}
          >
            Update
          </MDBBtn>
          <MDBBtn color="danger" onClick={() => removeItemHandler(item)}>
            Remove
          </MDBBtn>
        </td>
      </tr>
    </>
  );
}
