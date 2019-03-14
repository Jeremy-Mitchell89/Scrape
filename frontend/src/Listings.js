import React, { useState, useEffect } from "react";
import axios from "axios";

const ListingsContext = React.createContext();

const Listings = ({ children }) => {
  const [items, setItems] = useState();
  useEffect(() => {
    const data = axios.get("/test").then(res => {
      setItems(res.data);
    });
  }, []);
  return (
    <div>
      <ListingsContext.Provider value={{ items }}>
        <h1>Test</h1>
        {children}
      </ListingsContext.Provider>
    </div>
  );
};

export { ListingsContext };
export default Listings;
