import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="item">
      <img alt="Image of Item" src={item.imageURL} />
      <p>{item.title}</p>
      <p>{`$${item.price}`}</p>
      <p>{item.Description}</p>
      <a href={item.link}>Go to Post</a>
      <p>{format(item.date, "MM/DD/YYYY")}</p>
    </div>
  );
};

export default Item;
