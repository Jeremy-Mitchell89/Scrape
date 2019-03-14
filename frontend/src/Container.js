import React, { useContext } from "react";
import { ListingsContext } from "./Listings";
import Item from "./Item";

const Container = () => {
  const { items } = useContext(ListingsContext);
  return (
    <div id="container">
      {items ? (
        items.map(item => {
          return <Item item={item} />;
        })
      ) : (
        <h1>Loading Items!!</h1>
      )}
    </div>
  );
};

export default Container;
