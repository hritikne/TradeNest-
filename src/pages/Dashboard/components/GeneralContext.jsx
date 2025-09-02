import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

// Context with default functions
const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // Open Buy Window
  const openBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setIsBuyWindowOpen(true);
  };

  // Close Buy Window
  const closeBuyWindow = () => {
    setSelectedStockUID("");
    setIsBuyWindowOpen(false);
  };

  return (
    <GeneralContext.Provider value={{ openBuyWindow, closeBuyWindow }}>
      {children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
