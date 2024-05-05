import { useNavigate } from "react-router-dom";
import { addOrder } from "../../../features/orders/orderSlice";
import { Header } from "../../shared/Header";
import TopDown from "../../framer/TopDown";
import { NewOrderForm } from "./NewOrderForm";
import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { toast ,ToastContainer} from "react-toastify";
const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, consigneeName: payload };
    case "SET_WEIGHT":
      return { ...state, orderWeight: payload };

    case "SET_ORDERTYPE":
      return { ...state, orderType: payload };
    case "SET_FRAGILE":
      return { ...state, fragile: payload };
    case "SET_DESCRIPTION":
      return { ...state, orderDescription: payload };

    default:
      return state;
  }
};

export default function () {
  const [newOrder, dispatch] = useReducer(orderReducer, {
    consigneeName: "", // String
    orderWeight: 0, // Number (assuming it's a weight value)
    orderType: "", // String
    fragile: false, // Boolean (assuming it's a flag)
    orderDescription: "",
  });

 
  function onsetConsg(e) {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  }

  function onHandleWeight(e) {
    dispatch({ type: "SET_WEIGHT", payload: Number(e.target.value) });
  }
  function onHandleType(e) {
    dispatch({ type: "SET_ORDERTYPE", payload: e.target.value });
  }
  function onHandleFragile(e) {
    console.log(e.target.value)
    dispatch({ type: "SET_FRAGILE", payload: e.target.value });
  }

  function onHandleDesc(e) {
    dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
  }
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmitOrder(e) {

    e.preventDefault();

    if (newOrder.consigneeName === "" || newOrder.orderWeight === 0 || newOrder.orderType === "" || newOrder.orderDescription === "") {
      toast.error("Please Fill in Complete Details",{
        position: toast.POSITION.TOP_RIGHT,
          className: "toast_message",
      });
      return;
    }
    Dispatch(addOrder(newOrder));
    navigate('/neworder/routes');


  }

  return (
    <div className="Main">
      <Header />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            gap: "1rem",
            margin: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              display: "flex",
              color: "white",
            }}
          >
            With Us,
          </h1>
          <h1 style={{ color: "#00c46a" }}> Its Easy !</h1>
        </div>
        <NewOrderForm
          onsetCons={onsetConsg}
          onHandleWeight={onHandleWeight}
          onHandleType={onHandleType}
          onHandleDesc={onHandleDesc}
          onHandleFragile={onHandleFragile}
          onSubmitOrder={onSubmitOrder}
        />
        <ToastContainer />

      </div>
    </div>
  );
}

