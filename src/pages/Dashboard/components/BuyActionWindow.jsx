import  { useState, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./buyaction.css"; 
import GeneralContext from "./GeneralContext";


const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://tradenest-orec.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      toast.success("✅ Order placed successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("❌ Failed to place order", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
    toast.info("ℹ️ Order canceled", {
      position: "top-right",
      autoClose: 1500,
    });
  };

  return (
    <>
      <div className="buy-window-container" id="buy-window" draggable="true">
        {/* Order Inputs */}
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                id="qty"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(Number(e.target.value))}
                min="1"
              />
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                id="price"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(Number(e.target.value))}
              />
            </fieldset>
          </div>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <span className="margin-info">
            Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}
          </span>
          <div className="action-buttons">
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default BuyActionWindow;
